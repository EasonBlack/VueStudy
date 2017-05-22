

<script>
    import base from './base.vue';
	export default {
        extends: base,
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

<style lang="scss" scoped>

</style>