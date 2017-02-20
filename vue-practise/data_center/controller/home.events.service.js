var async = require('async');
var moment = require('moment');

module.exports = function (client) {
    return {
        fetchEventType: function(req, res) {
            client.query({
                text: 'select * from home.event_type;'
            }, function (error, result) {
                if(error) {
                    console.log(error);
                    return;
                }
                res.send(result.rows);
            })
        },
    }
}