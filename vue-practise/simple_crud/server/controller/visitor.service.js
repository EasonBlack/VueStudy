var async = require('async');


module.exports = function (client) {

    let VisitorAll = function (req, res) {
        client.query({
            text: 'select * from visitor order by id'
        }, function (error, results) {
            if (error) {
                console.log(error);
            }
            res.send({
                data: results.rows
            });
        });
    }

    return {
        VisitorAll,
        VisitorAdd: function(req, res) {
            var self = this;
            var queryText = "";
            var arrayParam =  "";
            var queryValues = [];
            console.log(req.body);

            if(req.body.sites.length) {
                arrayParam = `ARRAY[${req.body.sites.map(o=> "\'" + o + "\'").join(',')}]`;
            } else {
                arrayParam = `ARRAY[]::text[]`;
            }

            if(!req.body.id) {
                queryText = `INSERT INTO visitor(name, auth) values($1, ${arrayParam});`;
                queryValues = [req.body.name];
            } else {
                queryText = `UPDATE visitor set name=$1, auth=${arrayParam} WHERE id=$2;`;
                queryValues = [req.body.name, req.body.id];
            }
            console.log(queryText);
            async.waterfall([
                function (next) {
                    client.query({
                        text: queryText,
                        values: queryValues
                    }, function (error, results) {
                        next(null, req, res)
                    })
                },
                VisitorAll
            ])
        },
        VisitorDelete: function(req, res) {
            async.waterfall([
                function (next) {
                    client.query({
                        text: 'DELETE FROM visitor WHERE id=$1',
                        values: [req.params.id]
                    }, function (error, results) {
                        next(null, req, res)
                    })
                },
                VisitorAll
            ])
        }
    }
}