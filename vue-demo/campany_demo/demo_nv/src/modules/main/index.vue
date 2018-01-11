<template>
<div>
	<div class='menu-container'>
		<content-menu />
	</div>
	<router-view class='router-container'/>
</div> 
</template> 

<script>
	import contentMenu from './content-menu.vue';
	export default { 
		components: {contentMenu}
	}
</script>

<style lang='scss' scoped>
	.menu-container {
		margin-bottom: 20px;
		background-color: #3c5165;
		color: #fff;
    	font-size: 13.5px;
		min-height:35px;
	}
	.router-container {
		background-color: #EDEDF0;
	}
</style> 

