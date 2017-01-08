<template>
	<div id="app">
	    <div class='left__container'>
            <left-nav></left-nav>
	    </div>
	    <div class='right__container'>
	         <router-view></router-view>
	    </div>
	</div>
</template>

<script>
    import Vue from 'vue';
	import leftNav from './nav.vue';
	export default {
	    components: {leftNav}
	}
</script>
<style lang='scss' scoped >

    #app {
        width:100vw;
        min-height:100vh;
        display: flex;
    }

    .left__container {
        width:300px;
        height:100vh;
        background-color: #00AECD;
        color:#FAFFFF;
        padding: 30px 0px;;
    }
    .right__container {
        flex:1;
        height:100vh;
        height:100%;
    }


</style>