<template>
	<div class='container'>
		<table>
			<thead>
				<th>ID</th>
				<th>NAME</th>
				<th>CONTENT</th>
			</thead>
			<tbody>
				<tr v-for='item in tableData' :key='item.ID'  @click='toggleChildren(item)'
					:style='{"backgroundColor": item.color}'
				>
					<td>{{item.id}}</td>
					<td>{{item.name}}</td>
					<td>{{item.content}}</td>
				</tr>
				
			</tbody>	
		</table>
	</div>
</template>

<script>
	import tableData from '$data/array-parent-child.json';
	export default {
		data() {
			return {
				tableData: [],
				middle :{},
				colors: ['red', 'lightgreen', 'steelblue', 'pink', 'yellow']
			}
		},
		created() {
			let middle = {}
			for(let i=0;i < tableData.length;i++) {
				let r = tableData[i]
				if(!middle[r.parent]) {
					middle[r.parent] = [];
				}
				middle[r.parent].push(r);
			}		
			this.middle = Object.assign({},middle);	
			this.tableData = [...middle['0']];	
		},
		methods: {

			toggleChildren(item) {			
				let items = [...this.tableData];
				if(items.find(o=>o.parent == item.id)) {
					this.tableData = this.deleteChidren(item, items);				
				} else {
					let insert = [...this.middle[item.id]] || [];
					this.tableData = this.expandChildren(item, items, insert);
				}
			},

			deleteChidren(item, items) {
				let idxStart = items.findIndex(t=>item.id == t.id);
				//如果用findIndex来找，无法找到那种夹在中间的item
				// -> 
				//    ->
				//		->    如果这个需要删除他的子项，很难只找到idxEnd
				//		  -> 
				// ->  
				let idxEnd = -1;
				let itemIndex = item.colorIndex || 0;
				for(let i in items) {
					if(i>idxStart) {
						if(itemIndex >= (items[i].colorIndex || 0)) {
							idxEnd = i;
							break;
						}
					}
				}
				//console.log(idxEnd);
				if(idxEnd != -1) {
					return [...items.slice(0, idxStart+1), ...items.slice(idxEnd, items.length)] 
					//items.splice(idxStart+1, idxEnd-(idxStart+1));
				} else {
					return [...items.slice(0, idxStart+1)];
					//_items.splice(idxStart+1, _items.length - idxStart -1 );
				}
			},

			expandChildren(item, items, insert) {
				if(insert.length) {
					let idx = items.findIndex(t=>item.id == t.id);
					let _cidx = (item.colorIndex||0) + 1;
					insert.map(n=>Object.assign(n, {color: this.colors[_cidx], colorIndex: _cidx}));
					return [...items.slice(0,idx+1),  ...insert, ...items.slice(idx+1, items.length)];
				} else {
					return items
				}
					
			}
		}
	}
</script>
<style lang='scss'>
	

</style>