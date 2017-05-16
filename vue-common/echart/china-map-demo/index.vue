<template>
    <div class='chart__wrapper'></div>
</template>
<script>
    import Vue from 'vue';
    import echarts from 'echarts'
    export default {
        mounted() {
            Vue.http.get('../map/china.json').then((chinaJson) => {
                echarts.registerMap('china', chinaJson.body);
                var chart = echarts.init(this.$el);
                chart.setOption({
                    geo:{
                        map: 'china',
                        roam: true,
                        itemStyle: {
                            normal: {
                                areaColor: '#323c48',
                                borderColor: '#404a59'
                            },
                            emphasis: {
                                areaColor: '#2a333d'
                            }
                        }
                    }

                });
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