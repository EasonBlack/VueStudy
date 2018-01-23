<template>
    <div class='chart-container'></div>
</template>
<script>
    import echarts from 'echarts';
    export default {
        data(){
            return{
                revChart :null
            }
        },
        watch: {
           
        },
        mounted() {
            this.revChart = echarts.init(this.$el);
            this.createChart = ()=> {
                this.revChart.setOption({
                    grid: {
                        top: '5%',
                        bottom: '20%'
                    },
                    tooltip: {},
                    legend: {
                        bottom: '5%',
                        data:['销量']
                    },
                    xAxis: {
                        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                });
            }
            this.createChart();
            
        }
    }
</script>
<style lang='scss' scoped>
    .chart-container {
        width:100%;
        height:400px;
    }
</style>