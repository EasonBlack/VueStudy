<template>
    <div class='main__container' onselectstart="return false" @mouseup='mouseUpHandle' @mousemove='mouseMoveHandle($event)'>
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
             bus.$on('boxMouseUpHandle', this.boxMouseUpHandle)
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
                this.firstLeft = o.e.offsetX;
                this.dragObject.style['pointer-events'] = 'none';
            },

            mouseMoveHandle:function(e) {
                if(this.dragObject){
                     this.dragObject.style.top = e.clientY - this.firstTop + 'px';
                     this.dragObject.style.left = e.clientX - this.firstLeft + 'px';
                 }
            },

            boxMouseUpHandle : function(o) {
                 this.dragObject.style.top = o.top + 'px';
                 this.dragObject.style.left = o.left + 'px';
                 this.dragObject.style['pointer-events'] = 'auto';
            },
            mouseUpHandle: function() {
                 this.dragObject  = null;
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