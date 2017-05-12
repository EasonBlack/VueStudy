<template>
    <div class='container'>
        <div class='input__row'>
             <label>{{title}}</label>
             <input type='text' :value="value" @input="$emit('input', $event.target.value)" />
        </div>
        <slot name='errormessage' :error='error'>
        </slot>
    </div>
</template>

<script>

    export default{
        props: ['title', 'value'],
        data(){
            return {
                error: null
            }
        }
    }
</script>

<style lang='scss' scoped>
    .container, .input__row {
        width:100%;
        height:100%;
        line-height:100%;
    }
</style>
