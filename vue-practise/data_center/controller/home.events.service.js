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

    let fetchDaily = function(req, res) {
        let _date = req.params.date;
        client.query({
            text: `select * from home.event_daily_view where date='${_date}' order by id`
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
        fetchDaily,
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
        },
        postDaily: function(req, res){
            let dailyTime = req.body.time;
            let dailyTrophy = req.body.trophy;
            let dailyType = req.body.type;
            let dailyDate = req.params.date;
            async.waterfall([
                function(next) {
                    let addDailyText = `insert into home.event_daily(event_id, date, time, trophy ) values(${dailyType},'${dailyDate}', ${dailyTime},  ${dailyTrophy})`
                    console.log(addDailyText);
                    client.query({
                        text: addDailyText
                    }, function (error) {
                        if(error) {
                            console.log(error);
                            return;
                        }
                        next(null, req, res);
                    })
                },
                fetchDaily
            ])
        }
    }
}