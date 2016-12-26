var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors')

module.exports = function (app, express) {
    app.use(bodyParser.json({limit: '50mb'}));
    app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
    app.use(cors());
    app.use(express.static(path.join(__dirname, '../../client')));
    app.use('/dist', express.static('dist'));
}