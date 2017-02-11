module.exports = function (client) {
    return {
        fetchData: function(req, res) {
            let _data = [
                {id: 1, name: 'aaa'},
                {id: 2, name: 'bbb'},
                {id: 3, name: 'ccc'},
                {id: 4, name: 'ddd'},
                {id: 5, name: 'eee'}
            ]
            setTimeout(function(){
                res.send(_data)
            },3000);
        },
    }
}