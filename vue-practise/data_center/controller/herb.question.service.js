var async = require('async');
var uuid = require('node-uuid');
var path = require('path');
var fs = require('fs');

module.exports = function (client) {
    let questionJoinAnswerQuery = `
        select q.*, t.answer_title
        from herb.question q
        , lateral (
        	select array(select a.title 
        	from unnest(q.answer) unan
        	left join herb.answer a on unan=a.id 
        )) t(answer_title)
        order by q.id
    `;

    let questionAll = function (req, res) {
        client.query({
            text: questionJoinAnswerQuery
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
        questionAll,
        questionAdd: function(req, res) {
            let answers = req.body.answers;
            let questiontitle = req.body.title;
            let questiontype = req.body.type;
            let addAnswerTextRoot = 'insert into herb.answer(title) values ';
            let addAnswerText = '';
            if(answers.length) {
                addAnswerText = answers.reduce((a,b)=> {return a + ` ('${b.title}'),`} , addAnswerTextRoot);
                addAnswerText = addAnswerText.substring(0, addAnswerText.length-1);
                addAnswerText = addAnswerText +  ' RETURNING id';
            }
            async.waterfall([
                function (next) {
                    if(!addAnswerText) {
                        next(null, []);
                    } else {
                        client.query({
                            text: addAnswerText
                        }, function (error, result) {
                            let ids = result ? result.rows.map((o)=> {return o.id}) : [];
                            if(error) {
                                console.log(error);
                                return;
                            }
                            next(null, ids)
                        })
                    }


                },
                function(newids,next) {
                    let addQuestionText = `insert into herb.question(title,type, answer) values('${questiontitle}', '${questiontype}', ARRAY[`+  newids.join(',') +`]::integer[])`
                    client.query({
                        text: addQuestionText
                    }, function (error) {
                        if(error) {
                            console.log(error);
                            return;
                        }
                        next(null, req, res);
                    })
                },
                questionAll
            ]);
        }
    }
}