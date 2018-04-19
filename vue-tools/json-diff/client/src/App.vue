<template>
	<div class='container-fluid' >
		<div class='row'>
			<div class='left col-3'>
				<input type='file' @change="onFileChange($event, 1)"/>
				<input type='file' @change="onFileChange($event, 2)"/>
				<button @click='postFile'>Ok</button>
				<button @click='fetchContent'>Fetch</button>
			</div>
			<div class='right col-9'>
				<ul>
					<li v-for='(item,key, $index) in one' :key='$index'>
						{{key}}:{{item}}
					</li>
				</ul>

			</div>
		</div>
	
		
		
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				message: 'my vue',
				jsonFile1: null,
				jsonFile2: null,
				one: {},
				two: {}
			}
		},
		methods: {
			onFileChange(e, type) {
				let file = e.target.files[0];
				if(type==1){
					this.jsonFile1 = file;
				}
				if(type==2){
					this.jsonFile2 = file;
				}
				
			},
			postFile() {
				let req = new FormData()
				req.append('file1', this.jsonFile1)
				req.append('file2', this.jsonFile2)

				axios.post('http://localhost:5000/upload', req)
					.then(res=>{
						console.log(res);
					});
			},

			fetchContent() {
				axios.get('http://localhost:5000/getjson')
					.then(res=>{
						console.log(res);
						this.one = res.data.one;
						this.two = res.data.two;
					});
			}
		}
	}
</script>
<style>

</style>