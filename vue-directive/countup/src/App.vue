<template>
	<div class='main__container'>
	    <div v-countup='num'></div>
	</div>
</template>

<script>

    import countup from '../directive/countup'
	export default {
        directives: {countup},
		data() {
			return {
			    num: 100
			}
		}
	}
</script>
<style lang='scss' scoped>


</style>