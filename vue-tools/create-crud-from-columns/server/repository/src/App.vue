<template>
	<div>
		<button @click='add'>Add</button>
		<person-list />
		<person-detail v-if='%%className%%DetailView' :row='%%className%%Detail' />
		<person-edit v-if='%%className%%EditView' :row='%%className%%Detail' />
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import %%className%%List from './module/%%className%%/%%className%%-list/index.vue'
	import %%className%%Detail from './module/%%className%%/%%className%%-detail/index.vue'
	import %%className%%Edit from './module/%%className%%/%%className%%-edit/index.vue'
	export default {
		components: {%%className%%List, %%className%%Detail, %%className%%Edit},
		data() {
			return {
				message: 'my vue'
			}
		},
		methods: {
			add() {
			  	this.$store.commit('setDetail', {});
				this.$store.commit('togglePersonEdit', true);	
			},	
		},
		computed: {
			...mapState({
                personDetailView: (state) => state.person.personDetailView,
				personEditView: (state) => state.person.personEditView,
				personDetail: (state) => state.person.detail
            })
		}
		
	}
</script>
<style>

</style>