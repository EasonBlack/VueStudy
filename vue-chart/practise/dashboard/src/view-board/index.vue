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
                    <bar-chart
                     v-if='deploymentMrr && deploymentMrr.data.length '
                     :categories='deploymentMrr.type'
                     :series='deploymentMrr.data'
                    >

                    </bar-chart>
                </div>
                <div class='chart__wrapper chart__flex_1'>
                     <area-spline-chart
                     v-if='deploymentEfficiency && deploymentEfficiency.data.length '
                     :categories='deploymentEfficiency.type'
                     :series='deploymentEfficiency.data'
                     >
                     </area-spline-chart>
                </div>
                <div class='chart__wrapper chart__flex_1'>
                     <stacked-column-chart
                     v-if='monthlyAudit && monthlyAudit.data.length '
                     :categories='monthlyAudit.type'
                     :series='monthlyAudit.data'></stacked-column-chart>

                </div>
            </div>
        </div>

        <new-panel :active='newPanelActive' v-on:toggleAddPanel='toggleAddPanel' ></new-panel>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'
    import newPanel from './new-panel.vue';
    import barChart from '../charts/bar-chart.vue'
    import areaSplineChart from '../charts/area-spline-chart.vue'
    import stackedColumnChart from '../charts/stacked-column-chart.vue'
    export default{
        components: {newPanel, barChart, areaSplineChart, stackedColumnChart},
        data(){
            return{
                newPanelActive:false
            }
        },
        created:function(){
            this.$store.dispatch('fetchMonthlyAudit');
            this.$store.dispatch('fetchDeploymentEfficiency');
            this.$store.dispatch('fetchDeploymentMrr');
        },
        methods: {
            toggleAddPanel:function(v) {
                this.newPanelActive = !!v;
            }
        },
        computed:{
           ...mapGetters({
	  	        monthlyAudit : 'monthlyAudit',
	  	        deploymentEfficiency: 'deploymentEfficiency',
	  	        deploymentMrr: 'deploymentMrr'
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
