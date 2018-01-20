export default class Column {
    constructor(id, title, options) {
        this.id = id;
        this.title = title;
        this.options = {};
        this.options.columnclass = options.columnclass;  //column内容的align [center, left]
        this.options.coltype= options.coltype; //定义column的类型，比如enable_circle
       
    }
}