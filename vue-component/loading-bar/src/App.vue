<template>
    <div>
        Hello World
        <loading-bar></loading-bar>
    </div>
</template>

<script>
    import loadingBar from './loading.vue'
	export default {
	    components: {loadingBar},
		data() {
			return {

			}
		}
	}

</script>
<style lang='scss' scoped>
    .loading-container {
        position:relative;
    }
</style>