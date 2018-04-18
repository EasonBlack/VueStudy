<template>
	<div>
		<input type='file' @change="onFileChange($event)"/>
		<button @click='postFile'>Ok</button>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				message: 'my vue',
				jsonFile: null
			}
		},
		methods: {
			onFileChange(e) {
				let file = e.target.files[0];
				this.jsonFile = file;
			},
			postFile() {
				let req = new FormData()
				req.append('file', this.jsonFile)

				axios.post('http://localhost:5000/upload', req)
					.then(res=>{
						console.log(res);
					});
			}
		}
	}
</script>
<style>

</style>