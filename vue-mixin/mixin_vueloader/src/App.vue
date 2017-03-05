<template>
    <div>
        <div  v-on:click='sayHello'>  {{message}}</div>
        <div  v-on:click='sayGoodbye'> good bye</div>
    </div>
</template>

<script>
	import myMixin from './mixin';
	import myMixin2 from './mixin2';
	export default {
	    mixins:[myMixin, myMixin2],
		data() {
			return {
				message: 'my vue'
			}
		},
		created: function() {
		    console.log('created!!');
		}
	}

</script>

<style>

</style>