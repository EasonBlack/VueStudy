var async = require('async');


module.exports = function (client) {

    let SiteAll = function (req, res) {
        client.query({
            text: 'select * from site'
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
        SiteAll,
        SiteAdd: function(req, res) {
            var self = this;
            console.log(req.body);
            async.waterfall([
                function (next) {
                    client.query({
                        text: `INSERT INTO site(name) values($1)`,
                        values: [req.body.name]
                    }, function (error, results) {
                        next(null, req, res)
                    })
                },
                SiteAll
            ])
        },
    }
}