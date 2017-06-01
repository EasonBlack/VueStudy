

<script>
    import base from './base.vue';
    import myComponent from './real-component.vue';
	export default {
        extends: base,
        components: {myComponent},
		data() {
			return {
			    flagA: true,
				message: 'my vue',
				clickMethods: 'getB'
			}
		},
		created: function() {
		    console.log('created!!');
		}
	}

</script>

<style lang="scss" scoped>

</style>