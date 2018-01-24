<template>
    <div class='chart__wrapper'></div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        props: ['data'],
        watch: {
            'data': function(nv) {
                this.drawChart();
            }
        },
        mounted: function() {
            this.myChart = echarts.init(this.$el);
            this.drawChart = () => {
                let xKeys = Object.keys(this.data);
                let yValues = Object.values(this.data);
            
                let emptyOption = {
                    title: {
                        text: "No Data Available",
                        left: 'center',
                        top: 'center'
                    },
                    xAxis: {
                        show: false
                    },
                    yAxis: {
                        show: false
                    },
                    series: []
                };

                let dataOption = {
                    title: {
                        text: ''
                    },
                    tooltip: {},
                    legend: {
                        data:['销量']
                    },
                    xAxis: {
                        data: xKeys,
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },

                    },
                    yAxis: {
                        name: 'ug/m',
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            lineStyle: {
                                type: 'dashed'
                            }
                        }
                    },
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: yValues
                    }]
                }
           
                if(xKeys.length == 0) {
                    this.myChart.clear();
                    this.myChart.setOption(emptyOption);
                } else {
                    if(this.myChart.getOption() && !this.myChart.getOption().series.length) {
                        this.myChart.clear();
                    }
                    this.myChart.setOption(dataOption);
                }
               
            }
            this.drawChart();
            
        }
    }
</script>
<style lang='scss' scoped>
    .chart__wrapper {
        width:100%;
        height:100%;
    }
</style>