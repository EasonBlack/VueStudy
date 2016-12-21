<template>
    <li>
        <span class='title__section'>{{title}}</span>
        <span class='content__section'>{{content}}</span>
        <span class='icon__section'>
            <img src='../../../assets/icons/Forward.png' >
        </span>
    </li>
</template>

<script>

    export default{
        props:['title', 'content', 'icon'],
        data(){
            return{}
        }
    }
</script>

<style lang='scss' scoped>
    span {
        display:inline-block;
    }

    .title__section {
        width:20%;
    }
    .content__section {
        width:70%;
    }
    .icon__section {
        width:10%;
        height:100%;
        position:relative;
        display:flex;
        justify-content: center;
        align-items: center;
        img {
            width:40%;
            height:40%;
        }
    }


</style>
