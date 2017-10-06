<template>
    <div class='mask'>
        <div class='box__container'>
            <div class='box__message'>
                {{message}}
            </div>
            <div class='box__action'>
                <a class='btn btn__add  mr-20' @click='boxConfirm'>Confirm</a>
                <a class='btn btn__cancel' @click='boxCancel'>Cancel</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['message'],
        methods: {
            boxConfirm() {
                this.$emit('boxConfirm');
            },
            boxCancel() {
                this.$emit('boxCancel');
            },
        }
    }
</script>
<style lang='scss' scoped>
    .mask {
        position:fixed;
        top:0;
        left: 0;
        width:100vw;
        height:100vh;
        background-color: rgba(black, 0.2);
        display:flex;
        justify-content: center;
        align-items: center;
    }

    .box__container {
        width:300px;
        height:200px;
        background-color:white;
        border: 1px solid steelblue;
        position:relative;
    }

    .box__message {
        width:100%;
        height:150px;
        display:flex;
        justify-content: center;
        align-items: center;
    }

    .box__action {
        height:50px;
        display:flex;
        padding-right:20px;
        justify-content: flex-end;
        align-items: center;
    }

</style>