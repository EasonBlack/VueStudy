<template>
    <div class='container' @click='selectPart($event)'>
        <div class='border-part tl'>
            <slot name='tl'></slot>
        </div>
        <div class='border-part tr'>
            <slot name='tr'></slot>
        </div>
        <div class='border-part bl'>
            <slot name='bl'></slot>
        </div>
        <div class='border-part br'>
            <slot name='br'></slot>
        </div>
        <div class='border-part cc'>
            <slot name='cc'></slot>
        </div>
        <slot name='flower'></slot>
    </div>
</template>
<script>
    export default {
        methods: {
            selectPart(e) {
                let _class = e.srcElement.className.split(' ')[1];
                this.$emit('setWidget', _class);
            }
        }
    }
</script>
<style lang='scss' scoped>
    .container {
        width:100%;
        height:100%;
        position:relative;
    }
    .border-part {
        width:50%;
        height:50%;
        border: 1px solid #ccc;
        position:absolute;
    }

    .tl {}
    .tr {margin-left: 50%;}
    .bl {margin-top:50%;}
    .br {margin-top:50%;margin-left:50%;}
    .cc {border:1px solid steelblue; margin-top:25%;margin-left:25%;}

</style>