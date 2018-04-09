<template>
    <div>
        <div  v-on:click='sayHello'>  {{message}}</div>
        <div  v-on:click='sayGoodbye'> good bye</div>
        <div >{{testDateLocal}}</div>
        <div >{{testData}}</div>
    </div>
</template>

<script>
	import myMixin from './mixin';
	import myMixin2 from './mixin2';
	import myDataMixin from './dataMixin';
	export default {
	    mixins:[myMixin, myMixin2, myDataMixin],
		data() {
			return {
				message: 'my vue ',
				testDateLocal : "Data from vue"
			}
		},
		created: function() {
		    console.log('created!!');
		}
	}

</script>

<style>

</style>