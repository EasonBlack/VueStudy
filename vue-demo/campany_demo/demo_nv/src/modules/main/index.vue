<template>
<div>
	<content-menu />
	<router-view />
</div> 
</template> 

<script>
	import contentMenu from './content-menu.vue';
	export default { 
		components: {contentMenu}
	}
</script>

<style lang='scss' scoped>
</style> 

