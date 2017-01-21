var async = require('async');
var uuid = require('node-uuid');
var path = require('path');
var fs = require('fs');

module.exports = function (client) {

    return {
        feedbackAdd: function(req, res) {
            let { name,time, date, next} = req.body.feedback;
            let answers = req.body.answers;
            async.waterfall([
                function(next) {
                    client.query({
                        text: 'insert feedback(name, time, date, next) values($1,$2,$3,$4) RETURNING id',
                        values: [name,time, date, next]
                    }, function (error, result) {
                        if(error) {
                            console.log(error);
                            return;
                        }
                        var _id = results.rows[0].id;
                        next(null, _id);
                    })
                },
                function(id) {
                    console.log(id);
                    
                }
            ]);

        }
    }
}