var path = require('path');
var fs = require('fs');


module.exports = function (app) {
    app.get(/\/(index|edit)?$/, function(req, res) {
        res.sendFile(path.join(__dirname,  '../../client/index.html'));
    });
}

