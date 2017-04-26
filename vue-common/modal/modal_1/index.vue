<template>
    <transition name="fade">
    <div class='modal__container'>
        <div class='header'>
            <div class='close' @click='close'>X</div>
        </div>
        <div class='body'></div>
    </div>
    </transition>
</template>

<script>

    export default{
        data(){
            return{

            }
        },
        methods: {
            close() {
                this.$emit('close');
            }
        }

    }
</script>

<style lang='scss' scoped>
    .modal__container {
        width:400px;
        height:300px;
        margin:auto auto;
        z-index:100;
        .header {
            width:100%;
            height:20%;
            background-color: #ccc;
            .close {
                position:absolute;
                top:0px;
                right:10px;
            }
        }
        .body {
            width:100%;
            height:80%;
            background-color: steelblue;
        }
    }

    .fade-enter-active, .fade-leave {
        transition: opacity .5s ease;
         opacity: 1;
    }
    .fade-enter, .fade-leave-active {
        transition: opacity .5s ease;
        opacity: 0
    }

</style>
