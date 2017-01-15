<template>
    <div class='basic__container'>
        <div class='row'>
            <div class='left'>
                <label>Name</label>
            </div>
            <div class='right'>
                <input type=text />
            </div>
        </div>
        <div class='row'>
            <div class='left'>
                <label>Date</label>
            </div>
            <div class='right'>
                <div class='datepicker__container'>
                    <date-picker></date-picker>
                </div>
            </div>
        </div>
        <div class='row'>
            <div class='left'>
                 <label>Time</label>
            </div>
            <div class='right'>
                <input type=text />
            </div>
         </div>
         <div class='row'>
            <div class='left'>
                <label>Next Time</label>
            </div>
            <div class='right'>
                 <div class='datepicker__container'>
                       <date-picker></date-picker>
                  </div
            </div>
         </div>
    </div>
</template>
<script>
    import datePicker from '../../common/datepicker/index.vue';
    export default {
        components : {datePicker},
        data:function() {
            return {
            }
        }
    }
</script>
<style lang='scss' scoped>
    .basic__container {
        width:100%;
        height:100%;
        border: 1px solid rgba(grey, 0.3);
        position:relative;
        display:flex;
        flex-direction: column;
        .row {
            display:flex;
            width:100%;
            margin-bottom:20px;
            &:first-child {
                margin-top:50px;
            }
            .right {
                flex:2;
                display:flex;
                justify-content:flex-start;
            }
            .datepicker__container {
                 width: 300px;
                 height:40px;
            }
            .left {
                flex:1;
                display:flex;
                justify-content:flex-end;
            }
            label {
                width:100px;
                line-height: 40px;
            }
            input {
                width:300px;
                height:40px;
                line-heihgt:40px;
                outline:medium;
                padding:5px 10px;
            }
        }
    }
</style>