console.log('aaaaa');

let fs = require('fs');
let  _req = require('./array-parent-child.json');

let handle = function(id, source) {
    let temp = [];
    for(let i=0;i<source.length;i++){
        let r = source[i];
        if(r.parent==id) {
            r.children = handle(r.id, source);
            temp.push(r);
        }
    }
    return temp;
}

let res = handle(0, _req);
//console.log(JSON.stringify(res));

fs.writeFile("./result.json", JSON.stringify(res), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 