<template>
	<div>
		<button @click='add'>Add</button>
		<%%className%%-list />
		<%%className%%-detail v-if='%%className%%DetailView' :row='%%className%%Detail' />
		<%%className%%-edit v-if='%%className%%EditView' :row='%%className%%Detail' />
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import %%className%%List from './module/%%className%%/%%className%%-list/index.vue'
	import %%className%%Detail from './module/%%className%%/%%className%%-detail/index.vue'
	import %%className%%Edit from './module/%%className%%/%%className%%-edit/index.vue'
	export default {
		components: {%%className%%List, %%className%%Detail, %%className%%Edit},
		methods: {
			add() {
			  	this.$store.commit('setDetail', {});
				this.$store.commit('toggle%%className.capitalize()%%Edit', true);	
			},	
		},
		computed: {
			...mapState({
                %%className%%DetailView: (state) => state.%%className%%.%%className%%DetailView,
				%%className%%EditView: (state) => state.%%className%%.%%className%%EditView,
				%%className%%Detail: (state) => state.%%className%%.detail
            })
		}
		
	}
</script>
<style>

</style>