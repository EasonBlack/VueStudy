<template>
    <div class='chart__wrapper'></div>
</template>

<script>
    import echarts from 'echarts';
    export default{
        props: ['items','types'],
        data(){
            return{
                myChart :null
            }
        },
        watch: {
            'items': function() {
                this.createChart();
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
                          }
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
                              type:'bar',
                              data: seriesTime
                          },
                          {
                              name: 'trophy',
                              type:'bar',
                              data: seriesTrophy
                          }
                      ]
                  });

              }

        }

    }
</script>

<style lang='scss' scoped>
    .chart__wrapper {
        width:100%;
        height:100%;
    }
</style>
