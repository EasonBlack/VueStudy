<template>
    <div class='main__container'>
        <div class='row' v-for='(r,index) in grid'>
            <cell v-for='(i,j) in r' :key='i' :index='index+"_"+j'
             @dropDown='dropDown'
             @dragOver='dragOver'>
                 <box v-for='b in boxes' v-if='b.x==j && b.y ==index' :w='b.w' :h='b.h' :id='b.id' :random='b.random'>
                 </box>
             </cell>
        </div>

    </div>
</template>

<script>
    import Vue from 'vue';
    import cell from './cell.vue';
    import box from './box.vue';

    import vDrag from './v-drag/index'
    Vue.use(vDrag);



    const checkBoxes = (target, current,  boxes, grid)=>{
        let _x = parseInt(target.split('_')[1]);
        let _y = parseInt(target.split('_')[0]);
        let currentBox = boxes.find(b=> b.id==current);

        let occupyBox;

        let num = currentBox.w;
        while(num-1) {
            occupyBox = boxes.find(b=>parseInt(b.x)==_x + num -1  && parseInt(b.y)==_y && b.id != current);
            num--
        }
        console.log(occupyBox);
        if(occupyBox) {
            occupyBox.startx = occupyBox.x;
            occupyBox.starty = occupyBox.y;
            console.log(occupyBox.y, occupyBox.x, currentBox.y, currentBox.x)

            if( parseInt(occupyBox.y )>=parseInt(currentBox.starty || currentBox.y )
                && parseInt(occupyBox.y) < grid.length -1 ){
                console.log('down');
                occupyBox.y = parseInt(occupyBox.y) + 1;

            } else if( parseInt(occupyBox.y)<=parseInt(currentBox.starty || currentBox.y)
                && parseInt(occupyBox.y) > 0){
                console.log('up');
                occupyBox.y = parseInt(occupyBox.y) - 1;
            } else if( parseInt(occupyBox.x) >= parseInt(currentBox.x)
                && parseInt(occupyBox.x) < grid[0].length - 1)  {
                console.log('right');
                occupyBox.x = parseInt(occupyBox.x) + 1;
            } else if(parseInt(occupyBox.x) < parseInt(currentBox.x)
                && parseInt(occupyBox.x) > 0) {
                console.log('left');
                occupyBox.x = parseInt(occupyBox.x) - 1;
            }
            checkBoxes(`${occupyBox.y}_${occupyBox.x}`, occupyBox.id, boxes, grid );
        }
    }


    export default{
        components: {cell, box},
        data(){
            return{
                grid: [
                    [1,1,1,1,1],
                    [1,1,1,1,1],
                    [1,1,1,1,1],
                    [1,1,1,1,1],
                    [1,1,1,1,1],
                ],
                boxes: [
                    {x:2, y:0, w:1, h:1, id: 'b1', random:0},
                    {x:1, y:1, w:2, h:1, id: 'b2', random:0},
                    {x:4, y:4, w:1, h:1, id: 'b3', random:0}
                ]
            }
        },
        methods: {
           dropDown(o) {

                let target = o.target;
                let _box =  this.boxes.find(b=>b.id==o.boxid);
                let _x = target.split('_')[1];
                let _y = target.split('_')[0];
                if(_box.x == _x && _box.y==_y){

                    _box.random =  _box.random + 1;
                } else {
                    console.log(234);
                    _box.x = _x;
                    _box.y = _y;
                }



           },
           dragOver(o) {
                let target = o.target;
                // this.currentDrag is set in v-drag
                checkBoxes(target, this.currentDrag, this.boxes, this.grid);

           }
        }

    }
</script>

<style lang='scss' scoped>
    .main__container {
        overflow-x:hidden;
        overflow-y:scroll;
        position:relative;
    }
    .row {
        width:100%;
        position:relative;
        display:flex;
        flex-wrap:wrap;
    }
</style>
