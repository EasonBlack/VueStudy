<template>
    <div class='story__container'>
        <div class='header__container'>
            <div class='left__wrapper flex__h-center'>
                 <select>
                     <option>aaaa</option>
                 </select>
            </div>
            <div class='right__wrapper flex__h-center'>
                <a class='btn btn__add'>Save</a>
            </div>
        </div>
        <div class='content__container'>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        }
    }
</script>
<style lang='scss' scoped>
    .story__container {
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
    }
    .left__wrapper {
        width:100px;
        select {
            width:100px;
            height: 30px;
        }
    }
    .right__wrapper {
        flex:1;
    }
    .content__container {
        width:100%;
        flex:1;
    }
</style>