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
                             type: 'column'
                         },
                         title: {
                             text: this.title
                         },
                         xAxis: {
                             categories: [
                                ...this.categories
                             ]
                         },
                         yAxis: {
                             min: 0,
                             title: {
                                 text: 'Total fruit consumption'
                             },
                             stackLabels: {
                                 enabled: true,
                                 style: {
                                     fontWeight: 'bold',
                                     color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                                 }
                             }
                         },
                         legend: {
                             align: 'right',
                             x: -30,
                             verticalAlign: 'top',
                             y: 25,
                             floating: true,
                             backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                             borderColor: '#CCC',
                             borderWidth: 1,
                             shadow: false
                         },
                         tooltip: {
                             headerFormat: '<b>{point.x}</b><br/>',
                             pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
                         },
                         plotOptions: {
                             column: {
                                 stacking: 'normal',
                                 dataLabels: {
                                     enabled: true,
                                     color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                                 }
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
