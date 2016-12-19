<template>
    <div class='chart__container'>

    </div>
</template>

<script>
    import Highcharts from 'highcharts';
    import { mapState, mapGetters } from 'vuex'

    export default{
        props: ['categories','series', 'title', 'width'],
        data(){
            return{
                 target: undefined,
                 opts : {
                     chart: {
                        type: 'areaspline',
                     },
                     title: {
                         text: this.title
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
                 }
            }
        },
        mounted : function() {
            this.target = Highcharts.chart(this.$el, this.opts);
        },
        beforeDestroy: function() {
            this.target.destroy();
        },
        computed: {
             ...mapState({
	  	        count : state=> state.count
		   })
        }
    }




</script>

<style scoped>

</style>
