<template>
	<div class='container'>
		<person-list />
		<person-detail v-if='personDetailView' :row='personDetail' />
		<person-edit v-if='personEditView' :row='personDetail' />
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import personList from './module/person/person-list/index.vue'
	import personDetail from './module/person/person-detail/index.vue'
	import personEdit from './module/person/person-edit/index.vue'
	export default {
		components: {personList, personDetail, personEdit},
		computed: {
			...mapState({
                personDetailView: (state) => state.person.personDetailView,
				personEditView: (state) => state.person.personEditView,
				personDetail: (state) => state.person.detail
            })
		}
	}
</script>
<style lang='scss'>
	body {
		background-color: rgba(grey, 0.3);
	}
</style>