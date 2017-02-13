<template>
    <div class='main__container'   @mouseup='mouseUpHandle($event)'
                                   @mousemove='mouseMoveHandle($event)'>
        <board></board>
        <card :defaultTop="'6px'"   :defaultLeft="'6px'" :color="'red'"  @mouseDownHandle='mouseDownHandle'></card>
        <card :defaultTop="'116px'" :defaultLeft="'6px'" :color="'steelblue'" @mouseDownHandle='mouseDownHandle'></card>

    </div>
</template>
<script>
    import board from './board.vue';
    import card from './card.vue';
    import bus from '../bus.js'
    export default {
        components: {card, board},
        created: function(){

        },
        data() {
            return {
                dragObject: null,
                firstTop: null,
                firstLeft: null
            }
        },
        methods: {
            mouseDownHandle: function(o) {
                this.dragObject = o.el;
                this.firstTop = o.e.offsetY;
                this.firstLeft = o.e.offsetX
            },

            mouseMoveHandle:function(e) {
                if(this.dragObject){
                     this.dragObject.style.top = e.clientY - this.firstTop + 'px';
                     this.dragObject.style.left = e.clientX - this.firstLeft + 'px';
                 }
            },
            mouseUpHandle: function(e) {
                let pos = this.checkBox(e);

                this.dragObject.style.top = pos.y;
                this.dragObject.style.left = pos.x;
                this.dragObject  = null;
            },
            checkBox: function(e) {
                let top = e.clientY;
                let left = e.clientX;

                let _t = Math.floor(top/110);
                let _l = Math.floor(left/110);
                return {
                    y: (6 + (_t)* 10 + _t*100)+'px',
                    x: (6 + (_l)* 10 + _l*100)+'px'
                }

            }
        },
        mounted: function() {

        }
    }
</script>
<style lang='scss' >
    * {
        padding:0;
        margin:0;
    }
    .main__container {
        position:relative;
        width:100vw;
        height:100vh;
    }


</style>