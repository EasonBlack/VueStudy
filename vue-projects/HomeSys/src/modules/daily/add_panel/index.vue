<template>
    <div class='add-panel__container'>
        <div class='panel__row'>
            <label class='time'>Time:</label>
            <input type='text' v-model='dailyTime'/>
        </div>
        <div class='panel__row'>
            <label class='trophy'>Trophy:</label>
            <input type='text' v-model='dailyTrophy'/>
        </div>
        <div class='panel__row'>
            <label class='comment'>Comment:</label>
            <input type='text' v-model='dailyComment'/>
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
                dailyTrophy: 0,
                dailyComment: ''
            }
        },
        methods: {
            clickHandle: function() {
                this.$emit('clickHandle', {
                    time: this.dailyTime,
                    trophy: this.dailyTrophy,
                    comment: this.dailyComment
                });
                this.dailyTime = 0;
                this.dailyTrophy = 0;
                this.dailyComment = '';
            }
        },

    }
</script>
<style lang='scss' scoped>
     @import 'styles/settings.variable.scss';
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
            width:55px;

        }
        .time {
            color: #{$time_color};
        }
        .trophy {
            color: #{$trophy_color};
        }
        .comment {
            color: #{$comment_color};
            font-size:0.8em;
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