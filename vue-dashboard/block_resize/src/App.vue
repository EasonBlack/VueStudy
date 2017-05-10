<template>
	<div class='main__container'
	@mousemove='mousemoveHandle($event)'
    @mouseup.prevent='mouseupHandle($event)'
	>
	   <grid :ismove='ismove' :isBoxMove='isBoxMove'
	        @gridmove='gridmoveHandle'></grid>
       <box :ismove='ismove'
            :w='w'
            :h='h'
            :t='t'
            :l='l'
       @boxMoveDownHandle = 'boxMoveDownHandle'
       @mousedownHandle='mousedownHandle'></box>

	</div>
</template>

<script>
    import box from './components/box.vue';
    import grid from './components/grid.vue';
	export default {
	    components: {box, grid},
		data() {
			return {
			    isBoxMove: false,
                ismove: false,
                boxW : 100,
                boxH : 100,
                startTop: null,
                startLeft: null,
                t: 100,
                l: 100,
                w: 100,
                h: 100,
                startx: null,
                starty: null,
                endPoX: 1,
                endPoY: 1
			}
		},
		methods: {
            mousedownHandle(o) {
                this.ismove = true;
                this.startx = o.startx;
                this.starty = o.starty;
 		    },
		    mousemoveHandle(e) {
		        if(!this.ismove && !this.isBoxMove) return false;
		        if(this.ismove) {
		              let l = Math.max(e.pageX - this.startx, e.pageY - this.starty);
                      this.w = l +  this.startx - this.t;
                      this.h = l +  this.starty - this.l;
		        }

		        if(this.isBoxMove) {
                      this.t =  this.startTop + e.pageY - this.starty;
                      this.l =  this.startLeft + e.pageX - this.startx;
		        }

		    },
		    mouseupHandle(e) {

		        if(this.ismove) {
		             this.w = (parseInt(this.endPoX) + 1) * this.boxW - this.t;
                     this.h = (parseInt(this.endPoY) + 1) * this.boxH - this.l;
		        }
		        if(this.isBoxMove) {
		            console.log(this.endPoX,this.endPoY);
		            this.t =  (parseInt(this.endPoX)) * this.boxW;
                    this.l =  (parseInt(this.endPoY)) * this.boxH;
		        }
		        this.ismove = false;
                this.isBoxMove = false;



		    },
		    gridmoveHandle(n) {
                this.endPoX = n.split('-')[0];
                this.endPoY = n.split('-')[1];
		    },
		    boxMoveDownHandle(o) {
		        this.isBoxMove = true;
		        this.startx = o.startx;
                this.starty = o.starty;
               this.startTop = this.t;
               this.startLeft = this.l;
		    }
		}
	}
</script>
<style lang='scss' scoped>
    .main__container {
        width:100vw;
        height:100vh;
        position:relative;
    }

</style>