<template>
    <div class='home__container'>
       <a class='button__start' @click='gotoSurvey'>Start</a>
    </div>
</template>

<script>
    export default{
        data(){
            return{

            }
        },
        methods: {
            gotoSurvey:function() {
                this.$router.push('/survey')
            }
        }
    }
</script>


<style scoped lang='scss'>
    .home__container {
        display:flex;
        justify-content: center;
        align-items: center;
        height:100%;
    }
    .button__start {
        display:block;
        width:60px;
        height:40px;
        line-height:40px;
        background-color:green;
        text-align: center;
    }
</style>
