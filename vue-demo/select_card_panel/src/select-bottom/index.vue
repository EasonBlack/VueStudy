
<template>
    <div class='bottom__container'>
        <button @click='addSelect'>ADD</button>
    </div>
</template>

<script>
    export default{
        props:[],
        data(){
            return{

            }
        },
        methods: {
            addSelect() {
                this.$emit('addSelect');
            }
        }

    }
</script>

<style lang='scss' scoped>
    .bottom__container {
        width:100%;
        height:50px;
        display:flex;
        justify-content: center;
        button {
            display:block;
            width:50px;
            height:30px;
            line-height:30px;
            background-color: steelblue;
        }
    }
</style>
