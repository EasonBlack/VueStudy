var path = require('path');
var fs = require('fs');
const appCtrl = require('../controller');

module.exports = function (app) {
    app.get('/api/herb/question', appCtrl.herbQuestionService.questionAll);
    app.post('/api/herb/question', appCtrl.herbQuestionService.questionAdd);
    app.put('/api/herb/question/:id', appCtrl.herbQuestionService.questionUpdate);

    app.get('/api/herb/question_answer/:id', appCtrl.herbQuestionService.answerGetById);

    app.get('/api/herb/feedback/:startdate/:enddate', appCtrl.herbFeedbackService.feedbackAll);
    app.get('/api/herb/feedback/:id', appCtrl.herbFeedbackService.feedbackDetailById);
    app.post('/api/herb/feedback', appCtrl.herbFeedbackService.feedbackAdd);

    app.get('/api/test/checkAccount',appCtrl.testUserSerivce.checkAccount);
    app.post('/api/test/loginAccount',appCtrl.testUserSerivce.loginAccount);
    app.get('/api/test/fetchData',appCtrl.testDataSerivce.fetchData);

    app.get('/api/home/fetchEventType',appCtrl.homeEventsSerivce.fetchEventType);
    app.get('/api/home/fetchEventItemsActive',appCtrl.homeEventsSerivce.fetchEventItemsActive);
    app.post('/api/home/postEventItem',appCtrl.homeEventsSerivce.postEventItem);
    app.put('/api/home/closeEventItem/:id',appCtrl.homeEventsSerivce.closeEventItem);

    app.get('/api/home/fetchDaily/:date', appCtrl.homeEventsSerivce.fetchDaily);
    app.post('/api/home/postDaily/:date',appCtrl.homeEventsSerivce.postDaily);


}

