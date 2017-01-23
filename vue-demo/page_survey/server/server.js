var express = require('express');

var app = express();

app.listen(3111, function () {
    console.log('connect success!');
});

require('./config/express')(app,express);
require('./config/routes')(app);
