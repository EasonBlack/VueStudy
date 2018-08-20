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
	import trwrapper from './tr-wrapper.vue';
	export default {
		components: {trwrapper},
		data() {
			return {
				message: 'my vue',
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
			this.middle = middle;
			//this.handle(middle['0'], middle);
			
			this.tableData = [...middle['0']];
			console.log(this.tableData);
		},
		methods: {
			handle(items, source) {
				for(let i=0;i<items.length;i++) {
					if(source[items[i].id]) {
						items[i].children = source[items[i].id];
						delete source[items[i].id];
						this.handle(items[i].children, source);
					}
				}
			},

			toggleChildren(item) {
				let idx = this.tableData.findIndex(t=>item.id == t.id);
				console.log(this.tableData[idx]);
				if(!this.tableData[idx].expand) {
					this.tableData[idx].expand = true;
				} else {
					this.tableData[idx].expand = false;
					this.deleteChidren(item);
					return false;
				}
			
				let all = [...this.tableData];
				let _first = all.splice(0, idx + 1);
				let insert = this.middle[item.id] || [];
				insert = [...insert]
				if(insert.length) {
					let _cidx = (item.colorIndex||0) + 1;
					insert.map(n=>Object.assign(n, {color: this.colors[_cidx], colorIndex: _cidx}));
				}
				this.tableData = [..._first, ...insert, ...all];
				console.log(this.tableData);		
			},

			deleteChidren(item) {
				let _items = [...this.tableData];
				let idx = this.tableData.findIndex(t=>item.id == t.id);
				let idx2;
				let _parents =[];
				for(let i in _items) {
					if(i>idx) {
						if(_items[i].parent == item.parent) {
							idx2 = i;
							break;
						}
					}
				}
				
				if(idx2) {
					console.log(idx, idx2);
					_items.splice(idx+1, idx2-(idx+1));
				} else {
					_items.splice(idx+1, 999);
				}
				this.tableData =  [..._items];
					
			}
		}
	}
</script>
<style lang='scss'>
	

</style>