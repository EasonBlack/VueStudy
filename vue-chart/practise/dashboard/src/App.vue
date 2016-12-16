<template>
	<div class='container'>
		This is app
        <child></child>
	</div>
</template>

<script>
    import child from './views/test.vue';
    export default {
        components: {child}
    }
</script>
<style lang='scss' scoped>
    .container {
        background-color:red;
    }
</style>