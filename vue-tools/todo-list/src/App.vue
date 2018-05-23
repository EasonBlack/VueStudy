<template>
	<div class='container-fluid pt-5'>
		<div class='row'>
			<div class='col-6'>
				<div class='list-title'>TODO & DOING</div>
				<ul>
					<li class='li-parent' v-for='(item,$index) in todoList' :key='$index'>
						<label>{{item.name}}</label>
						<ul v-if='item.children.length'>
							<li class='li-child' v-for='(child,$index) in item.children' :key='$index'>
								{{child.name}}
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<div class='col-6'>
				<div class='list-title'>DONE</div>
				<ul>
					<li class='li-parent' v-for='(item,$index) in doneList' :key='$index'>
						<label>{{item.name}}</label>
						<ul v-if='item.children.length'>
							<li class='li-child' v-for='(child,$index) in item.children' :key='$index'>
								{{child.name}}
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				items: [
					{name:"finish page 1", status:'' , children:[
						{name:"pager", status:"done"},
						{name:"font size", status:""},
						{name:"margin-top", status:""},
						{name:"margin-right", status:"done"},
						{name:"margin-bottom", status:""},
					]},
					{name: "page 2", status: '' , children:[
						{name:"pager ", status:"done"},
						{name:"font size", status:""},
					]}
				],
				todoList : [],
				doneList : []
			}
		},
		created() {
			this.items.forEach(item=>{
				if(item.status == 'done') {
					this.doneList.push(item);
				} else {
					if(item.children.length) {
						let _doneItem = {name: item.name, children: []};
						let _todoItem = {name: item.name, children: []};
						_doneItem.children = item.children.filter(c=>c.status=='done');
						_todoItem.children = item.children.filter(c=>c.status!='done');
						if(_doneItem.children.length) {
							this.doneList.push(_doneItem);
						} 
						this.todoList.push(_todoItem);
					} else {
						this.todoList.push(item)
					}
					
				}
			})
			console.log(this.todoList, this.doneList);
		}
	}
</script>
<style lang='scss' scoped>
	.container-fluid {
		padding-left:30px;
		padding-right:30px;

	}
	ul {
		list-style: none;
	}
	li {
		display:flex;
	}
	label {
		width: 150px;
	}
	.li-parent {
		font-size:16px;
		font-weight: bold;
		margin-bottom:10px;
	
	}
	.li-child {
		font-size: 14px;
		font-weight:normal;
	}

	.list-title {
		padding-left: 40px;
		height: 50px;
		font-size: 20px;
	}
</style>