<template>
    <div class='container'>
        <div class='header__container'>
            <a class='btn__save' @click='save'>Save</a>
        </div>
        <div class='content__container'>
            <canvas id="canvas" width='600' height='600'
                    @mouseup='onMouseUp' @mouseout="onMouseOut"
                    @mousemove='onMouseMove' @mousedown="onMouseDown"
            ></canvas>
            <img id='cloneCanvas' />
        </div>

    </div>
</template>

<script>
    import imgObj from '../../../assets/400_400_1.png';

	export default {

		data: function() {
            return {
                 canvas: '',
                 ctx: '',
                 w: '',
                 h: '',
                 drawObj: {}
            }
		},
		created: function() {
		    this.drawObj.x='black';
		    this.drawObj.y = '2';
		    this.drawObj.flag = false;
		    this.drawObj.dot_flag = false;
		    this.drawObj.prevX = 0;
		    this.drawObj.prevY = 0;
		    this.drawObj.currX = 0;
		    this.drawObj.currY = 0;
		},
		methods:  {
            draw: function() {
                this.ctx.beginPath();
                this.ctx.moveTo(this.drawObj.prevX, this.drawObj.prevY);
                this.ctx.lineTo(this.drawObj.currX, this.drawObj.currY);
                this.ctx.strokeStyle = this.drawObj.x;
                this.ctx.lineWidth = this.drawObj.y;
                this.ctx.stroke();
                this.ctx.closePath();
            },
            onMouseUp: function() {
                this.drawObj.flag = false;
            },
            onMouseOut: function() {
                this.drawObj.flag = false;
            },
            onMouseMove: function(e) {
                if (this.drawObj.flag) {
                    this.drawObj.prevX = this.drawObj.currX;
                    this.drawObj.prevY = this.drawObj.currY;
                    this.drawObj.currX = e.clientX - this.canvas.offsetLeft;
                    this.drawObj.currY = e.clientY - this.canvas.offsetTop ;
                    this.draw();
                }
            },
            onMouseDown: function(e) {
                this.drawObj.prevX = this.drawObj.currX;
                this.drawObj.prevY = this.drawObj.currY;
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
            save: function() {
                let dataURL = this.canvas.toDataURL();
                document.getElementById("cloneCanvas").src = dataURL;
            }
		},
		mounted: function() {
                this.canvas = document.getElementById('canvas');
                this.ctx = this.canvas.getContext("2d");
                this.w = this.canvas.width;
                this.h =  this.canvas.height;
                let image = new Image();
                image.onload = ()=> {
                    this.ctx.drawImage(image, 0, 0,600,600);
                };
                image.src = imgObj;
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