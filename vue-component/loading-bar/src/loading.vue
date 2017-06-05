<template>
    <div class='loading-bar-mask' v-if='isFinish'>
        <div class='loading-bar-wrapper'>
            <div class='loading-bar' :style='{
                width: loadingWidth + "px"
            }'></div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                loadingWidth : 0,
                isFinish: true
            }
        },
        created() {
            this.updateLoading = ()=> {
                setTimeout(()=>{
                    let r = Math.random()*10 + 50;
                    this.loadingWidth += ~~r;
                    this.loadingWidth = this.loadingWidth>200 ? 200: this.loadingWidth
                    console.log(this.loadingWidth);
                },1000)
            }
        },
        watch:{
            'loadingWidth': function(nv) {
                if(nv<200) {
                    this.updateLoading();
                } else {
                    this.isFinish = false;
                    this.$forceUpdate();
                }
            }
        },
        mounted() {
            this.updateLoading();
        }
    }
</script>
<style lang='scss' scoped>
    .loading-bar-mask {
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background-color:white;
        display:flex;
        justify-content:center;
    }
    .loading-bar-wrapper {
        position:absolute;
        width:200px;
        height:10px;
        top:50%;
        background-color: grey;
        padding:1px 0px;
        box-sizing:border-box;
    }
    .loading-bar {
        position:relative;
        display:block;
        width:0px;
        height:8px;
        transition: width 0.3s ease;
        background-color: steelblue;
    }
</style>