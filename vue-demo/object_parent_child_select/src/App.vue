<template>
	<div>
		 <item v-for='(_item, $index) in items' :key='$index' :item='_item'/>
		 <button @click='confirm'>Confirm</button>
	</div>
</template>

<script>
	import item from './item.vue';
	export default {
		components: {item},
		data() {
			return {
				items: [
					{id: 0, name: 'All', check: false, children: [
						{id: 1, name:"AAA",check: false, children: [
							{id: 12, name: "AA2",check: false,},
							{id: 13, name: "AA3",check: false},
							{id: 14, name: "AA4",check: false},
						]},
						{id: 2, name: "BBB", check: false,  children: [
							{id:21, name: "B1",check: false},
							{id:22, name: "B2",check: false, children: [
								{id: 221, name: "B2a",check: false},
								{id: 222, name: "B2b",check: false},
							]},
							{id:23, name: "B3",check: false},
						]}
					]}
				]
			}
		},
		methods: {
			confirm() {
				console.log(this.items);
			},
			childChange() {

			}
		}
	}
</script>
<style>

</style>