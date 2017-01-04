module.exports = function (client) {
    return {
        VisitorAll: function (req, res) {
            client.query({
                text: 'select * from visitor'
            }, function (error, results) {
                if (error) {
                    console.log(error);
                }
                res.send({
                    data: results.rows
                });
            });
        }
    }
}