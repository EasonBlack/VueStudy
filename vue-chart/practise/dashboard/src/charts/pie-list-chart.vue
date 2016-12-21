<template>
    <div class='chart__container'>
        <ul class='pie__list_nav'>
            <li v-for='c in categories'
                v-on:click='selectCategories(c)'
            >{{c}}</li>
        </ul>
        <div ref='chart' class='pie-chart__container'></div>
    </div>
</template>

<script>
    import Highcharts from 'highcharts';
    export default{
        props: ['categories','series', 'title'],
        data(){
            return{
                 target: undefined,
                 index: 0
            }
        },
        methods: {
            selectCategories:function(c) {
                let _index = this.categories.indexOf(c);
                this.index = _index;
                console.log(this.target.series);
                this.target.setSubtitle({text: c});
                this.target.series[0].remove(true);
                this.target.addSeries({data: this.pieSeries},true);
                this.target.redraw();
            }
        },
        mounted : function() {
            this.target = Highcharts.chart(this.$refs.chart, {
                  chart: {
                       plotBackgroundColor: null,
                       plotBorderWidth: null,
                       plotShadow: false,
                       type: 'pie'
                  },
                  title: {
                      text: this.title
                  },
                  subtitle: {
                      text: this.subtitle
                  },
                  legend: {
                      reversed: true
                  },
                  plotOptions: {
                      pie: {
                          allowPointSelect: true,
                          cursor: 'pointer',
                          dataLabels: {
                              enabled: false
                          },
                          showInLegend: true
                      }
                  },
                  series: [
                     {
                        data: [...this.pieSeries]
                     }
                  ],
                  credits: {
                      enabled: false
                  }
            });
        },
        computed: {
            pieSeries: function() {
                let result = this.series.map((item)=> {
                   return {
                        name: item.name,
                        y: item.data[this.index]
                   }
                })
                return result;
            },
            subtitle:function() {
                return this.categories[this.index]
            }
        },
        beforeDestroy: function() {
            this.target.destroy();
        }
    }
</script>


<style lang='scss' scoped>
    .pie__list_nav {
        list-style:none;
        display:flex;
        height:40px;
        li {
            flex:1
        }
    }

    .pie-chart__container {
        width:100%;
        height:calc(100% - 40px);
    }
</style>
