<template>
	<div>
		<com1 />
		<com2 />
		<display-div />
	</div>
</template>

<script>
	import com1 from './component/com_one.vue'
	import com2 from './component/com_two.vue'
	import displayDiv from './component/display.vue'
	export default {
		components:{com1, com2, displayDiv},
		data() {
			return {
				message: 'my vue'
			}
		}
	}
</script>
<style>

</style>