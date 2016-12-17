<template>
	<div class='container'>
		<home-header></home-header>
        <router-view></router-view>
	</div>
</template>

<script>
    import homeHeader from './view-home/header.vue';
    export default {
        components: {homeHeader}
    }
</script>
<style lang='scss' scoped>
    .container {

    }
</style>