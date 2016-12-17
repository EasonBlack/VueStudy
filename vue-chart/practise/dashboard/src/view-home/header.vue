<template>
    <div class='container'>
        <div class='title-section'>
            Demo Overview
        </div>
        <div class='other-section'></div>
    </div>
</template>

<script>

    export default{
        data(){
            return{

            }
        }

    }
</script>

<style lang='scss' scoped>
     @import "../../styles/_settings.global.scss";
    .container {
        width:100vw;
        height:$headerHeight;
        display:flex;
        flex-direction: row;
         .title-section {
                width:180px;
                padding-left: $left-padding;
                align-items:center;
                background-color:$bgc;
                color: #A7A39E;
                display: flex;
            }
            .other-section {
                flex:1;
                background-color: $light-bgc;
            }
    }

</style>
