<template>
    <div class='card__wrapper'
         :style='{backgroundColor: item.bgc}' draggable="true"
         v-bind:class='{
            active: active
         }'
         @dragstart='handleDragstart'
         @dragend='handleDragend'
    >
        <div class='card__title'>{{item.title}}</div>
        <div class='card__content'>{{item.content}}</div>
    </div>
</template>

<script>

    export default{
        props:['item'],
        data(){
            return{
                active: false
            }
        },
        methods: {
            handleDragstart: function(ev) {
                this.active = true;
                ev.dataTransfer.setData("card_id",  this.item.id);
                ev.dataTransfer.setDragImage(this, 0, 0);
            },
            handleDragend: function(ev) {
                this.active = false;
            }
        }

    }

</script>

<style lang='scss' scoped>
    .card__wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: white;
        overflow: hidden;
        box-shadow: 0 3px 4px 2px rgba(black, 0.2);
        transition:transform 0.2s ease-in-out;
        &.active {
            opacity:0.4;
            transform: scale(0.8)
        }
    }

    .card__title {
        height: 40px;
        line-height: 40px;
        padding: 0px 10px;
        font-size: 1.1em;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .card__content {
        padding: 5px 10px;
        font-size: 0.8em;
        overflow: auto;
    }


</style>
