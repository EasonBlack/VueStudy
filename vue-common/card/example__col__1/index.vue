<template>
    <div class='card__wrapper'>
        <div class='card__image'>
            <img :src="item.src"/>
        </div>
        <div class='card__content'>
            <div class='card__content_lvl1'>{{item.lvl1}}</div>
            <div class='card__content_lvl2'>{{item.lvl2}}</div>
            <div class='card__content_lvl3'>{{item.lvl3}}</div>
        </div>
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
        border-radius: 1em;
        overflow:hidden;
    }

     .card__image {
        width:100%;
        height:200px;
        img {
            display:block;
            width:100%;
            height:100%;
        }
    }

    .card__content {
        flex:1;
        position:relative;
        padding: 0.5em 1em;
         .card__content_lvl1 {
            font-size:1.1em;
            margin-bottom:0.3em;
        }
        .card__content_lvl2 {
            font-size:0.7em;
            margin-bottom:0.3em;
        }
        .card__content_lvl3 {
            position:absolute;
            right:1em;
            bottom: 1em;
            color: #f7f7f7;
            font-size:0.7em;
        }
    }

</style>
