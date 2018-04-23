<template>
	<div class='container-fluid' >
		<div class='row main-container'>
			<div class='content col-9'>
				<ul>
					<li v-for='(item,key, $index) in one' :key='$index'>

						<div class='word-key'>
							<label :title='key'>{{$index+1}}:{{key}}</label>
							<label :title='item'>[{{item}}]</label>
						</div>

						<div class='word-content d-flex align-items-center'>
							<input v-model='two[key]'/>
							<button class='btn btn-info btn-sm' @click='fetchMeaning(key)'>Dictionary</button>
						</div>
						
					</li>
				</ul>
			</div>
			<div class='right col-3'>
				<div>
					<input type='file' @change="onFileChange($event, 1)"/>
					<input type='file' @change="onFileChange($event, 2)"/>
					<button class='btn btn-primary btn-block' @click='postFile'>Upload</button>
					<button class='btn btn-primary btn-block' @click='fetchContent'>Fetch</button>
					<button class='btn btn-primary btn-block' @click='save'>Save</button>
				</div>

				<ul>
					<li></li>
					<li class='d-flex align-items-center meaning-item' v-for='(item,$index) in meanings' :key='$index'>
						<label>{{item.dst}}</label>
						<button class='btn btn-primary btn-sm' @click='getThisMeaning(item.dst)'>Get</button>
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
				meanings: [],
				selectedKey: ''
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
					this.selectedKey = key;
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
				
			},

			getThisMeaning(str) {
				if(!this.selectedKey) return false;
				this.two[this.selectedKey] = str;
				console.log(str);
				this.$forceUpdate();
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

.right {
	* {
		margin-bottom:20px;
	}

	button {
		display: block;
	}

	ul {
		border-top: 1px solid rgba(black, 0.3);
		padding-left: 0;
	}

	.meaning-item {
		label {
			margin-right:10px;
		}
		button,label {
			margin-bottom:0;
		}
	}
}

.content {
	height: 80vh;
	overflow-y:auto;
	.word-key {
		flex: 2;
	}
	.word-content {
		flex: 1;
	}

	li {
		display:flex;
		align-items: center;
		margin-bottom:10px;
		label {
			margin-bottom:0;
		}
	}
}


</style>