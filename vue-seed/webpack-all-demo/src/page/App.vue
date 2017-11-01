<template>
    <div>
        <p>
            <router-link :to="{name: 'home'}" >Go to Home</router-link>
            <router-link :to="{name: 'detail'}">Go to Detail</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>

<script>
	export default {
        created() {
            
        }
	}
</script>

<style>

</style>