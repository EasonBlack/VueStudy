var moment = require('moment');

var path = require('path');
const pg = require('pg');

const pgConfig = {
    user: 'aden_survey', //env var: PGUSER
    database: 'postgres', //env var: PGDATABASE
    password: 'admin', //env var: PGPASSWORD
    host: 'localhost', // Server hosting the postgres database
    port: 5432, //env var: PGPORT
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

const client = new pg.Pool(pgConfig);
client.connect();

module.exports = function (app) {

    app.get('/api/survey', function(req, res){
        client.query({
            text: 'select * from survey;'
        }, function (error, results) {
            if (error) {
                console.log(error);
            }
            res.send(results.rows);
        });
    })

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname,  '../../client/index.html'));
    })



    app.post('/api/survey', function (req, res) {
        if (req.body.answers.length) {
            arrayParam = `ARRAY[${req.body.answers.map(o=> "\'" + o + "\'").join(',')}]`;
        } else {
            arrayParam = `ARRAY[]::text[]`;
        }
        var queryText = 'insert into survey(answers, email) values(' + arrayParam + ', \'' + req.body.email + '\')';
        client.query({
            text: queryText
        }, function (error, results) {
            if (error) {
                console.log(error);
            }
            res.send({
               msg: 'success'
            });
        });
    });
}

