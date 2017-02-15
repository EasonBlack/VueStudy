<template>
    <div class='chart__wrapper'>
        <div  class="active-border"
        :style="{
            'background-image': 'linear-gradient('+radio +'deg, transparent 50%, #A2ECFB 50%), linear-gradient(90deg, #A2ECFB 50%, transparent 50%)'
        }">
              <div  class="circle">
                  {{num}}%
              </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['num'],
        computed: {
            radio: function() {
                return 90 + 360 * (this.num/100);
            }
        }
    }
</script>
<style lang='scss' scoped>
    .chart__wrapper {
        width:100%;
        height:100%;
        margin: auto;
    }
    .prec{
        display:flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        position: relative;
        font-size: 30px;
    }
    .circle{
        position: relative;
        top: 5%;
        left: 5%;
        text-align: center;
        width: 90%;
        height: 90%;
        border-radius: 100%;
        background-color: #E6F4F7;
        display:flex;
        justify-content: center;
        align-items:center;
        font-size: 2em;
    }

    .active-border{
        position: relative;
        text-align: center;
        width: 100%;
        height: 100%;
        border-radius: 100%;
        background-color:#39B4CC;
    }
</style>