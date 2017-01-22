<template>
    <div class='card__wrapper' :style='{backgroundColor: item.bgc}'>
        <div class='card__title'>{{item.lvl1}}</div>
        <div class='card__content'>{{item.lvllong2}}</div>
    </div>
</template>

<script>

    export default{
        props:['item'],
        data(){
            return{

            }
        }

    }
</script>

<style lang='scss' scoped>
    .card__wrapper {
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
        background-color: white;
        overflow:hidden;
        box-shadow: 0 3px 4px 2px rgba(black,0.2);
    }

    .card__title {
        height:40px;
        line-height:40px;
        padding:0px 10px;
        font-size:1.1em;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow:hidden;
    }
    .card__content {
        padding:5px 10px;
        font-size:0.8em;
        overflow: auto;
    }


</style>
