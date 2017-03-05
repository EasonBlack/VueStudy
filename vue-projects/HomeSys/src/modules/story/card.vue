
<template>
    <div class='piece-card__wrapper flex__center'  draggable="true"
          v-bind:class='{
              active: active,
              big: expand
           }'
           @dragstart='handleDragstart'
           @dragend='handleDragend'
           @click='handleBig'
    >
        {{recodeContent}}
    </div>
</template>
<script>
    export default {
        props: ['card'],
        data() {
            return {
                expand: false
            }
        },
        methods: {
            handleDragstart: function(ev) {
                this.active = true;
                ev.dataTransfer.setData("card_content",  this.card.id + '_' + this.card.tempid );
            },
            handleDragend: function(ev) {
                this.active = false;
            },
            handleBig: function() {
                this.expand = !this.expand;
            }

        },
        computed: {
            recodeContent : function() {

                 let _t = this.card.content;
                 if(_t.length > 20 && !this.expand) {
                    _t = _t.substring(0, 20) + '...';
                 }
                return _t;
            }
        }
    }
</script>
<style lang='scss' scoped>
    .piece-card__wrapper {
        width:100%;
        height:100%;
        background-color:yellow;
        position:relative;
        font-size: 0.7em;
        display: flex;
        justify-content: flex-start;
        overflow: auto;
        align-items: flex-start;

        &.active {
           opacity:0.4;
           transform: scale(0.8);
        }
        &.big  {
            position:absolute;
            padding:10px;
            width: 250px;
            height:100%;
            font-size:0.9em;
            z-index:100;
        }
    }
</style>