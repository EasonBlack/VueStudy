<template>
    <div class='chart__container'></div>
</template>

<script>
    import Highcharts from 'highcharts';
    export default{
        props: ['categories','series', 'title'],
        data(){
            return{
                 target: undefined
            }
        },
        mounted : function() {
            this.target = Highcharts.chart(this.$el, {
                  chart: {
                      type: 'bar'
                  },
                  title: {
                      text:  this.title
                  },
                  xAxis: {
                      categories: [...this.categories]
                  },
                  yAxis: {
                      min: 0,
                      title: {
                          text: 'Total fruit consumption'
                      }
                  },
                  legend: {
                      reversed: true
                  },
                  plotOptions: {
                      series: {
                          stacking: 'normal'
                      }
                  },
                  series: [
                      ...this.series
                  ],
                  credits: {
                      enabled: false
                  }
            });
        },
        beforeDestroy: function() {
            this.target.destroy();
        }
    }


</script>

<style scoped>

</style>
