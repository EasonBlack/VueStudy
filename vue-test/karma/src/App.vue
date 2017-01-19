<template>
	<div>
		{{message}}
	</div>
</template>

<script>
	export default {
	    name: 'app',
		data() {
			return {
				message: 'my vue'
			}
		},
		created: function() {
		    this.message = "Hello";
			console.log('it is created');
		}
	}
</script>
<style>

</style>