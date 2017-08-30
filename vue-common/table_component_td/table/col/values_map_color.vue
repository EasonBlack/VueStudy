<template>
    <span class='col__valuecolor'
        :style='{
            color: resultcolor
        }'
    >
        {{value}}
    </span>
</template>
<script>
    export default {
        props: ['value', 'map'],
        computed: {
            resultcolor() {
                return this.map[this.value] || 'black'
            }
        }
    }
</script>
<style lang='scss' scoped>
    .col__enable-circle {
        display:inline-block;
        width:10px;
        height:10px;
        border-radius: 50%;
        &.circletrue {
            background-color: #77DFBA;
        }
        &.circlefalse {
            background-color:#F5685D;
        }
    }
</style>