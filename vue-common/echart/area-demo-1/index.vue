<template>
    <div class='chart__wrapper'></div>
</template>
<script>
    import echarts from 'echarts'
    import chartMixin from './area-demo-1_mixin.js'
    import {Common} from './common/index'
    export default {
        mixins: [chartMixin],
        data() {
            return {
                data1: [5, 20, 36, 10, 10, 20],
                data2: [3, 12, 22, 13, 13, 21],

            }
        },
        mounted: function() {

            var myChart = echarts.init(this.$el);

            const newFunc = Common.pipe(this.createSeriesDate, this.createSeriesStyle, this.createSeries);
            const _series = newFunc([
               this.data1, this.data2
            ])
            console.log(_series);
             myChart.setOption({
                 title: {
                      text: ''
                  },
                  tooltip: {},
                  legend: {

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
                  series: _series
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