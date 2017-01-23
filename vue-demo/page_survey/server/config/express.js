var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');


var path = require('path');

module.exports = function (app, express) {
    app.use(bodyParser.json({limit: '50mb'}));
    app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
    app.use(cookieParser('survey'));
    app.use(express.static(path.join(__dirname, '../../client')));
    app.use('/dist', express.static('dist'));
}