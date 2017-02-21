<template>
    <div class='add-panel__container'>
        <div class='panel__row'>
            <label>Time:</label>
            <input type='text' v-model='dailyTime'/>
        </div>
        <div class='panel__row'>
            <label>Trophy:</label>
            <input type='text' v-model='dailyTrophy'/>
        </div>
        <div class='panel__row'>
            <a class='btn btn__full_width btn__add' @click='clickHandle'>ADD</a>
        </div>
    </div>
</template>
<script>

    export default {

        data() {
            return {
                dailyTime: 0,
                dailyTrophy: 0
            }
        },
        methods: {
            clickHandle: function() {
                this.$emit('clickHandle', {
                    time: this.dailyTime,
                    trophy: this.dailyTrophy
                })
            }
        },

    }
</script>
<style lang='scss' scoped>
    .add-panel__container {
        width:100%;
        border:2px solid steelblue;
        padding:20px 5px;
    }
    .panel__row {
        display:inline-block;
        margin-bottom:10px;
        font-size:0.9em;
        width:100%;
        label {
            display:inline-block;
            width:50px;
        }
        input {
            width:60px;
            height:30px;
            line-height:30px;
        }
        select {
            width:120px;
            height:30px;
        }
    }
</style>