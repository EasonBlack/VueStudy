var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var compression = require('compression');

var path = require('path');
var cors = require('cors')

module.exports = function (app, express) {
    app.use(compression({
        filter: function () { return true; }
    }));
    app.use(bodyParser.json({limit: '50mb'}));
    app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
    app.use(cookieParser('eason'));
    app.use(cors());
    app.use('/site_images', express.static(path.join(__dirname, '../site_images')));
}