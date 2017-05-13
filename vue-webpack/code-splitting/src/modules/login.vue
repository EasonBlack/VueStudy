<template>
    <div>
        THis is login page
        <button @click='login'>Login</button>
    </div>
</template>

<script>
    console.log('load login');
    export default{
        data(){
            return{

            }
        },
        methods: {
            login() {
                document.cookie = 'name=11';
                this.$router.push('/view1');
            }
        }
    }
</script>

<style lang='scss' scoped>

</style>
