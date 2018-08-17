<template>
	<div class='container'>
		<table>
			<thead>
				<th>ID</th>
				<th>NAME</th>
				<th>CONTENT</th>
			</thead>
			<tbody>
				<trwrapper :items='tableData' />
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
				tableData: []
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
			this.handle(middle['0'], middle);
			this.tableData = [...middle['0']];
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
			}
		}
	}
</script>
<style lang='scss'>
	.container {

	}

	table p {
	
	}

</style>