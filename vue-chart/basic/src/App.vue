<template>
	<div id="app">
		 <Chart></Chart>
	</div>
</template>

<script>
	import Chart from './Chart.vue'
	export default {
	    components: {Chart},
		data() {
			return {}
		}
	}
</script>
<style >
 #app {
    width:50vw;
    height:50vh;
 }
</style>