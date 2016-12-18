<template>
    <div class='container'>
        <div  class='top__wrapper'>
             <a class='button__wrapper' v-on:click='toggleAddPanel(1)'>
                 <img src="~assets/icons/plus_white.png"/>
                 <span>Add a Dataset</span>
             </a>
        </div>
        <div class='content__wrapper'>
            This is board
        </div>
        <new-panel :active='newPanelActive' v-on:toggleAddPanel='toggleAddPanel' ></new-panel>
    </div>
</template>

<script>
    import newPanel from './new-panel.vue';
    export default{
        components: {newPanel},
        data(){
            return{
                newPanelActive:false
            }
        },
        methods: {
            toggleAddPanel:function(v) {
                this.newPanelActive = !!v;
            }
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

     .content__wrapper {
        padding:$left-padding;
     }
</style>
