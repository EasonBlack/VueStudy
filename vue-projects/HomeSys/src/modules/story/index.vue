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
            <div class='grid__container' >
                <story-grid :colNum='colNum' :rowNum='rowNum'></story-grid>
            </div>
            <div class='right__container'></div>
        </div>
    </div>
</template>
<script>
    import storyGrid from './story_grid/index.vue';
    export default {
        components: {storyGrid},
        data() {
            return {
                colNum : 7,
                rowNum: 7,
            }
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
        display:flex;
        border-top: 1px solid rgba(grey, 0.8);
    }
    .grid__container {
        flex:1 0;
        position:relative;
        background-color:rgba(grey, 0.5);
        overflow:auto;
    }
    .right__container {
        flex:0 0 150px;
        background-color:white;
    }
</style>