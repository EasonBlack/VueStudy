var path = require('path');
var fs = require('fs');
const appCtrl = require('../controller');

module.exports = function (app) {
    app.get(/\/(index|site)?$/, function(req, res) {
        res.sendFile(path.join(__dirname,  '../../client/index.html'));
    });
    app.get('/api/visitors', appCtrl.visitorService.VisitorAll);
    app.post('/api/visitors', appCtrl.visitorService.VisitorAdd);
    app.delete('/api/visitors/:id', appCtrl.visitorService.VisitorDelete)

    app.get('/api/sites', appCtrl.siteService.SiteAll);
    app.post('/api/sites', appCtrl.siteService.SiteAdd);
}

