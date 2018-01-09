<template>
	<div id="main-header">
        <main-header class='header-container'/>
        <router-view class='router-container'></router-view>
	</div>
</template>

<script>
    import mainHeader from './modules/main/main-header.vue'
	export default {
        components: {mainHeader}
	}
</script>
<style lang='scss' >
    #app {
        width:100vw;
        min-height:100vh;
    }
    .header-container {
        height:50px;
    }
    .router-container {
        height:calc(100vh - 50px);
        overflow-y:hidden;
    }
</style>