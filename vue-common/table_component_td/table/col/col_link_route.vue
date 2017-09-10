<template>
    <div class='link-route-col'>
        <a @click='clickHandle' href='javascript:void(0)'>{{value}}</a>
    </div>
</template>
<script>
    export default {
        props: ['value', 'routeName', 'paramName', 'paramVal'],
        methods: {
            clickHandle() {
                console.log(this.routeName, this.paramName, this.paramVal);
                this.$router.push({ name: this.routeName, params: { [this.paramName]: this.paramVal }});
            }
        }
    }
</script>
<style lang='scss' scoped>
</style>