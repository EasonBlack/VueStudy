<template>
	<div id="app">
		{{count}}
		<button v-on:click="increment">+</button>
        <button v-on:click="decrement">-</button>
	</div>
</template>

<script>
	export default {
		computed: {
            count () {
        	    return this.$store.state.count
            }
          },
          methods: {
            increment () {
               this.$store.commit('increment')
            },
            decrement () {
               this.$store.commit('decrement')
            }
          }
	}
</script>
<style>

</style>