<template>
	<div class='container'>
		<div id='left_panel'>
			<v-table
			 	ref="table1"
				:columns="columns"
				:table-data="rows"
				even-bg-color="#f4f4f4"
				row-hover-color="#eee"
				row-click-color="#edf7ff"
				
				is-horizontal-resize
				:title-row-height = '30'
				:row-height = '30'
				style="width:100%"
			></v-table>
		</div>
		<div id='right_panel'>
			 <div id="drag"></div> 
			 right content
		</div>
		 
	</div>
</template>

<script>
	import $ from 'jquery';
	export default {
		data() {
			return {
				message: 'my vue',
				columns: [
					{field: 'id', title:'ID', width: 50, titleAlign: 'center',columnAlign:'center', isResize:true,},
                    {field: 'name', title:'Name',  width: 50,titleAlign: 'center',columnAlign:'center', isResize:true,},
                    {field: 'age', title:'Age',  width: 50,titleAlign: 'center',columnAlign:'center', isResize:true,},
				],
				rows: [
					{id: '1', name:'aaaa', age: '12'},
					{id: '2', name:'bbbb', age: '13'},
				]
			}
		},
		mounted() {
			var isResizing = false,
			lastDownX = 0;

			var container = $('.container'),
				left = $('#left_panel'),
				right = $('#right_panel'),
				handle = $('#drag');
			var containerWidth = container.width() ;

			handle.on('mousedown',  (e) => {
				isResizing = true;
				lastDownX = e.clientX;
			});

			$(document).on('mousemove',  (e) => {
		
				if (!isResizing) 
					return;
				
				var offsetLeft =  (e.clientX - container.offset().left);

				left.css('width', offsetLeft);
				right.css('left', offsetLeft);
				right.css('width', containerWidth - offsetLeft)
			}).on('mouseup',  (e) => {
				isResizing = false;
				this.$refs['table1'].resize();
				
			});
		}
	}
</script>
<style lang='scss' scoped>
	.container {
		width:800px;
		height:300px;
		position:relative;
	}

	#left_panel {
		position: absolute;
		left: 0px;
		top: 0;
		bottom: 0;
		width:200px;
		background: grey;
	}

	#right_panel {
		position: absolute;
		left:200px;
		top: 0;
		bottom: 0;
		width:600px;
	}
	#drag {
		position: absolute;
		left: -4px;
		top: 0;
		bottom: 0;
		width: 8px;
		cursor: w-resize;
	}
</style>