<template>
	<div class='main-container noisy '>
		<app-nav />
		<router-view style='flex:1;background-color: steelblue;' />
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
		display:flex;
		flex-direction:column;
	}
</style>