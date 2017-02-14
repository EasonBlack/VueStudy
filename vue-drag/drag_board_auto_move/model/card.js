class Card {
    constructor(opts) {
        this.defaultTop= opts.defaultTop;
        this.defaultLeft = opts.defaultLeft;
        this.color = opts.color;
        this.x = opts.x;
        this.y = opts.y;
        this.id = opts.id;
    }

}

export default Card;