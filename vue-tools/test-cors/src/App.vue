<template>
	<ul>
		<li>
			<label>GET:</label>
			<input v-model='getURL'/>
			<button @click='submitGet'>Submit</button>
		</li>
		<li>
			<label>POST:</label>
			<input v-model='postURL'/>
			<button @click='submitPost'>Submit</button>
		</li>
		
	</ul>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				getURL: 'http://localhost:9000/demo/memsuser/getMemsUserList',
				postURL : 'http://localhost:9000/demo/memsuser/addmenuuser'
			}
		},
		methods: {
			submitGet() {
				axios.get(this.getURL)
				.then(res=>{
					console.log(res);
				})
			},
			submitPost() {
				let fd = new FormData();
				fd.append('userId', 12);
				fd.append('firstName', "xxxxx");
				fd.append('lastName', "bbbbbb");
				axios.post(this.postURL, {userId: 13, firstName: "xxxx", lastName: 'bbbb'})
				.then(res=>{
					console.log(res);
				})
			}
		}
	}
</script>
<style>

</style>