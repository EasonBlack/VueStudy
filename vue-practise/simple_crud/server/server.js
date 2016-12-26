var express = require('express');

var app = express();

app.listen(2111, function () {
    console.log('connect success!');
});

require('./config/express')(app,express);
require('./config/routes')(app);

var env = process.argv[2] || 'development';
if(env != 'production') {
    console.log('dev webpack');
    require('./config/webpack')(app);
}