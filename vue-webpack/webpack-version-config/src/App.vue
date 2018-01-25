<template>
	<div>
		{{message}}
	</div>
</template>

<script>
	import config from './config/config.version.js'
	export default {
		data() {
			return {
				message: config.msg
			}
		}
	}
</script>
<style>

</style>