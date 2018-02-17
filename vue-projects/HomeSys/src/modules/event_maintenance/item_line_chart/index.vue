<template>
    <div class='chart__wrapper'></div>
</template>
<script>
    import echarts from 'echarts';
    export default {
        props: ['items', 'date'],
        data(){
            return{
                myChart :null
            }
        },
        mounted: function() {
              this.myChart = echarts.init(this.$el);

              this.createChart = ()=> {
                  var seriesTime = this.items.map(o=> {
                        return o.time
                  });
                  var seriesTrophy = this.items.map(o=> {
                       return o.trophy
                  });
                  this.myChart.setOption({

                      tooltip : {
                        trigger: 'axis',
                        axisPointer : {
                            type : 'shadow'
                        },
                      },
                      grid: {
                          left: '3%',
                          right: '4%',
                          bottom: '3%',
                          containLabel: true
                      },
                      xAxis : [
                          {
                              type : 'category',
                              data : this.types,
                              axisTick: {
                                  alignWithLabel: true
                              }
                          }
                      ],
                      yAxis : [
                          {
                              type : 'value'
                          }
                      ],
                      series : [
                          {
                              name: 'time',
                              type:'line',
                              data: seriesTime
                          },
                      ]
                  });

              }

        }
    }
</script>
<style lang='scss' scoped>
</style>