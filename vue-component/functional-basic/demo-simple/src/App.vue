<template>
	<div>
		<div>{{msg}}</div>
		<my-com :message='"aaaaa"' />
	</div>
</template>

<script>
	import myCom from './component.vue';
	export default {
		components: {myCom},
		data() {
			return {
				msg: 'my vue'
			}
		}
	}
</script>
<style>

</style>