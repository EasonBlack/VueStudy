<template>
    <div class='little-preview__container'>
        <div class='header'></div>
        <div class='content'
            :style='{
                "background-image": bgUrl
            }'
        >
        </div>
    </div>
</template>

<script>

    export default{
        props: ['bgImage'],
        data(){
            return{
            }
        },
        computed: {

            bgUrl() {
                return `url('../../assets/${this.bgImage}')`
            }
        }

    }
</script>

<style lang='scss' scoped>
     .little-preview__container {
        width:70%;
        height:50%;
        background-color:white;

        .header {
            height:10%;
            background-color: steelblue;
        }
        .content {
            height:90%;
            background-size: cover;
            background-repeat: no-repeat;
        }
     }
</style>
