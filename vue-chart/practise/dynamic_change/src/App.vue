<template>
	<div class='container' sytle='padding-top:40px;'>
		<div class='row'>
			<div class='col-6'>
				<chart-standard :items='items' :current='current'/>
			</div>
			<div class='col-6'>
				<chart-result :items='items' :current='current'/>
			</div>
		</div>
		<div class='row'>
			<div class='col-12'>
				<a class='btn btn-primary text-white' @click='startHandle'>Start</a>
			</div>
		</div>
		
	</div>
</template>

<script>
	import chartStandard from './chartStandard.vue';
	import chartResult from './chartResult.vue';
	import moment from 'moment';
	export default {
		components: {chartStandard, chartResult},
		data() {
			return {
				items: [
					{date: "2018-01-01", num: 8, value:7},
					{date: "2018-01-02", num: 12, value: 13},
					{date: "2018-01-03", num: 14, value: 25},
				],
				current: '2018-01-03'
			}
		},
		methods: {
			startHandle() {
				this.current = moment(this.current).add(1, 'days').format('YYYY-MM-DD');
				let _num = Math.ceil(Math.random()*100);
				let _value = Math.ceil(Math.random()*100);
				this.items.push({date: this.current, num: _num, value: _value});
			}
		}
	}
</script>
<style>

</style>