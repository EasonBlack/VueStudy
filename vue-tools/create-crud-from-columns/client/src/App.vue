<template>
	<div>
		<div>
			<textarea v-model='cols' />
		</div>
		<button @click='confirm'>Confirm</button>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				cols: ''
			}
		},
		methods: {
			confirm() {
				let _cols = this.cols.split('\n');
				axios.post('http://127.0.0.1:90/setup', {cols: _cols})
				.then(res=>{
					console.log(res);
				})
			}
		}
	}
</script>
<style lang='scss' scoped>
	textarea {
		width:400px;
		min-height:300px;
		resize: none;
	}
</style>