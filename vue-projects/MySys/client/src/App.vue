<template>
	<div class='main-container noisy fluid-container'>
		<router-view />
	</div>
</template>

<script>
	export default {
		
	}
</script>
<style lang='scss'>
	.main-container {
		width:100vw;
		height:100vh;
		background-color: #40526F;
		display:flex;
		justify-content: center;
		align-items: center;
	}
</style>