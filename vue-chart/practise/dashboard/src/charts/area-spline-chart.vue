<template>
    <div class='chart__container'></div>
</template>

<script>
    import Highcharts from 'highcharts';
    export default{
          props: ['categories','series'],
        data(){
            return{
                 target: undefined
            }
        },
        mounted : function() {
            this.target = Highcharts.chart(this.$el, {
                  chart: {
                     type: 'areaspline',
                  },
                  title: {
                      text: 'Average fruit consumption during one week'
                  },
                  legend: {
                      layout: 'vertical',
                      align: 'left',
                      verticalAlign: 'top',
                      x: 150,
                      y: 100,
                      floating: true,
                      borderWidth: 1,
                      backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                  },
                  xAxis: {
                      categories: [
                        ...this.categories
                      ],

                  },
                  yAxis: {
                      title: {
                          text: 'Fruit units'
                      }
                  },
                  tooltip: {
                      shared: true,
                      valueSuffix: ' units'
                  },
                  credits: {
                      enabled: false
                  },
                  plotOptions: {
                      areaspline: {
                          fillOpacity: 0.5
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
