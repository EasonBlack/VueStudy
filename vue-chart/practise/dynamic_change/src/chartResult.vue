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
                    _alert.push(item.num + 10 > item.value ? 0 : item.value);

                })
                this.revChart.setOption({
                                  
                    xAxis: {
                        type: 'category',
                        data: _catagroy
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
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
                        {
                            name: 'alert',
                            type: 'bar',
                            barGap: '-100%',
                            data: _alert,
                            itemSytle: {
                                color: 'yellow'
                            }
                        }
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