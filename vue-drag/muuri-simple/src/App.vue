<template>
	<div class="grid" id='g1'>

		<div class="item d1">
			<div class="item-content">
			AAAAA
			</div>
		</div>

		<div class="item d2">
			<div class="item-content">
			
				<div class="my-custom-content">
					Yippee!
				</div>
			</div>
		</div>
		<div class="item d3">
			<div class="item-content">
			CCCCC
			</div>
		</div>

	</div>
</template>

<script>
	import Muuri from 'muuri';
	export default {
		data() {
			return {
				grid : null
			};
		},
		mounted() {
			this.grid = new Muuri('#g1',{
				items: '.item',
				dragEnabled: true
			})
		}
	};
</script>
<style lang='scss' scoped>
.grid {
	position:relative;
}
.item {
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  margin: 5px;
  z-index: 1;
  background: #000;
  color: #fff;
}

.item.muuri-item-dragging {
  z-index: 3;
}
.item.muuri-item-releasing {
  z-index: 2;
}
.item.muuri-item-hidden {
  z-index: 0;
}
.item-content {
  position: relative;
  width: 100%;
  height: 100%;
}

.d1 {

}
.d2 {
	width:200px;
}
.d3 {
	height:200px;
}
</style>