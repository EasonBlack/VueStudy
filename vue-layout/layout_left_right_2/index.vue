<template>
    <div class='main__container'>
        <div class='left__container'>

        </div>
        <div class='right__container'>
             <div class='right-up__container'></div>
             <div class='right-middle__container'></div>
             <div class='right-down__container'></div>
        </div>
    </div>
</template>
<script>
    export default {
    }
</script>
<style lang='scss' scoped>
    .main__container {
        width:100%;
        height:100%;
        display:flex;
    }
    .left__container {
        width:300px;
        display:flex;
        flex-direction:column;
        background-color: #498e49;
        position:relative;
        padding:20px;
    }

    .right__container {
        flex:1;
        display:flex;
        flex-direction:column;
        background-color: #4b498e;
        position:relative;
        padding:20px;
    }
    .right-up__container {
        height:50%;
        background-color: #8c8e49;
    }
    .right-middle__container {
        flex:1;
        background-color: #90922c;

    }
    .right-down__container {
        flex:1;
        background-color: #5b5d0d;
    }

</style>