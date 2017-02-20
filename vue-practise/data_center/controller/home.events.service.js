var async = require('async');
var moment = require('moment');

module.exports = function (client) {

    let fetchEventItemsActive = function (req, res) {
        client.query({
            text: `select * from home.event_item where status=1 order by id`
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
        fetchEventItemsActive,
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
        postEventItem: function(req, res){
            let eventName = req.body.name;
            let eventType = req.body.type;
            let eventStatus = req.body.status?req.body.status : 1;
            async.waterfall([
                function(next) {
                    let addEventItemText = `insert into home.event_item(name, type, status ) values('${eventName}','${eventType}', ${eventStatus})`
                    console.log(addEventItemText);
                    client.query({
                        text: addEventItemText
                    }, function (error) {
                        if(error) {
                            console.log(error);
                            return;
                        }
                        next(null, req, res);
                    })
                },
                fetchEventItemsActive
            ])
        }
    }
}