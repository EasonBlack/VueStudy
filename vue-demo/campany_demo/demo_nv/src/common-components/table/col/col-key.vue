<template>
    <div class='col-key'>
        <a @click='clickHandle' href='javascript:void(0)'>{{value}}</a>
    </div>
</template>
<script>
    export default {
        props: ['value'],
        methods: {
            clickHandle() {
                this.$emit("colKeyClickHandle")
            }
        }
    }
</script>
<style lang='scss' scoped>
    
    .col-key {
        a {
            text-transform:none;
            text-decoration:none;
        }
    }
</style>