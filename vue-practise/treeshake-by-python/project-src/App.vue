<template lang="pug">
	div
		include App.html
		include App1.html
</template>

<script>
	export default {
		data() {
			return {
				message1: 'This is project A',
				message2: 'This is project B'
			}
		}
	}
</script>
<style>

</style>