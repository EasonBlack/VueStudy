<template>
	<div class='container'>
	
			<div class='left'>
        <router-link to="/app/tab1">Tab1 Demo</router-link>
    	</div>
			<div class='right'>
				<router-view></router-view>
			</div>
		
	</div>
</template>

<script>

	export default {
		data() {
			return {
				com: null
			}
		},
		created(){
			this.com = this.$route.params.name;
			console.log(this.com);
		}
	}
</script>
<style>

</style>