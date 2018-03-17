<template>
    <div class='form-group d-flex w-100'>
        <label>{{title}}</label>
        <input class='form-control' />
    </div>
</template>
<script>
    export default {
        props: ["title"]
    }
</script>
<style lang='scss' scoped>

    label {
        width:120px;
        min-width:120px;
        line-height: 15px;
        display: flex;
        align-items: center;
    }
   
</style>