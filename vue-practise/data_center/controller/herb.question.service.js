var async = require('async');
var uuid = require('node-uuid');
var path = require('path');
var fs = require('fs');

module.exports = function (client) {

    let questionAll = function (req, res) {
        let _display = req.params.display;
        let queryDisplay = '';
        switch(_display) {
            case '1':
                queryDisplay= '(true)';
                break;
            case '0':
                queryDisplay= '(false)';
                break;
            default :
                queryDisplay= '(true,false)';
                break;
        }
        client.query({
            text: `select * from herb.question where display in ` + queryDisplay + ` order by id`
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
            let questionTitle = req.body.title;
            let questionDisplay = req.body.display
            async.waterfall([
                function(next) {
                    let addQuestionText = `insert into herb.question(title,display) values('${questionTitle}', '${questionDisplay}')`
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
        },
        questionUpdate:function(req,res) {
            let qTitle = req.body.title;
            let qId = req.params.id;
            let qDisplay= req.body.display;
            console.log(qTitle,qId,qDisplay);
            async.waterfall([
                function(next) {
                    let updateQuestionText = `update herb.question set title='${qTitle}', display='${qDisplay}' where id = ${qId}`
                    console.log(updateQuestionText);
                    client.query({
                        text: updateQuestionText
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