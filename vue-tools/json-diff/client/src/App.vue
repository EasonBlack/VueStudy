<template>
	<div class='container-fluid' >
		<div class='row'>
			<div class='left col-3'>
				<input type='file' @change="onFileChange($event, 1)"/>
				<input type='file' @change="onFileChange($event, 2)"/>
				<button class='btn btn-primary' @click='postFile'>Upload</button>
				<button class='btn btn-primary' @click='fetchContent'>Fetch</button>
			</div>
			<div class='right col-9'>
				<ul>
					<li v-for='(item,key, $index) in one' :key='$index'>
							<label>{{$index}}:{{key}}</label>
							<label>{{item}}</label>
							<input v-model='two[key]'/>
							<button class='btn btn-info' @click='fetchMeaning(key)'>Dictionary</button>
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

				if(!this.jsonFile1 || !this.jsonFile2) {
					return false;
				}

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
			},

			fetchMeaning(key) {
				let req = new FormData()
				req.append('content', key)
				axios.post('http://localhost:5000/getmeaning', req)
				.then(res=>{
					console.log(res);
				});
			}

		}
	}
</script>
<style lang='scss'>
ul {
	list-style: none;
}

.left {
	padding-top:30px;
	* {
		margin-bottom:20px;
	}
	button {
		display: block;
	}
}
.right {
	padding-top:30px;
}
</style>