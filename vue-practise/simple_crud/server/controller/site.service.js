var async = require('async');
var uuid = require('node-uuid');
var path = require('path');
var fs = require('fs');

module.exports = function (client) {

    let SiteAll = function (req, res) {
        client.query({
            text: 'select * from site order by id'
        }, function (error, results) {
            if (error) {
                console.log(error);
            }
            res.send({
                data: results.rows
            });
        });
    }

    let SaveSiteImage = (req, res,  imagename, next) => {

        if(req.body.image) {
            var _img = req.body.image.replace(/^data:image\/png;base64,/, "");
            var dataBuffer = new Buffer(_img, 'base64');
            fs.writeFile(path.join(__dirname, '../site_images' , imagename+'.png'), dataBuffer, function (err) {
                if (err) {
                    console.log(err)
                } else {
                    console.log(`save ${imagename} success!`);
                }
            });
        }
        next(null, req, res)
    }

    let DeleteSiteImage = (req, res, imagename, next) => {
        if(imagename) {
            let url = path.join(__dirname, '../site_images' , imagename+'.png');
            fs.accessSync(url, fs.F_OK);
            fs.unlinkSync(url);
        }
        next(null, req, res)
    }

    return {
        SiteAll,
        SiteAdd: function(req, res) {
            var self = this;
            var imagename = req.body.name+ '_site';

            if(!req.body.id) {
                queryText = `INSERT INTO site(name,image) values($1, $2)`;
                queryValues = [req.body.name, imagename ]
            } else {
                queryText = `UPDATE site set name=$1, image=$2 WHERE id=$3;`;
                queryValues = [req.body.name, imagename, req.body.id];
            }

            async.waterfall([
                function (next) {
                    client.query({
                        text: queryText,
                        values: queryValues
                    }, function (error, results) {
                        if(error) {
                            console.log(error);
                            return;
                        }
                        next(null, req, res, imagename)
                    })
                },
                SaveSiteImage,
                SiteAll
            ])
        },
        SiteDelete: function(req, res) {
            async.waterfall([
                function (next) {
                    client.query({
                        text: 'DELETE FROM site WHERE id=$1 RETURNING *',
                        values: [req.params.id]
                    }, function (error, results) {
                        next(null, req, res, results.rows[0].image)
                    })
                },
                DeleteSiteImage,
                SiteAll
            ])
        }
    }
}