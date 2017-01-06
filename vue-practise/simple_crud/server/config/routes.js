var path = require('path');
var fs = require('fs');
const appCtrl = require('../controller');

module.exports = function (app) {
    app.get(/\/(index|site)?$/, function(req, res) {
        console.log('Cookies: ', req.cookies);
        console.log(req.signedCookies['testcookie'])
        let options = {
            maxAge: 1000 * 60 * 15,
            httpOnly: true,
            signed: true
        }
        res.cookie('testcookie', 'hello world', options)
        res.sendFile(path.join(__dirname,  '../../client/index.html'));
    });

    app.get('/test',function(req,res) {
        console.log(req.signedCookies['testcookie'])
        res.send('xxxxx xxxx');
    })

    app.get('/api/visitors', appCtrl.visitorService.VisitorAll);
    app.post('/api/visitors', appCtrl.visitorService.VisitorAdd);
    app.delete('/api/visitors/:id', appCtrl.visitorService.VisitorDelete)

    app.get('/api/sites', appCtrl.siteService.SiteAll);
    app.post('/api/sites', appCtrl.siteService.SiteAdd);
    app.delete('/api/sites/:id', appCtrl.siteService.SiteDelete)
}

