<template>
    <div class='chart-container'></div>
</template>

<script>
import echarts from "echarts";
export default {
  props: ["items", "current"],
  data() {
    return {
      revChart: null
    };
  },
  mounted() {
    this.revChart = echarts.init(this.$el);
    this.createChart = () => {
      this.revChart.setOption({
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          }
        ]
      });
    };
    this.createChart();
  }
};
</script>

<style lang='scss' scoped>
    .chart-container {
        width:100%;
        height:400px;
    }
</style>