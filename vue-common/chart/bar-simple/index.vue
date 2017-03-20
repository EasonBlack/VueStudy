<template>
    <div class='chart-wrapper'>
        <svg height="100%" width="100%" viewBox="0 0 300 300">
            <g transform="translate(20,20)">


                <g>
                    <g  v-for='sy in scaleY'
                        :transform="'translate(0, ' + recodeY()(sy)+ ')'"
                    >
                        <text
                              x='0'
                              y = "0"
                              text-anchor="middle"
                        >
                            {{sy}}
                        </text>
                        <line stroke="#777" opacity="0.3" x1='0' x2="260" y1="0.5" y2="0.5">
                        </line>
                    </g>
                </g>

                <g transform='translate(0, 280)'>
                    <text v-for='(t, index) in types'
                          y="0"
                          :x="recodeX()(index + 1)"
                          text-anchor="middle" >{{t}}</text>
                </g>

                <g >
                    <rect v-for='(t, index) in types'
                          fill='steelblue'
                          :x="recodeX()(index + 1) -15"
                          :y=' recodeY()(items[index])'
                          width="30"
                          :height="260-recodeY()(items[index])"
                    ></rect>
                </g>
            </g>
        </svg>
    </div>
</template>

<script>
    import * as d3 from "d3";
    export default{
        data(){
            return{
                types: ['aa', 'bb', 'cc', 'dd'],
                items: [10,33,22,18],
                itemMax : 40,
                scaleY: [],
                scaleCount: 5,
            }
        },
        created: function() {
            this.scaleY = new Array(this.scaleCount + 1).fill({}).map((o,i)=> {
                return (i) * this.itemMax/ this.scaleCount
            })
        },
        methods: {
            recodeX : function() {
                 return d3.scaleLinear()
                   .domain([1, this.types.length])
                   .range([40,240])
            },
            recodeY: function() {
                return d3.scaleLinear()
                   .domain([this.itemMax, 0])
                   .range([0,260])
            }
        }
    }
</script>

<style lang='scss' scoped>
    .chart-wrapper {
        width:100%;
        height:100%;
        position:relative;

    }
</style>
