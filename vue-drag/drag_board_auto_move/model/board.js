class Board {
    constructor(opts) {
        this.layout = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]
        this.maxRow = this.layout.length;
        this.maxCol = this.layout[0].length;
        this.cellWidth = '100';
        this.cellHeight = '100';
        this.cards = opts.cards;
    }

    getPosition(x, y) {
        let _t = (6 + y * 10 + y * 100) + 'px';
        let _l = (6 + x * 10 + x * 100) + 'px';
        return {
            top: _t,
            left: _l
        }
    }

    refactor() {
        this.layout= [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]
        this.cards.forEach((c)=> {
            this.layout[c.x][c.y] = 1;
        });
    }

    hasOccupied(x,y) {
        return this.layout[x][y];
    }
    moveOccupied(x,y) {
        let _c = this.cards.find(o=>{
            return o.x == x && o.y ==y;
        })
        if(!_c) return {id: null};

        if((y+1)<this.maxRow) {
            _c.y +=1;
        }
        else if((y-1)>0) {
            _c.y -=1;
        }
        this.refactor();
        return _c;
    }

    redraw(x,y) {

    }

}

export default Board;
