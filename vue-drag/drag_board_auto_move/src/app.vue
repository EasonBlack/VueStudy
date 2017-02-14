<template>
    <div class='main__container' onselectstart="return false"  @mousemove='mouseMoveHandle($event)'>
        <board :b='theBoard' :current='dragCard?dragCard.id:0'></board>
        <card v-for='c in cards' :c='c'  @mouseDownHandle='mouseDownHandle'
              :current='dragCard?dragCard.id:0'
              :board='theBoard'
              :redrawId='redrawId'
        ></card>


    </div>
</template>
<script>
    import board from './board.vue';
    import card from './card.vue';
    import bus from '../bus.js'
    import CardModel from '../model/card.js';
    import BoardModel from '../model/board.js';
    import $ from 'jquery';
    export default {
        components: {card, board},
        created: function(){
             bus.$on('boxMouseUpHandle', this.boxMouseUpHandle);
             bus.$on('cardRedraw', this.cardRedraw);
             this.cards = [
                 new CardModel({id: 'c1',color: 'red', x:0, y:0}),
                 new CardModel({id: 'c2',color: 'steelblue', x:1, y:2})
             ]

             this.theBoard = new BoardModel({cards: this.cards});
             this.theBoard.refactor();
        },
        data() {
            return {
                dragObject: null,
                dragCard: null,
                firstTop: null,
                firstLeft: null,
                redrawId : null
            }
        },
        methods: {
            mouseDownHandle: function(o) {
                this.dragObject = o.el;
                this.dragCard = o.c;

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

                this.theBoard.refactor();

            },
            cardRedraw: function(o) {
                console.log(o.c.id);
                this.redrawId = o.c.id;
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