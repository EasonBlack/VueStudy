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
                  var seriesData = this.items.map(o=> {
                        return {
                            value: o.time,
                            name: o.name
                        }
                  });
                  this.myChart.setOption({
                      title: {
                           text: ''
                       },
                       tooltip: {},
                       legend: {

                       },
                       series: [{
                            type:'pie',
                            radius : [30, 110],
                            labelLine : {
                                normal: {
                                    show: true,
                                    length:3,
                                    length2:3
                                }
                            },

                            center : ['50%', '50%'],
                            roseType : 'area',
                            data: seriesData
                       }]
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
