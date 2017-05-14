<template>
    <div class='main__container'
    >
        <div class='row' v-for='(r,index) in grid'>
            <cell v-for='(i,j) in r' :key='i' :index='index+"_"+j'
             @dropDown='dropDown'>
                 <box v-for='b in boxes' v-if='b.x==j && b.y ==index' :w='b.w' :h='b.h' :id='b.id'>
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

    export default{
        components: {cell, box},
        data(){
            return{
                grid: [
                    [1,1,1,1,1],
                    [1,1,1,1,1],
                    [1,1,1,1,1],
                ],
                boxes: [
                    {x:1, y:0, w:1, h:1, id: 'b1'},
                    {x:1, y:1, w:1, h:1, id: 'b2'}
                ]
            }
        },
        methods: {
           dropDown(o) {
                let target = o.target;
                let _box =  this.boxes.find(b=>b.id==o.boxid);
                let _x = target.split('_')[1];
                let _y = target.split('_')[0];

                let alreadyOccupy = this.boxes.find(b=>b.x==_x && b.y==_y);
                if(alreadyOccupy) {
                    alreadyOccupy.y = parseInt(_y) + 1;
                }
                _box.x = _x;
                _box.y = _y;

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
