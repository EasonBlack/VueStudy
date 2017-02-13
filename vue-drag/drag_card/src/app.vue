<template>
    <div class='main__container'   @mouseup='mouseUpHandle()'
                                   @mousemove='mouseMoveHandle($event)'>
        <card :defaultTop="'10px'" :defaultLeft="'10px'" :color="'red'" @mouseDownHandle='mouseDownHandle'></card>
        <card :defaultTop="'120px'" :defaultLeft="'10px'" :color="'steelblue'" @mouseDownHandle='mouseDownHandle'></card>

    </div>
</template>
<script>
    import card from './card.vue';
    export default {
        components: {card},
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
                     console.log(e);
                 }
            },
            mouseUpHandle: function() {
                this.dragObject  = null;
            },
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