var express = require('express');

var app = express();

app.listen(3000, function () {
    console.log('connect 3000 success!');
});

require('./config/express')(app,express);
require('./config/routes')(app);
