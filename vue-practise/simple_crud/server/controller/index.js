
const pg = require('pg');
const pgConfig = {
    user: 'eason', //env var: PGUSER
    database: 'database', //env var: PGDATABASE
    password: 'admin', //env var: PGPASSWORD
    host: 'localhost', // Server hosting the postgres database
    port: 5432, //env var: PGPORT
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

const client = new pg.Pool(pgConfig);
client.connect();
const visitorService = require('./visitor.service')(client);
const siteService = require('./site.service')(client);


module.exports = {
    visitorService,
    siteService
}