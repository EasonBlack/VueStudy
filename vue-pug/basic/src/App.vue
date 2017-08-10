<template lang="pug">
    div {{message}}
        include test.html
        span    dfd2
        my-component(v-for='l in list'
            v-bind:title='l' v-on:click.native="clickHandle(l)")
</template>

<script>
    import myComponent from './component.vue';
	export default {
	    name: 'app',
        components: {
            myComponent
        },
		data() {
			return {
				message: 'my vue',
				message2: 'test include',
                list: [
                    1,2,3,4,5
                ]
			}
		},
        methods: {
	        clickHandle(l) {
	            console.log(l);
            }
        }
	}
</script>
<style>

</style>