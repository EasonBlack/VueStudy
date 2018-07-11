<template>
    <div>
        <pre>{{item.CONTENT}}</pre>
    </div>
</template>
<script>
    export default {
       
        props: ['item'],
        data() {
            return {}
        },
    };
</script>
<style lang='scss' scoped>
    pre {
        border-bottom: 1px solid #ccc;
        color: white;
    }
</style>