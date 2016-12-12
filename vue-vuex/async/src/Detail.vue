<template>
	<div>
		<div>{{item.name}}</div>
		<div>{{item.num}}</div>
		<button v-on:click="increment">+</button>
        <button v-on:click="decrement">-</button>
        <button v-on:click='back'>Back</button>
	</div>
</template>

<script>
    import { mapState } from 'vuex'
	export default {
        data:function() {
            return {
            }
        },
        methods: {
            increment () {
                this.$store.commit('increment', this.$route.params.id)
            },
            decrement () {
                this.$store.commit('decrement',this.$route.params.id)
            },
            back () {
                this.$router.push('/app');
            }
        },
	    computed: {
	        item: function() {
              return this.$store.state.items.find((i)=> i.id == this.$route.params.id)
            }
	    }

	}
</script>
<style>

</style>