<template>
    <div class='container'>
        <div  class='top__wrapper'>
             <a class='button__wrapper' v-on:click='toggleAddPanel(1)'>
                 <img src="~assets/icons/plus_white.png"/>
                 <span>Add a Dataset</span>
             </a>
        </div>
        <div class='content__container'>
            <div class='content__wrapper'>
                <div class='chart__wrapper chart__flex_1'>
                    <bar-chart></bar-chart>
                </div>
                <div class='chart__wrapper chart__flex_1'>
                     <area-spline-chart></area-spline-chart>
                </div>
                <div class='chart__wrapper chart__flex_1'>
                     <stacked-column-chart
                     v-if='monthlyAudit.length'
                     :categories='monthCategories'
                     :series='monthlyAudit'></stacked-column-chart>
                </div>
            </div
        </div>

        <new-panel :active='newPanelActive' v-on:toggleAddPanel='toggleAddPanel' ></new-panel>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import newPanel from './new-panel.vue';
    import barChart from '../charts/bar-chart.vue'
    import areaSplineChart from '../charts/area-spline-chart.vue'
    import stackedColumnChart from '../charts/stacked-column-chart.vue'
    export default{
        components: {newPanel, barChart, areaSplineChart, stackedColumnChart},
        data(){
            return{
                monthCategories: ['Jan','Feb','Mar','Apr','May', 'Jun','Jul','Aug','Sep', 'Oct', 'Nov', 'Dec'],
                newPanelActive:false
            }
        },
        created:function(){
            this.$store.dispatch('fetchMonthlyAudit');
        },
        methods: {
            toggleAddPanel:function(v) {
                this.newPanelActive = !!v;
            }
        },
        computed:{
             ...mapState({
                 monthlyAudit: (state) => {
                    return state.monthlyAudit
                 }
             })
        }

    }
</script>

<style lang='scss' scoped>
    @import "../../styles/_settings.global.scss";
    .container {
        width:100vw;
        height:calc(100vh - #{$headerHeight});
        background-color: $dark-bgc;
        color:white;
        position:relative;
        overflow:hidden;
    }

    .top__wrapper {
        width:100vw;
        height: $headerHeight;
        padding: $left-padding;
    }

    .button__wrapper {
          display: inline-flex;
          align-items: center;
          height:40px;
          line-height:40px;
          padding: 0px 20px;
          background-color: $bgc;
          color:white;

          &:hover {
            background-color: $light-bgc;
          }

          img[src] {
              width:10px;
              height:10px;
              margin-right: 10px;
          }
     }
     .content__container {
        width:100vw;
        height:calc(100% - #{$headerHeight});
        overflow-y:scroll;
     }
     .content__wrapper {
        display:flex;
        flex-wrap:wrap;
     }
     .chart__wrapper  {
        padding:10px;
     }
</style>
