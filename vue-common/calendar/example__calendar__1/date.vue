<template>
    <div class='date__container'>
        <div class='title__section'
            @click='handleDailyClick'
             v-bind:class="{
                notcurrent: !isCurrentMonth
             }"
            >{{date}}</div>
        <div class='content__section' @click='activeContent'
            v-bind:class='{
                active: active
            }'
        >
            <event-div v-for='event in dateSource.events' :event='event'></event-div>
        </div>
    </div>
</template>
<script>
    import moment from 'moment';
    import eventDiv from './event.vue';

    export default {
        props: ['dateMoment', 'currentMonth', 'dateSource'],
        components: {eventDiv},
        data: function(){
            return {
                active: false
            }
        },
        methods: {
            activeContent: function() {
                this.active = !this.active;
            },
            handleDailyClick: function() {
                this.$emit('daily-click', moment(this.dateMoment).format('YYYY-MM-DD'));
            }
        },
        computed: {
            'date': function() {
                return this.dateMoment.date();
            },
            'isCurrentMonth':function() {
                return this.dateMoment.month() == this.currentMonth;
            }
        }
    }
</script>
<style lang='scss' scoped>
    .date__container {
        display:flex;
        flex-direction:column;
        border-bottom: 1px solid rgba(grey, 0.5);
        border-right: 1px solid rgba(grey, 0.5);
        height:100px;
        position:relative;
    }
    .title__section {
        height:30px;
        line-height:30px;
        padding:0 10px;
        font-size:1em;
        background-color: rgba(grey,0.3);

        &.notcurrent {
            color:white;
        }
    }
    .content__section {
        flex:1;
        position:relative;
        width:100%;
        padding:10px 10px;
        box-sizing: border-box;
        overflow:auto;
        &.active {
           background-color: white;
           overflow: inherit;
           z-index: 111;
           white-space: nowrap;
           white-space: no=wrap;
           width: auto;
           position: absolute;
           top: 30px;
           left: 0px;
         }
    }
</style>