<template>
     <svg width=100% height=100% viewBox='0 0 220 220'>
        <template v-for='(t,index) in data'>
            <path :d='getPath(index)' stroke='steelblue' fill='steelblue' :opacity='0.1 + index * 0.1' >
            </path>
        </template>
        <circle :cx="firstX" :cy="firstY" r="5"  fill="red" />

     </svg>
</template>

<script>
    export default{
        data(){
            return{
                ra: 15,
                step : 10,
                ox: 110,
                oy: 110,
                r: 100,

                data: [
                    {name: 'aaa'},
                    {name: 'aaa'},
                    {name: 'aaa'},
                    {name: 'aaa'}
                ]
            }
        },
        methods: {
            getPath: function(i) {
                console.log(i);
                //"M110, 10  A100, 100, 0, 1, 1, 10, 110"
                let firstX =  110 - (this.r - i*this.step) * Math.sin(this.ra * Math.PI / 180);
                let firstY =  110 - (this.r - i*this.step) * Math.cos(this.ra * Math.PI / 180);
                let startX = (firstX - this.ox) * Math.cos(this.ra * i * Math.PI / 180) - (firstY - this.oy) * Math.sin(this.ra * i * Math.PI / 180) + this.ox;
                let startY = (firstX - this.ox) * Math.sin(this.ra * i * Math.PI / 180) + (firstY - this.oy) * Math.cos(this.ra * i * Math.PI / 180) + this.oy;
                console.log(startX,startY);
                let endX = (firstX - this.ox) * Math.cos((180 + this.ra * i) * Math.PI / 180) - (firstY - this.oy) * Math.sin((180 + this.ra * i) * Math.PI / 180) + this.ox;
                let endY = (firstX - this.ox) * Math.sin((180 + this.ra * i)* Math.PI / 180) + (firstY - this.oy) * Math.cos((180 + this.ra * i) * Math.PI / 180) + this.oy;
                console.log(endX,endY);
                return `M${startX},${startY} A${this.r- i*this.step},${this.r - i*this.step},0,0,0,${endX},${endY} Z`;
            }
        },
        computed: {
            firstX: function() {
                return 110 - this.r * Math.sin(this.ra * Math.PI / 180);
            },
            firstY : function() {
                return 110 - this.r * Math.cos(this.ra * Math.PI / 180);
            }
        }
    }
</script>

<style lang='scss' scoped>

</style>
