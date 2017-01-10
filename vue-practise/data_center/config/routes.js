var path = require('path');
var fs = require('fs');
const appCtrl = require('../controller');

module.exports = function (app) {

    app.get('/api/herb/question_type', appCtrl.herbQuestionService.questionType);

    app.get('/api/herb/question', appCtrl.herbQuestionService.questionAll);
    app.post('/api/herb/question', appCtrl.herbQuestionService.questionAdd);
}
