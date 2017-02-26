
<template>
    <div class='piece-card__wrapper flex__center'  draggable="true"
          v-bind:class='{
              active: active
           }'
           @dragstart='handleDragstart'
           @dragend='handleDragend'
    >
        {{card.content}}
    </div>
</template>
<script>
    export default {
        props: ['card'],
        methods: {
            handleDragstart: function(ev) {
                this.active = true;
                ev.dataTransfer.setData("card_content",  this.card.tempid);
            },
            handleDragend: function(ev) {
                this.active = false;
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
    }
</style>