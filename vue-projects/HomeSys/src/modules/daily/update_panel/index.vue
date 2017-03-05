<template>
    <div class='update-panel__container'>
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
            <a class='btn  btn__add ' @click='updateHandle'>Update</a>
            <a class='btn  btn__cancel' @click='cancelHandle'>Cancel</a>
        </div>
    </div>
</template>

<script>

    export default{
        props: ['item'],
        data(){
            return{
                dailyTime: 0,
                dailyTrophy: 0,
                dailyComment: ''
            }
        },
        watch: {
            'item': function() {
                 this.dailyTime = this.item.time;
                 this.dailyTrophy = this.item.trophy;
                 this.dailyComment = this.item.comment;
            }
        },
        methods: {
            updateHandle: function() {
                this.$emit('updateHandle', {
                    id: this.item.id,
                    date: this.item.date,
                    time: this.dailyTime,
                    trophy: this.dailyTrophy,
                    comment: this.dailyComment
                });
            },
            cancelHandle: function() {
                this.$emit('updateCancel')
            }
        },
        mounted: function() {
            this.dailyTime = this.item.time;
            this.dailyTrophy = this.item.trophy;
            this.dailyComment = this.item.comment;
        }

    }
</script>

<style lang='scss' scoped>
 @import 'styles/settings.variable.scss';
    .update-panel__container {
        position:absolute;
        top: 230px;
        left: 190px;
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
