<template>
	<div>
		<div>
			{{message}}
		</div>
		<div>
			{{demoTxt}}
		</div>
		
	</div>
</template>

<script>
	import config from './config/config.version.js'
	import demo from './config/demo/demo.target.js'
	export default {
		data() {
			return {
				message: config.msg,
				demoTxt: demo.txt
			}
		}
	}
</script>
<style>

</style>