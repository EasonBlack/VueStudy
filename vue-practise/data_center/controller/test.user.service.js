

module.exports = function (client) {

    return {
        checkAccount: function(req, res) {
            let token = req.header("Authorization");
            if(token) {
                res.send('success');
            } else {
                res.send('deny');
            }
        },

        loginAccount: function(req,res) {
            let account = req.body.account;
            let password = req.body.password;
            console.log(account, password);
            res.send('success');
        },

        uploadImages: function(req,res) {
            console.log(req.files);
            res.send('success');
        }



    }
}