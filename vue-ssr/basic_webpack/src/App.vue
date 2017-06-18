<template>
	<div>
		{{message}}
		<button @click="confirm">Confirm</button>
		<app-view></app-view>
	</div>
</template>

<script>
    import appView from './App_View.vue';
	export default {
	    components: {appView},
		data() {
			return {
				message: 'my vue'
			}
		},
		methods: {
		    confirm() {
		        console.log('trigger confirm');
		    }
		}
	}
</script>
<style>

</style>