<template>
	<div>
        <div>{{num}}</div>
        <button @click='show'>Show</button>
	</div>
</template>

<script>
    import appService from '../service/app.service'
	export default {
		data() {
			return {
               	num: 0
			}
        },
        methods: {
            show() {
                this.num = appService.num;
            }
        }
	}
</script>
<style>

</style>