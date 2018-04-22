<template>
	<div class='container-fluid' >
		<div class='row main-container'>
			<div class='left col-3'>
				<input type='file' @change="onFileChange($event, 1)"/>
				<input type='file' @change="onFileChange($event, 2)"/>
				<button class='btn btn-primary' @click='postFile'>Upload</button>
				<button class='btn btn-primary' @click='fetchContent'>Fetch</button>
				<button class='btn btn-primary' @click='save'>Save</button>
			</div>
			<div class='right col-6'>
				<ul>
					<li v-for='(item,key, $index) in one' :key='$index'>
							<label>{{$index}}:{{key}}</label>
							<label>{{item}}</label>
							<input v-model='two[key]'/>
							<button class='btn btn-info' @click='fetchMeaning(key)'>Dictionary</button>
					</li>
				</ul>

			</div>
			<div class='col-3'>
				<ul>
					<li></li>
					<li v-for='(item,$index) in meanings' :key='$index'>
						{{item.dst}}
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
				two: {},
				meanings: []
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
					this.meanings = res.data.trans_result;
				});
			},

			save() {
				console.log(this.two);
				// let req = new FormData()
				// req.append('content', this.two)
				axios.post('http://localhost:5000/savemeaning', this.two,  {
						headers: {'Content-Type': 'application/json'}
					})
				.then(res=>{
					this.fetchContent();
				});
				
			}

		}
	}
</script>
<style lang='scss'>
ul {
	list-style: none;
}

.main-container {
	padding-top:30px;
}

.left {
	* {
		margin-bottom:20px;
	}
	button {
		display: block;
	}
}
.right {

}
</style>