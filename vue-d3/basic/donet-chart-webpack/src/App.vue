<template>
	<div id="app">
		<chart :months="months"></chart>
	</div>
</template>

<script>
    import Chart from './App-Chart.vue';
	export default {
	    name: 'app',
	    data () {
	       return {
	           months: [10,50,100]
	       }
        },
	    components: {
    		Chart
  		}
	}
</script>
<style>

</style>