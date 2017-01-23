<template>
    <div class='quit__message'>
       <div class='quit__content'></div>
       <div class='quit__bottom'>
            <a @click='notallow'>Don't Allow</a>
            <a @click='ok'>ok</a>
       </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{

            }
        },
        methods: {
            ok: function() {
                this.$router.push('/home');
            },
            notallow: function() {
                this.$emit('closeQuitMessage')
            }
        }
    }
</script>


<style scoped lang='scss'>
    .quit__message {
        position:absolute;
        top:30%;
        left: calc( 50% - 100px);
        width:200px;
        height:100px;
        border: 1px solid grey;
        display:flex;
        flex-direction:column;
        background-color:white;
    }
    .quit__content {
        flex:1;
    }
    .quit__bottom {
        height:40px;
    }

</style>
