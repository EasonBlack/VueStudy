var async = require('async');
var uuid = require('node-uuid');
var path = require('path');
var fs = require('fs');

module.exports = function (client) {
    let returnMsg = function (msg, res) {
        res.send({
            msg: msg
        });
    }
    return {
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
                function(id,next) {
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
                        next(null,'success', res);
                    })
                },
                returnMsg
            ]);

        }
    }
}