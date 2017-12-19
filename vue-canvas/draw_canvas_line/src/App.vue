<template>
    <div class='container'>
        <div class='content__container'>
            <canvas id="canvas" width='600' height='600'
                    @mouseup='onMouseUp' @mouseout="onMouseOut"
                    @mousemove='onMouseMove' @mousedown="onMouseDown"
            ></canvas>
        </div>

    </div>
</template>

<script>

	export default {

		data: function() {
            return {
                 canvas: '',
                 ctx: '',
                 w: '',
                 h: '',
                 drawObj: {},
                 lines: []
            }
		},
		created: function() {
		    this.drawObj.x='black';
		    this.drawObj.y = '2';
		    this.drawObj.flag = false;
		    this.drawObj.dot_flag = false;
		    this.drawObj.originX = 0;
		    this.drawObj.originY = 0;
		    this.drawObj.currX = 0;
		    this.drawObj.currY = 0;
		},
		methods:  {
            draw: function() {
                this.ctx.beginPath();
                this.ctx.moveTo(this.drawObj.originX, this.drawObj.originY);
                this.ctx.lineTo(this.drawObj.currX, this.drawObj.currY);
                this.ctx.strokeStyle = this.drawObj.x;
                this.ctx.lineWidth = this.drawObj.y;
                this.ctx.stroke();
                this.ctx.closePath();

                this.lines.forEach(l=>{
                    this.ctx.beginPath();
                    this.ctx.moveTo(l.x1, l.y1);
                    this.ctx.lineTo(l.x2, l.y2);
                    this.ctx.stroke();
                    this.ctx.closePath();
                })
            },
            onMouseUp: function() {
                this.drawObj.flag = false;
                this.lines.push({
                    x1: this.drawObj.originX,
                    y1: this.drawObj.originY,
                    x2: this.drawObj.currX,
                    y2: this.drawObj.currY
                });
            },
            onMouseOut: function() {
                this.drawObj.flag = false;
                
            },
            onMouseMove: function(e) {
                if (this.drawObj.flag) {
                    this.cleanCanvas();
                    this.drawObj.currX = e.clientX - this.canvas.offsetLeft;
                    this.drawObj.currY = e.clientY - this.canvas.offsetTop ;
                    this.draw();
                }
            },
            onMouseDown: function(e) {
                this.drawObj.originX =  e.clientX - this.canvas.offsetLeft;
                this.drawObj.originY = e.clientY - this.canvas.offsetTop;
                this.drawObj.currX = e.clientX - this.canvas.offsetLeft;
                this.drawObj.currY = e.clientY - this.canvas.offsetTop;
                this.drawObj.flag = true;
                this.drawObj.dot_flag = true;
                if (this.drawObj.dot_flag) {
                    this.ctx.beginPath();
                    this.ctx.fillStyle = this.drawObj.x;
                    this.ctx.fillRect(this.drawObj.currX, this.drawObj.currY, 2, 2);
                    this.ctx.closePath();
                    this.drawObj.dot_flag = false;
                }
            },
            cleanCanvas() {
                this.ctx.clearRect(0, 0, this.w, this.h)
            }
            
		},
		mounted: function() {
                this.canvas = document.getElementById('canvas');
                this.ctx = this.canvas.getContext("2d");
                this.w = this.canvas.width;
                this.h =  this.canvas.height;
		}

	}


</script>
<style lang='scss' scoped>

    .container {
        width: 100vw;
        min-height: 100vh;
        overflow: hidden;
        padding: 20px;
    }

    .header__container {
        width:100vw;
        height:50px;
        line-height:50px;
        padding-left:20px;
    }

    .content__container {
        width:100vw;

    }

    .btn__save {
        display:inline-block;
        width:60px;
        height:40px;
        line-height:40px;
        text-align: center;
        font-size:1.1em;
        background-color:steelblue;
        color:white;

    }

    canvas {
        border: 1px solid gainsboro;
    }


</style>