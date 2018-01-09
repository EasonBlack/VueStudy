<template>
    <div class='form-group d-flex '>
        <label class='d-flex align-items-center' :class='"col-"+labelspan'>{{title}}</label>
        <div :class='"col-"+ (12 - labelspan)'>
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            labelspan : {
                type: String,
                default: '3'
            },
            title: {}
        }
    }
</script>
<style lang='scss' scoped>
    label {
        
    }
</style>