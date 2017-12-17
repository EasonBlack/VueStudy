<template>
	<div>
        <div></div>
		<button @click='minus'>Minus</button>
	</div>
</template>

<script>
    import appService from '../service/app.service'
	export default {
		data() {
			return {
			}
        },
        methods: {
            minus() {
                appService.minus()
            }
        }
	}
</script>
<style>

</style>