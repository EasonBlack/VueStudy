<template>
    <div class='container'>
        <div class='content__container' id='canvas__container' 
            @mousemove='onMouseMove' 
            @mousedown='onMouseDown'
            @mouseup='onMouseUp'
        >
            <canvas id="canvas" width='600' height='500'         
            ></canvas>
            <point  
                v-for='(p,index) in points' :key='index' 
                :top='p.top' :left='p.left' 
                @drawLines='drawLines' 
            />
        </div>
        <button @click='del'>Toggle Delete</button>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import point from './Point.vue';
	export default {
        components: { point },
		data: function() {
            return {
                canvas: '',
                container: null,
                ctx: '',
                w: '',
                h: '',
                offsetLeft: '',
                offsetTop: '',
                drawObj: {},
                points: []
            }
        },
        
		created: function() {
		    this.drawObj.x = 'black';
		    this.drawObj.y = '3';

		    this.drawObj.currX = 0;
            this.drawObj.currY = 0;
            
            this.points = [
                {top: 0,   left: 0},
                {top: 100, left: 100},
                {top: 150, left: 200},
                {top: 350, left: 200},
                {top: 150, left: 350},
            ]

        },
        
		methods:  {

            draw: function() {
               
                this.ctx.beginPath();
                this.ctx.moveTo(this.originX, this.originY);
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

            drawLines() {
                this.cleanCanvas();
                this.lines.forEach(l=>{
                    let angle = Math.atan2(l.y2-l.y1,l.x2-l.x1);
                    this.ctx.beginPath();
                    this.ctx.lineCap="round";
                    this.ctx.moveTo(l.x1, l.y1);
                    this.ctx.lineTo(l.x2, l.y2);
                    this.ctx.moveTo(l.x2-10*Math.cos(angle-Math.PI/6),l.y2-10*Math.sin(angle-Math.PI/6));
                    this.ctx.lineTo(l.x2, l.y2);                   
                    this.ctx.lineTo(l.x2-10*Math.cos(angle+Math.PI/6),l.y2-10*Math.sin(angle+Math.PI/6));
                    this.ctx.stroke();
                    this.ctx.closePath();
                }) 
            },

            onMouseOut: function() {
                console.log('out')
                this.$store.commit('pointClickDownOut');              
            },

            onMouseMove: function(e) {
                if (this.isPointClickDown) {
                    this.cleanCanvas();
                    this.drawObj.currX = e.clientX - this.offsetLeft;
                    this.drawObj.currY = e.clientY - this.offsetTop ;
                    this.draw();
                    // console.log(e.clientX, e.clientY, e.clientX - this.offsetLeft , e.clientY - this.offsetTop);
                }
            },

            onMouseUp(e) {
                this.$store.commit('pointClickDownOut');    
                this.drawLines();
            },

            onMouseDown(e) {
                console.log('canvse mouse down');
            },

            cleanCanvas() {
                this.ctx.clearRect(0, 0, this.w, this.h)
            },

            del() {
                this.$store.commit('setDeleteMode');    
            },

        },
        
		mounted: function() {
            this.canvas = document.getElementById('canvas');
            this.container = document.getElementById('canvas__container');
            this.offsetLeft = this.container.offsetLeft;
            this.offsetTop = this.container.offsetTop;
            this.ctx = this.canvas.getContext("2d");
            this.w = this.canvas.width;
            this.h = this.canvas.height;
        },

        computed: {
            ...mapState({
                isPointClickDown: (state)=> state.pointEvent.isPointClickDown,
                originX: (state)=> state.pointEvent.originX,
                originY: (state)=> state.pointEvent.originY,
                stopX: (state)=> state.pointEvent.stopX,
                stopY: (state)=> state.pointEvent.stopY,
                lines: (state)=> state.pointEvent.lines,
                deletePoints: (state)=> state.pointEvent.deletePoints,
            })
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
        width:600px;
        height:500px;
        position: relative;
        z-index:1;
    }

    canvas {
        border: 1px solid gainsboro;
        //z-index:20;
    }

</style>