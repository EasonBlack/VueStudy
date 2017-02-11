
const pg = require('pg');
const pgConfig = {
    user: 'eason', //env var: PGUSER
    database: 'home', //env var: PGDATABASE
    password: 'admin', //env var: PGPASSWORD
    host: 'localhost', // Server hosting the postgres database
    port: 5432, //env var: PGPORT
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

const client = new pg.Pool(pgConfig);
client.connect();
const herbQuestionService = require('./herb.question.service')(client);
const herbFeedbackService = require('./herb.feedback.service')(client);
const testUserSerivce = require('./test.user.service')(client);
const testDataSerivce = require('./test.data.service')(client);

module.exports = {
    herbQuestionService,
    herbFeedbackService,
    testUserSerivce,
    testDataSerivce
}