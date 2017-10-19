<template>
	<div class='container-fluid no-padding h-100'>
		<nav class='bg-primary'>
			<button class='btn btn-outline-success' @click='addBoxHandle'>Add</button>
		</nav>
		<div class='container-fluid no-padding canvas__wrapper'
				 @mousemove='mouseMoveHandle' @mouseup='mouseUpHandle'
		>
			<canvas id="canvas"></canvas>
			<box v-for='(item, $index) in items' :key='$index' :box='item' @mouseDownHandle='mouseDownHandle'/>
		</div>
		
	</div>
</template>

<script>
	import box from './box.vue';
	export default {
		components: {box},
		data() {
			return {
				startTop: null,
				startLeft: null,
				originTop: null,
				originLeft: null,			
				currentBox: null,
				items: []
			}
		},
		methods: {
			addBoxHandle() {
				let _id = this.items.length + 1;
				let _newBox = {
					id: _id,
					currentTop: 10,
					currentLeft: 10,
					w: 200,
					h: 150
				}
				this.items.push(_newBox);
				this.$forceUpdate();
			},
			
			mouseDownHandle({e, id}) {
			
			  this.currentBox = this.items.find(item=>item.id ==id);
				this.startTop = e.clientY;
				this.startLeft = e.clientX;
				this.originTop = this.currentBox.currentTop;
    		this.originLeft = this.currentBox.currentLeft;
			},

			mouseMoveHandle(e) {
				if(this.currentBox){	
				  this.currentBox.currentTop = this.originTop + e.clientY - this.startTop;
      		this.currentBox.currentLeft = this.originLeft + e.clientX - this.startLeft;
				}
			},
			
			mouseUpHandle() {
				this.currentBox = null;
			}
		},
		mounted: function() {
			this.canvas = document.getElementById('canvas');
			this.ctx = this.canvas.getContext("2d");
			this.canvas.width = this.ctx.canvas.clientWidth;
			this.canvas.height = this.ctx.canvas.clientHeight;
			this.w = this.ctx.canvas.clientWidth;
			this.h =  this.ctx.canvas.clientHeight;
			console.log(this.ctx);
			console.log(this.w, this.h)

		 	this.draw = ()=>{
					this.ctx.clearRect(0, 0, this.w, this.h);
					for(let i=1;i<this.items.length;i++){
						if(this.items[i]) {
							let boxPrev = this.items[i];
							let t0 = boxPrev.currentTop + boxPrev.h /2;
							let l0 = boxPrev.currentLeft + boxPrev.w;

							let boxCurrent = this.items[i-1];
							let t1 = boxCurrent.currentTop + boxCurrent.h /2;
							let l1 = boxCurrent.currentLeft;
							
							this.ctx.beginPath();
							this.ctx.moveTo(l0,t0);
							this.ctx.lineTo(l1,t1);
							this.ctx.lineWidth = 2;
							this.ctx.stroke();
						}
					}
					
					requestAnimationFrame(this.draw);
			}
			this.draw();
		}
	}
</script>

<style lang='scss' scoped>
	.canvas__wrapper {
		height: calc(100% - 50px);
	}

	#canvas {
		border: 1px solid steelblue;
		border-top: none;
		width:100%;
		height:100%;
	}


</style>