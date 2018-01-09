<template>
<nav class='navbar navbar-default container-fluid'>
	<img class='logo' src='assets/images/logo.png' />
	<account-info class=''>
	</account-info> 
</nav> 
</template> 

<script>
import accountInfo from './account-info.vue' 

export default { 
	components: { accountInfo},
}
</script>

<style lang='scss' scoped>
	.navbar-default {
		background-color: #2C3E50;
		border-color: #2c3e50;
	}
	.logo {
		width:40px;
		height:40px;
	}
</style> 

