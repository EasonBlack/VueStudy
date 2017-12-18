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

    let fetchEventItems = function (req, res) {
        let _status = req.query.status ;
        let _type = req.query.type;
        console.log(req.body);
        console.log(req.query);

        let _queryTxt = 'select * from home.event_item where 1=1 ';
        if(_status) {
            _queryTxt = _queryTxt +  'and  status=' + _status;
        }
        if(_type) {
            _queryTxt =  _queryTxt + 'and  type=' + _type;
        }
        console.log(_queryTxt);
        client.query({
            text: _queryTxt +  ' order by id'
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
        let _date = req.params.date || req.body.date;
        let _enddate = req.params.enddate;
        if(!_enddate) {
            _enddate = _date;
        }
        client.query({
            text: `select * from home.event_daily_view where date>='${_date}' and date<='${_enddate}' order by id`
        }, function (error, results) {
            if (error) {
                console.log(error);
            }
            res.send({
                data: results.rows
            });
        });
    }

    let fetchDailyByEventId = function(req,res) {
        let _id = req.params.id;
        client.query({
            text: `select * from home.event_daily_view where event_id = ${_id}`
        }, function (error, results) {
            if (error) {
                console.log(error);
            }
            res.send(
                 results.rows
            );
        });
    }

    let fetchStoryPiece = function(req, res) {
        let id = req.params.id;
        client.query({
            text: `select * from home.story_piece where item_id=${id}`
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
        fetchDailyByEventId,
        fetchEventItemsActive,
        fetchEventItems,
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
        updateEventType: function(req,res){
            console.log(123);
            let eventId = req.params.id;
            let updateEventTypeText = `update home.event_item set name='${req.body.name}' where id=${eventId}`
            console.log(updateEventTypeText)
            client.query({
                text: updateEventTypeText
            }, function (error, result) {
                if(error) {
                    console.log(error);
                    return;
                }
                res.send(result);
            })
        },
        postEventItem: function(req, res){
            let eventName = req.body.name;
            let eventType = req.body.type;
            let eventStatus = req.body.status?req.body.status : 1;
            async.waterfall([
                function(next) {

                    //let addEventItemText = `insert into home.event_item(name, type, status ) values('${eventName}','${eventType}', ${eventStatus})`
                    let addEventItemText = `select home.add_event_item('${eventName}', ${eventType}, ${eventStatus})`
                    console.log(addEventItemText)
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
       
        changeEventStatus: function(req, res){
            let eventId = req.params.id;
            let eventStatus = req.params.status;
            async.waterfall([
                function(next) {
                    // let closeEventItemText = `update home.event_item set status=${eventStatus} where id=${eventId}`
                    let changeEventItemText = `select home.update_event_item_status(${eventId}, ${eventStatus})`
                    console.log(changeEventItemText)
                    client.query({
                        text: changeEventItemText
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
            let dailyComment = req.body.comment || '';
            let dailyDate = req.params.date;

            async.waterfall([
                function(next) {
                    let addDailyText = `insert into home.event_daily(event_id, date, time, trophy, comment ) values(${dailyType},'${dailyDate}', ${dailyTime},  ${dailyTrophy}, '${dailyComment}')`
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
        },
        putDaily: function(req, res){
            let id = req.params.id;
            let dailyTime = req.body.time;
            let dailyTrophy = req.body.trophy;
            let dailyComment = req.body.comment;
            async.waterfall([
                function(next) {
                    let updateDailyText = `update home.event_daily set time=${dailyTime}, trophy=${dailyTrophy}, comment='${dailyComment}' where id=${id}`;
                    console.log(updateDailyText)
                    client.query({
                        text: updateDailyText
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
        },

        deleteDaily: function(req,res) {
            let id = req.params.id;
            async.waterfall([
                function(next) {
                    let deleteDailyText = `delete from home.event_daily where id=${id}`;
                    console.log(deleteDailyText)
                    client.query({
                        text: deleteDailyText
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
        },

        fetchStoryItem: function(req,res) {
            client.query({
                text: `select * from home.story_item`
            }, function (error, results) {
                if (error) {
                    console.log(error);
                }
                res.send({
                    data: results.rows
                });
            });
        },
        fetchStoryPiece,
        postStoryPiece: function(req, res) {
            let id = req.params.id;
            let pieces = req.body.pieces;
            let newpieces =[]
            let oldpieces =[];
            for(p of pieces) {
                if(p.id) {
                    oldpieces.push(p);
                }else {
                    newpieces.push(p);
                }
            }
            let newQueryTxt = '';
            let oldQueryTxt ='';
            if(newpieces.length) {
                newQueryTxt= 'insert into home.story_piece(item_id, content,x,y,type) values'
                    +  newpieces.map((o)=> {
                        return `(${id}, '${o.content}', ${o.x}, ${o.y}, 5)`
                    }).join(',')
            }
            if(oldpieces.length) {
                let updateTxt = oldpieces.map((o)=> {
                    return `( ${o.id},'${o.content}', ${o.x}, ${o.y}, 5)`
                }).join(',')
                oldQueryTxt = 'update home.story_piece as p set content=t.content, x=t.x, y=t.y, type=t.type from ( values'
                            + updateTxt
                            + ') t(id, content,x,y,type) where t.id=p.id and item_id=' + id;

            }
            console.log(newQueryTxt, oldQueryTxt);

            client.query({
                text: newQueryTxt
            }, function (error) {
                if(error) {
                    console.log(error);
                    return;
                }
                client.query({
                    text: oldQueryTxt
                }, function (error) {
                    if(error) {
                        console.log(error);
                        return;
                    }
                    fetchStoryPiece(req, res);
                })
            })



        },
        editStoryPiece: function(req, res) {
            let piece = req.body.piece;
            let editQueryTxt = `update home.story_piece set content = '${piece.content}', type=${piece.type} where id=${piece.id}`;
            async.waterfall([
                function(next) {
                    client.query({
                        text: editQueryTxt
                    }, function (error) {
                        if(error) {
                            console.log(error);
                            return;
                        }
                        next(null, req, res);
                    })
                },
                fetchStoryPiece
            ])
        }
    }
}