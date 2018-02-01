<template>
   <div class='chart-container'></div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        props: ['items', 'current'],
        data(){
            return{
                revChart :null
            }
        },
        watch: {
            current(nv) {
               this.createChart();
            }
        },
        mounted() {
            this.revChart = echarts.init(this.$el);
            this.createChart = ()=> {
                let _catagroy = [];
                let _num = [];
                let _value = [];
                let _alert = [];
                this.items.forEach(item=>{
                    _catagroy.push(item.date);
                    _num.push(item.num + 10);
                    _value.push(item.value);
                    _alert.push(item.num + 10 > item.value ? null : item.value);

                })
                this.revChart.setOption({
                    backgroundColor: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0.3, color: 'AliceBlue'
                        }, {
                            offset: 1, color: 'white' 
                        }],
                       
                    },        
                    xAxis: {
                        type: 'category',
                        data: _catagroy
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: 'alert',
                            type: 'bar',
                            barGap: 0,
                            data: _alert,
                            itemStyle: {
                                normal: {
                                    color: 'white',
                                    borderWidth: 3,
                                    borderColor: 'red'
                                }
                                
                            }
                        },
                        {
                            name: 'AA',
                            type: 'bar',
                            barGap:0,
                            data: _num,
                            itemStyle: {
                                normal: {
                                    color: 'blue',
                                    opacity : 0.3
                                },
                                
                            }
                        },
                        {
                            name: 'BB',
                            type: 'bar',
                            barGap: '-100%',
                            data: _value,
                            itemStyle: {
                                normal: {
                                    color: 'green',
                                    opacity : 0.7
                                },
                                
                            } 
                        }, 
                        
                    ]
                });
            }
            this.createChart();
            
        }
    }
</script>
<style lang='scss' scoped>
    .chart-container {
        width:100%;
        height:400px;
    }
</style>