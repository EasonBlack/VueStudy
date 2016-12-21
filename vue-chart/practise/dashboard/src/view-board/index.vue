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
                <div class='chart__wrapper'
                v-for='c in charts'
                v-bind:class='{
                    "chart__pie-list": c.chartInfo.chart=="pie-list-chart",
                    "chart__flex_1": c.size==1,
                    "chart__flex_2": c.size==0.5,
                    "chart__flex_3": c.size==0.3
                }'
                >
                    <div :is='c.chartInfo.chart'
                         :series='c.data'
                         :categories='c.type'
                         :title='c.title'></div>
                    <div class='close__wrapper' v-on:click='removeChart(c.id)'>
                        <img :src='closeImg' />
                    </div>
                </div>
            </div>
        </div>

        <new-panel :active='newPanelActive' v-on:toggleAddPanel='toggleAddPanel' ></new-panel>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations } from 'vuex'
    import closeImg from 'assets/icons/close.png'
    import newPanel from './new-panel.vue';
    import barChart from '../charts/bar-chart.vue'
    import areaSplineChart from '../charts/area-spline-chart.vue'
    import stackedColumnChart from '../charts/stacked-column-chart.vue'
    import pieListChart from '../charts/pie-list-chart.vue'
    export default{
        components: {newPanel, barChart, areaSplineChart, stackedColumnChart, pieListChart},
        data(){
            return{
                newPanelActive:false,
                charts: [],
                closeImg: closeImg
            }
        },
        created:function(){

        },
        methods: {
            toggleAddPanel:function(v) {
                this.newPanelActive = !!v;
            },
            ...mapMutations({
                removeChart: 'removeChart'
            })
        },
        computed:{
            ...mapState({
                charts: (state) => {
                    return state.charts;
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
        position:relative;

        .close__wrapper {
            z-index:20;
            background-color:lightsteelblue;
            width:30px;
            height:30px;
            position:absolute;
            top:10px;
            right:10px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                width:50%;
                height:50%;
            }
        }
     }
</style>
