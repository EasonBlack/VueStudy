<template>
	<div class='container-fluid'>
		<div class='row'>
			<div class='col-3 left'>
				<menu-items :items='menus' />
			</div>
			<div class='col-3 right'>
				<multi-select  :items='menus'  @selectChange='selectChange'/>
				<button @click='selectedItem'>Confirm</button>
			</div>

		</div>
	</div>
</template>

<script>
	import menuItems from './items.vue';
	import multiSelect from './selects.vue';
	export default {
		components: {menuItems, multiSelect},
		data() {
			return {
				menus: [],
				items:  [
					{id: 1, name: 'AA', parentId: '0', active: false}, 
					{id: 2, name: 'BB', parentId: '0',active: false}, 
					{id: 3, name: 'CC', parentId: '0',active: false}, 
					{id: 4, name: 'A1', parentId: '1',active: false}, 
					{id: 5, name: 'A2', parentId: '1',active: false}, 
					{id: 6, name: 'A3', parentId: '1',active: false}, 
					{id: 7, name: 'B1', parentId: '2',active: false}, 
					{id: 8, name: 'B2', parentId: '2',active: false}, 
					{id: 9, name: 'C1', parentId: '3',active: false}, 
					{id: 10, name: 'C2', parentId: '3',active: false}, 
					{id: 11, name: 'AA1', parentId: '4',active: false}, 
					{id: 12, name: 'AA2', parentId: '4',active: false}, 
					{id: 13, name: 'AA3', parentId: '4',active: false}, 
				
				],
				itemSelected: {}
			}
		},
		created() {
			let result = [];
			result = this.setItems(0);
			this.menus = [...result];
		},
		methods: {
			setItems(id) {
				let res = this.items.filter(item=>item.parentId==id);
				res.forEach(r=>{
					r.children = this.setItems(r.id)
				})
				return res;
			},
			selectChange(item) {
               	this.itemSelected = item;
			},
			selectedItem() {
				console.log(this.itemSelected);
			}
		}
	}
</script>
<style lang='scss'>
	ul {
		list-style: none;
	}
	.container-fluid {
		height:100vh;
		width:100vw;
	}
	.row {
		height:100%;
	}
	.left {
		height:100%;
		background-color: steelblue;
	}


</style>