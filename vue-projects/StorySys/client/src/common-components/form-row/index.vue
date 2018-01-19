<template>
    <div class='form-row__container'>
        <div class='row-title'>
            <label>
                <strong>{{title}}</strong>
            </label>
        </div>   
        <div class='row-input'>
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['title']
    }
</script>
<style lang='scss' scoped>
    .form-row__container {
        width:100%;
        display: flex;
        align-items: center;
    }
    .row-input {
        flex:1 ;
    }
    .row-title {
        width:40%;
        padding-left:10px;
    }
</style>