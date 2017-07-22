<template lang="pug">
	div {{message}}
	    include test.html
	    span    xxx
</template>

<script>
	export default {
	    name: 'app',
		data() {
			return {
				message: 'my vue',
				message2: 'test include'
			}
		}
	}
</script>
<style>

</style>