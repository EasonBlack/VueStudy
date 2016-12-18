<template>
    <div class='container'
        v-bind:class='{
            active: active
        }'
        v-on:click='toggleAddPanel'
        >

    </div>
</template>

<script>
    export default{
        props: ['active'],
        data(){
            return{

            }
        },
        methods: {
            toggleAddPanel:function() {
                this.$emit('toggleAddPanel',0);
            }
        }
    }
</script>

<style lang='scss' scoped>
    .container {
        width:100vw;
        height:300px;
        background-color: steelblue;
        position:absolute;
        bottom:0;
        left:0;
        margin-bottom:-300px;
        transition:all 0.5s ease-out;
        &.active {
            margin-bottom:0px;
        }
    }


</style>
