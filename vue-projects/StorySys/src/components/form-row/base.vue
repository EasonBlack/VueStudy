<template>
    <div class='form-row__container'>
        <div class='row-title'>
            <label>
                {{title}}
            </label>
        </div>   
        <div class='row-input'>
            <template v-if='type=="e"'>
                <input :value="value" @input="$emit('input', $event.target.value)" />
            </template>
            <template v-if='type=="d"'>
                <span>{{value}}</span>
            </template>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['title', 'value']
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