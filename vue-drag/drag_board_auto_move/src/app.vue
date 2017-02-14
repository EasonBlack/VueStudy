<template>
    <div class='main__container' onselectstart="return false"  @mousemove='mouseMoveHandle($event)'>
        <board></board>
        <card v-for='c in cards' :c='c'  @mouseDownHandle='mouseDownHandle'
              :redrawId='redrawId' @clearRedraw='clearRedraw'
        ></card>


    </div>
</template>
<script>
    import board from './board.vue';
    import card from './card.vue';
    import bus from '../bus.js'
    import CardModel from '../model/card.js';
    import theBoard from '../model/board.js';

    export default {
        components: {card, board},
        created: function(){
             bus.$on('boxMouseUpHandle', this.boxMouseUpHandle);
             bus.$on('cardRedraw', this.cardRedraw);
             this.cards = [
                 new CardModel({id: 'c1',color: 'red', x:0, y:0}),
                 new CardModel({id: 'c2',color: 'steelblue', x:1, y:2})
             ]
             this.bb = theBoard;
             theBoard.cards = this.cards;
             theBoard.refactor();
        },
        data() {
            return {
                dragObject: null,
                dragCard: null,
                firstTop: null,
                firstLeft: null,
                redrawId : null,
                bb:null
            }
        },
        methods: {
            mouseDownHandle: function(o) {
                this.dragObject = o.el;
                this.dragCard = o.c;
                theBoard.current = o.c.x + '_' + o.c.y;

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

                 this.dragCard.x = o.position.x;
                 this.dragCard.y = o.position.y;

                 this.dragObject  = null;
                 this.dragCard = null;
                 theBoard.current = null;

                 theBoard.refactor();
                 console.log(theBoard.layout);
            },
            cardRedraw: function(o) {
                this.redrawId = o.c.id;
            },
            clearRedraw: function() {
                this.redrawId = null;
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