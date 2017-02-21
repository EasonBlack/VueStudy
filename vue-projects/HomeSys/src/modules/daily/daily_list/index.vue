<template>
    <ul class='daily-item__container'>
        <li v-for='item in items'>
            <span class='li__col1'>{{item.item_name}}</span>
            <span class='li__col2'>{{item.time}}</span>
            <span class='li__col3' >{{item.trophy}}</span>
        </li>
    </ul>
</template>
<script>
    export default {
        props:['items'],
        data() {
            return {
               colors: [],
            }
        },
        methods: {
        },
    }
</script>
<style lang='scss' scoped>
    @import 'styles/settings.variable.scss';
    .daily-item__container {
        width:100%;
        padding:20px 5px;
    }
    li {
        margin-bottom:10px;
        display:flex;
        span {
            display:inline-block;
        }
        .li__col1 {
            flex:1;
        }
        .li__col2 {
             width: 20px;
             height: 20px;
             border-radius: 50%;
             background-color: #{$time_color};
             color:white;
             text-align: center;
             line-height: 20px;
             font-size:0.7em;
        }
        .li__col3 {
             width: 20px;
             height: 20px;
             border-radius: 50%;
             background-color: #{$trophy_color};
             color:white;
             text-align: center;
             line-height: 20px;
             font-size:0.7em;
        }
    }
</style>