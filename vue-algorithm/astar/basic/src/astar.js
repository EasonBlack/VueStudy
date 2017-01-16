let astar = {
    search: function (grid, start, end) {

        var openList   = [];
        var closedList = [];
        openList.push(start);

        while(openList.length > 0) {
            var lowInd = 0;
            for(var i=0; i<openList.length; i++) {
                if(openList[i].f < openList[lowInd].f) { lowInd = i; }
            }
            var currentNode = openList[lowInd];

            if(currentNode.x == end.x && currentNode.y == end.y) {
                var curr = currentNode;
                var ret = [];
                while(curr.parent) {
                    ret.push(curr);
                    curr = curr.parent;
                }
                return ret.reverse();
            }

            openList.splice(lowInd, 1);
            closedList.push(currentNode);

            let neighbors = grid.neighbors(currentNode);

            for(let i=0; i<neighbors.length;i++) {
                let neighbor = neighbors[i];
                if(closedList.find(o=>{return o.x==neighbor.x && o.y==neighbor.y}) || neighbor.value ==0) {
                    continue;
                }
                var gScore = currentNode.g + 1;
                var gScoreIsBest = false;

                if(!openList.find(o=>{return o.x==neighbor.x && o.y==neighbor.y})) {
                    gScoreIsBest = true;
                    neighbor.h = astar.heuristic({x: neighbor.x, y:neighbor.y}, {x:end.x, y:end.y});
                    openList.push(neighbor);
                }
                else if(gScore < neighbor.g) {
                    gScoreIsBest = true;
                }

                if(gScoreIsBest) {
                    neighbor.parent = currentNode;
                    neighbor.g = gScore;
                    neighbor.f = neighbor.g + neighbor.h;
                    neighbor.debug = "F: " + neighbor.f + "<br />G: " + neighbor.g + "<br />H: " + neighbor.h;
                }
            }
        }

        return [];
    },
    heuristic: function(pos0, pos1) {
        var d1 = Math.abs (pos1.x - pos0.x);
        var d2 = Math.abs (pos1.y - pos0.y);
        return d1 + d2;
    }
}

export default astar;