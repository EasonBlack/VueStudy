console.log('aaaaa');

let fs = require('fs');
let  _req = require('./array-parent-child.json');

let middle = {}
for(let i=0;i<_req.length;i++) {
    let r = _req[i]
    if(!middle[r.parent]) {
        middle[r.parent] = [];
    }
    middle[r.parent].push(r);
}

let handle = function(items, source) {
    for(let i=0;i<items.length;i++) {
        if(source[items[i].id]) {
            items[i].children = source[items[i].id];
            delete source[items[i].id];
            handle(items[i].children, source);
        }
    }
}

handle(middle["0"], middle);

fs.writeFile("./result.json", JSON.stringify(middle["0"]), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 




