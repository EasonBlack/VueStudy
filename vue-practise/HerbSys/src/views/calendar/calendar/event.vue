<template>
    <div class='event__container'>
        {{event.name}}
    </div>
</template>
<script>
    export default {
        props: ['event'],
        data: function() {
            return {}
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