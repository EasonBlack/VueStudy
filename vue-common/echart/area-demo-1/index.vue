<template>
    <div class='chart__wrapper'></div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        mounted: function() {
            var myChart = echarts.init(this.$el);
             myChart.setOption({
                 title: {
                      text: ''
                  },
                  tooltip: {},
                  legend: {
                      data:['销量']
                  },
                  xAxis: {
                      data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
                      axisLine: {
                        show: false
                      },
                      axisTick: {
                        show: false
                      },
                      boundaryGap: false

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
                      name: 'bb',
                      type: 'line',
                      smooth:true,
                      areaStyle: {normal: {}},
                      data: [5, 20, 36, 10, 10, 20],
                      showSymbol: false,
                      lineStyle: {
                        normal: {
                            width:5
                        }
                      },
                      itemStyle: {
                          normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                              offset: 0, color: '#D57774' // 0% 处的颜色
                            }, {
                              offset: 1, color: 'white'// 100% 处的颜色
                            }], false),
                            barBorderRadius:[10, 10, 10, 10],

                        }
                      }
                  },
                  {
                      name: 'aa',
                      type: 'line',
                      smooth:true,
                      areaStyle: {normal: {}},
                      data: [3, 12, 22, 13, 13, 21],
                      itemStyle: {
                          normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                              offset: 0, color: '#AA9177' // 0% 处的颜色
                            }, {
                              offset: 1, color: 'white'// 100% 处的颜色
                            }], false),
                            barBorderRadius:[10, 10, 10, 10],

                        }
                      }
                  }]
             });
        }
    }
</script>
<style lang='scss' scoped>
    .chart__wrapper {
        width:100%;
        height:100%;
    }
</style>