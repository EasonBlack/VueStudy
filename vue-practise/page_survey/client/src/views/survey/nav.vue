<template>
    <div class='nav__container'>
        <a class='nav__button left__button'>
            <img src='../../assets/left.png' />
        </a>
        <ul class='num__container'>
            <li v-for='i in count'>
                <a>{{i}}</a>
                <div class='line__container' v-if='i!=count'>
                    <div class='line'></div>
                </div>
            </li>
        </ul>
        <a class='nav__button right__button'>
            <img src='../../assets/right.png' />
        </a>
    </div>
</template>

<script>

    export default{
        props: ['count','current'],
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>

<style lang='scss' scoped>
    .nav__container {
        width:100%;
        display:flex;

    }
    .nav__button {
        display:block;
        width:100px;
        text-align: center;
        img {
            width:1.5em;
        }
    }
    .num__container {
        flex:1;
        display:flex;
        li {
            flex:1;
            display: flex;
            justify-content: center;
            align-items: center;
            .line__container {
                position:relative;
                flex:1;
                display:flex;
                align-items: center;
                height:100%;
                padding-left: 10%;
            }
            .line {
                width:60%;
                height:1px;
                border-top: 1px dotted #41A160;
            }
            a {
                display:flex;
                color:white;
                background-color: #41A160;
                width:40px;
                height:40px;
                border-radius: 50%;
                justify-content: center;
                align-items: center;
            }
        }

    }
</style>
