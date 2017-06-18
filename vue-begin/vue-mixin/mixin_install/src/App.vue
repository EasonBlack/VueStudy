<template>
    <div>
        <div>{{message}}</div>
        <div> good bye</div>
    </div>
</template>

<script>
	export default {
		data() {
			return {
				message: 'my vue'
			}
		},
		created: function() {
		    console.log('created!!');
		}
	}

</script>

<style>

</style>