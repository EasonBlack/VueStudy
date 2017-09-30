<template>
    <div class='chart__wrapper'></div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        mounted: function() {
            var myChart = echarts.init(this.$el);
            myChart.setOption({
              tooltip: {},
              series: [{
                name: 'AAA',
                type: 'pie',
                radius: ['30%', '70%'],
                data: [
                  {value:335, name:'直接访问'},
                  {value:310, name:'邮件营销'},
                  {value:234, name:'联盟广告'},
                  {value:135, name:'视频广告'},
                  {value:1548, name:'搜索引擎'}
                ]
              }]
            });
        }
    }
</script>
<style lang='scss' scoped>
    .chart__wrapper {
        width:100%;
        height:100%;
    }
</style>