class Board {
    constructor() {
        this.layout = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]
        this.maxRow = this.layout.length;
        this.maxCol = this.layout[0].length;
        this.current = null;
        this.cards = []
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
            if(c.y <0 && c.x<0) return;
            this.layout[c.y][c.x] = c.id;
        });
    }

    hasOccupied(x,y) {
        return this.layout[y][x];
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
        console.log('after refater' , this.layout.toString());
        return _c;
    }

}

export default new Board();
