var async = require('async');
var uuid = require('node-uuid');
var path = require('path');
var fs = require('fs');
var moment = require('moment');

module.exports = function (client) {
    let returnMsg = function (res) {
        console.log('save feedback successful !');
        res.send({
            msg: 'success'
        });
    }

    let SaveBodyImage = (id, req, res, next) => {
        if(req.body.image) {
            var _img = req.body.image.replace(/^data:image\/png;base64,/, "");
            var dataBuffer = new Buffer(_img, 'base64');
            fs.writeFile(path.join(__dirname, '../site_images' , id+'_body.png'), dataBuffer, function (err) {
                if (err) {
                    console.log(err);
                    return ;
                }
                next(null, res)
            });
        }
    }

    return {
        feedbackDetailById : function(req,res) {
            let _id = req.params.id;
            let _queryText = `
            select f.*,a.*,q.title from herb.feedback f 
            left join herb.answer a on f.id=a.feed_id
            inner join herb.question q on a.question_id = q.id
            where f.id = ${_id}
            `
            client.query({
                text: _queryText
            }, function (error, result) {
                if(error) {
                    console.log(error);
                    return;
                }
                res.send(result.rows);
            })
        },
        feedbackAll: function(req,res) {
            let startdate = req.params.startdate !=0 ?  req.params.startdate : moment().startOf('month').format('YYYY-MM-DD');
            let enddate = req.params.enddate !=0 ? req.params.enddate : moment().add(1,'month').startOf('month').format('YYYY-MM-DD');
            console.log(startdate, enddate);
            client.query({
                text: 'select * from herb.feedback where date >= $1 and date < $2',
                values: [startdate, enddate]
            }, function (error, result) {
                if(error) {
                    console.log(error);
                    return;
                }
                res.send(result.rows);
            })
        },
        feedbackAdd: function(req, res) {
            let { name,time, date} = req.body.feedback;
            let nextdate = req.body.feedback.next;
            let answers = req.body.answers;
            console.log(name, time, date, nextdate, answers);
            async.waterfall([
                function(next) {
                    client.query({
                        text: 'insert into herb.feedback(name, time, date, next) values($1,$2,$3,$4) RETURNING id',
                        values: [name,time, date, nextdate]
                    }, function (error, result) {
                        if(error) {
                            console.log(error);
                            return;
                        }
                        var _id = result.rows[0].id;
                        next(null, _id);
                    })
                },
                function(id, next) {
                    console.log(id);
                    let answerText = 'insert into herb.answer(feed_id, question_id, answers) values ';
                    for(let o in answers) {
                        let _val = `(${id}, ${o}, ARRAY[${answers[o].map(m=>{ return "'"+ m +"'"}).join(',')}]::text[]),`;
                        answerText += _val;
                    }
                    answerText = answerText.substring(0, answerText.length-1);
                    console.log(answerText);
                    client.query({
                        text:  answerText
                    }, function (error, result) {
                        if(error) {
                            console.log(error);
                            return;
                        }
                        next(null, id, req, res);
                    })
                },
                SaveBodyImage,
                returnMsg
            ]);

        }
    }
}