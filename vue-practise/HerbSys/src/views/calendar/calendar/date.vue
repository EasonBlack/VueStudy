<template>
    <div class='date__container'>
        <div class='title__section'
             v-bind:class="{
                notcurrent: !isCurrentMonth
             }"
            >
            {{date}}
            <span v-if='dateSource.length > 3 || dateNext.length > 3' @click='toggleAllEvents'>...</span>
        </div>
        <div class='content__section'
            v-bind:class="{
                expand: showAll
            }">
            <event-div v-for='event in dateSource' :event='event' :type='"event"'></event-div>
            <event-div v-for='next in dateNext' :event='next' :type='"next"'></event-div>
        </div>
    </div>
</template>
<script>
    import moment from 'moment';
    import eventDiv from './event.vue';

    export default {
        props: ['dateMoment', 'currentMonth', 'dateSource', 'dateNext'],
        components: {eventDiv},
        data: function(){
            return {
                showAll: false
            }
        },
        methods: {
            toggleAllEvents: function() {
                this.showAll = !this.showAll;
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
        overflow:hidden;
        background-color:white;
        &.expand {
            overflow:initial;
            z-index:100;
        }
    }
</style>