<template>
	<div>
        <div></div>
		<button @click='add'>Add</button>
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
            add() {
                appService.add()
            }
        }
	}
</script>
<style>

</style>