<template>
    <div>
        <p>
            <router-link to="/foo">Go to Foo</router-link>
            <router-link to="/bar">Go to Bar</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>

<script>

	export default {
	    name: 'app',
		data() {
			return {
				message: 'my vue'
			}
		}
	}

</script>
<style>

</style>