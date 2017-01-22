<template>
    <div class='body__container'>
         <canvas id="canvas" width='600' height='600'
          @mouseup='onMouseUp' @mouseout="onMouseOut"
          @mousemove='onMouseMove' @mousedown="onMouseDown"
         ></canvas>
    </div>
</template>

<script>
    import imgObj1 from '../../assets/01.png';
    import imgObj2 from '../../assets/02.png';
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
                let image1 = new Image();
                let image2 = new Image();
                image1.src = imgObj1;
                image2.src = imgObj2;
                image1.onload = ()=> {
                    this.ctx.drawImage(image1, 0, 0,300,600);
                };
                image2.onload = ()=> {
                    this.ctx.drawImage(image2, 300, 0, 300,600, );
                };
		}


    }
</script>

<style lang='scss' scoped>
</style>