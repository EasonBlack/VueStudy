<template>
    <div class='over__container'>
       This is over
    </div>
</template>

<script>
    export default{
        data(){
            return{

            }
        },
        methods: {

        },
        mounted: function() {
            setTimeout(()=>{
                this.$router.push('/home');
            },3000)
        }
    }
</script>


<style scoped lang='scss'>
    .over__container {
        display:flex;
        justify-content: center;
        align-items: center;
        height:100%;
    }

</style>
