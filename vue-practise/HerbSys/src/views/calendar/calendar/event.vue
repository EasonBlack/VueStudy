<template>
    <div class='event__container' @click='eventHandle(event)'>
        {{event.name}}
    </div>
</template>
<script>
    import bus from '../../../bus.js'
    export default {
        props: ['event'],
        data: function() {
            return {}
        },
        methods: {
            eventHandle:function(event) {
                bus.$emit('eventHandle', {val: event.id})
            }
        }
    }
</script>
<style lang='scss' scope>
    .event__container {
        width: 100%;
        height:15px;
        line-height:15px;
        padding: 0 10px;
        font-size:0.7em;
        background-color:steelblue;
        color:white;
        margin-bottom:5px;
    }
</style>