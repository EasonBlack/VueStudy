<template>
   <div class='chart-container'></div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        props: ['items', 'current'],
        data(){
            return{
                revChart :null
            }
        },
        watch: {
           'current'(nv) {
               this.createChart();
           }
        },
        mounted() {
            
            this.revChart = echarts.init(this.$el);
            this.createChart = ()=> {
                let _catagroy = [];
                let _values = [];
                this.items.forEach(item=>{
                    _catagroy.push(item.date);
                    _values.push(item.num);
                })
               
                console.log(_catagroy, _values);
                this.revChart.setOption({
                    xAxis: {
                        type: 'category',
                        data: _catagroy
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: _values,
                        type: 'line'
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