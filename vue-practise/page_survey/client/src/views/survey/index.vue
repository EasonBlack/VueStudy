<template>
    <div class='survey__container'>
        This is Survey
        <nav-bar :count="6"></nav-bar>
    </div>
</template>

<script>
    import navBar from './nav.vue';
    export default{
        components: {navBar},
        data(){
            return{

            }
        }
    }
</script>


<style scoped lang='scss'>
    .survey__container {
        height:100%;
    }
</style>
