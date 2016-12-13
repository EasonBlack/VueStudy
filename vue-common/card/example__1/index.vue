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
        <div class='card__action'>
             <img src='../../../assets/icons/Forward.png' />
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
        flex-direction:row;
        background-color: white;
        border-radius: 1em;
        overflow:hidden;
    }

    .card__image {
        width:100px;
        img {
            display:block;
            width:100%;
            height:100%;
        }
    }

    .card__content {
        flex:1;
        display:flex;
        flex-direction:column;
        padding-left:1em;
        padding-top:0.5em;
        position:relative;
        .card__content_lvl1 {
            font-size:1.1em;
            margin-bottom:0.3em;
        }
        .card__content_lvl2 {
            font-size:0.7em;
            margin-bottom:0.3em;
        }
        .card__content_lvl3{
            color: #f7f7f7;
            position:absolute;
            bottom:0.5em;
        }
    }

    .card__action {
        width:2em;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width:1em;
        }
    }

</style>
