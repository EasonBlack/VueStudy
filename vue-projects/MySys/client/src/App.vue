<template>
	<div class='main-container noisy fluid-container'>
		<app-nav />
		<router-view style='flex:1' />
	</div>
</template>

<script>
	import appNav from './AppNav.vue';
	export default {
		components: {appNav}
		
	}
</script>
<style lang='scss'>
	.main-container {
		width:100vw;
		height:100vh;
		background-color: steelblue;
		// background-color: #40526F;
		display:flex;
		flex-direction:column;
	}
</style>