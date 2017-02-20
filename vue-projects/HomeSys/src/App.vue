<template>
	<div id="app">
	    <div class='left__container'>
            <left-nav :menus='menus'></left-nav>
	    </div>
	    <div class='right__container'>
	         <router-view></router-view>
	    </div>
	</div>
</template>

<script>
    import Vue from 'vue';
	import leftNav from './modules/home/left-nav/index.vue';
	export default {
	    components: {leftNav},
	    data() {
	    	return {
	    		  menus: [
		            {name: 'calendar',title: "Calendar" },
		            {name: 'daily',title: "Daily"},
		            {name: 'event_maintenance', title: 'Event Maintenance'}
		        ],
	    	}
	    }
	}
</script>
<style lang='scss' scoped >

    #app {
        width:100vw;
        min-height:100vh;
        display: flex;
        overflow:hidden;
    }

    .left__container {
        width:100px;
        height:100vh;
        color:#FAFFFF;
    }
    .right__container {
        flex:1;
        height:100vh;
    }


</style>