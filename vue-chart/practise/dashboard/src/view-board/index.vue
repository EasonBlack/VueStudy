<template>
    <div class='container'>
        <app-button :item='addButton'></app-button>
        This is board
    </div>
</template>

<script>
    import appButton from 'common/button/example__icon-text_1/index.vue';
    import plusIcon from 'assets/icons/plus_white.png';
    export default{
        components: {appButton},
        data(){
            return{
               addButton : {
                   src:  plusIcon,
                   text: "Add a Dataset"
               }
            }
        }

    }
</script>

<style lang='scss' scoped>
    @import "../../styles/_settings.global.scss";
    .container {
        width:100vw;
        height:calc(100vh - #{$headerHeight});
        background-color: $dark-bgc;
        color:white;
    }
</style>
