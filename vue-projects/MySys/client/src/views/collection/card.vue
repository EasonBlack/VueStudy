<template>
    <div class='card'>
        <ul>
            <li class='li-card mr-10' v-for='key in keysArray' :key='key'>
                {{key}}
            </li>
        </ul>
        <pre>{{item.CONTENT}}</pre>
    </div>
</template>
<script>
    export default {
        props: ['item'],
        computed: {
            "keysArray" :  function() { 
                return this.item.KEYS_NAME.split(",")
            }
        }
    }
</script>
<style lang='scss' scoped>
    .card {
        width :100%;
        padding-left: 5px;
        padding-bottom: 5px;
        padding-top:5px;
    }
    ul {
        display: flex;
        justify-content: flex-start;
        padding-left: 0px;
        margin-bottom:5px;
    }
    pre {
        width: 100%;
        font-size:12px;
        margin-bottom: 0px;
        overflow:hidden;
        
    }
</style>