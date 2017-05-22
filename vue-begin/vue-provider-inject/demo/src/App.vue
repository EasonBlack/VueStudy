
<template>
    <div>
        <div>Helllll</div>
        <child></child>
    </div>
</template>

<script>
    import child from './child.vue';
	export default {
	    components: {child},
//        provide: {
//            message: "ccccc"
//        },
        provide() {
            return {
                message: this.message
            };
        },

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
    .container {
        color:blue;
    }
</style>