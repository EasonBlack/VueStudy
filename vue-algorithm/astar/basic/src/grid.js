class Grid {
    constructor(grid) {
        this.data =this.initGrid(grid);
    }
    initGrid(grid) {
        let _g = [];
        for(let i in grid) {
            let _grid = grid[i].map((g,j)=> {
                return {
                    x: j,
                    y: parseInt(i),
                    g:0,
                    h:0,
                    f:0,
                    debug: '',
                    parent: {},
                    value: g
                }
            })
            _g.push(_grid);
        }
        return _g;
    }
    neighbors(node) {
        var ret = [];
        var x = node.x;
        var y = node.y;

        if(this.data[y-1] && this.data[y-1][x]) {
            ret.push(this.data[y-1][x]);
        }
        if(this.data[y+1] && this.data[y+1][x]) {
            ret.push(this.data[y+1][x]);
        }
        if(this.data[y][x-1] && this.data[y][x-1]) {
            ret.push(this.data[y][x-1]);
        }
        if(this.data[y][x+1] && this.data[y][x+1]) {
            ret.push(this.data[y][x+1]);
        }
        return ret;
    }
}

export default Grid;
