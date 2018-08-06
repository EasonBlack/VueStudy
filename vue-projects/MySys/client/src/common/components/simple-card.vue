<template>
    <div class='card'>
        <slot name="header"></slot>
        <pre >{{content}}</pre>
        <slot name="footer"></slot>
    </div>
</template>
<script>
    export default {
        props: ['content'],
        data() {
            return {}
        },
        created() {  
        }
    }
</script>
<style lang='scss' scoped>
    .card {
        width :100%;
        min-height: 50px;
        padding-left: 5px;
        padding-bottom: 5px;
        padding-top: 5px;
        position: relative;
        background-color: rgba(#174A75, 0.3); 
    }
    
    pre {
        width: 100%;
        font-size:12px;
        margin-bottom: 0px; 
        color: white;
        max-height: 100px;
        display: block;
        overflow: hidden;
    }
</style>