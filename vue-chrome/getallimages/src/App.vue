<template>
	<div>
		<div>
			{{message}}
		</div>
		<button @click='getall'>Get All</button>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				message: 'Hello World',
			}
		},
		methods: {
			getall() {
				
				chrome.tabs.query({ currentWindow: true, active: true },  (tabs)=> {
					//this.message = tabs[0].url
					axios.get('http://127.0.0.1:5000/', 
						{ 
							params: {
      							url: tabs[0].url
							}
						})
					.then((res)=>{
						// alert(123);
						// alert(JSON.stringify(res));
						this.message = res.data
					})
				});
			}
		}
	}
</script>
<style>
	h1 { font-size: 22px; }
</style>