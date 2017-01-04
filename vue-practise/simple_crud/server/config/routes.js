var path = require('path');
var fs = require('fs');
const appCtrl = require('../controller');

module.exports = function (app) {
    app.get(/\/(index|edit)?$/, function(req, res) {
        res.sendFile(path.join(__dirname,  '../../client/index.html'));
    });
    app.get('/visitors', appCtrl.visitorService.VisitorAll);
}

