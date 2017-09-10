<template>
    <router-view></router-view>
</template>

<script>
    import myTable from '../table/index.vue';
	export default {
	    components: {myTable},

	}
</script>
<style>
    * {
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family: Arial;
    }

    #app {
        min-height:100vh;
        background-color:#EFEFEF;
        padding-top:50px;
        padding-left:50px;
    }



</style>