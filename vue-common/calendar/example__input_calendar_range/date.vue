<template>
    <div class='date__container'
         @mousemove='mouseHandle'
         v-on:click='confirmHandle'
         v-bind:class="{
                notcurrent: !isCurrentMonth,
                select: selectStartMoment == fulldate || selectEndMoment == fulldate,
                middle: fulldate>selectStartMoment && fulldate< selectEndMoment
             }">
        {{date}}
    </div>
</template>

<script>
    import moment from 'moment';
    export default {
        props: ['dateMoment', 'currentMonth', 'selectStartMoment', 'selectEndMoment'],
        data: function(){
            return {}
        },
        methods: {
            confirmHandle: function() {
                this.$emit('confirmHandle', {date: this.dateMoment.format('YYYY-MM-DD')});
            },
            mouseHandle: function() {
                this.$emit('mouseHandle', {date: this.dateMoment.format('YYYY-MM-DD')});
            }
        },
        computed: {
            'fulldate': function() {
                return this.dateMoment.format('YYYY-MM-DD')
            },
            'date': function() {
                if(!this.dateMoment) {
                    return '';
                }
                return this.dateMoment.date();
            },
            'isCurrentMonth':function() {
                if(!this.dateMoment) {
                    return false;
                }
                return this.dateMoment.format('MM') == this.currentMonth;
            }
        }
    }
</script>

<style lang='scss' scoped>
    .date__container {
        flex: 1 0 14%;
        display:flex;
        flex-direction:column;
        border-bottom: 1px solid rgba(grey, 0.5);
        border-right: 1px solid rgba(grey, 0.5);
        height: 30px;
        position:relative;
        background-color:white;
        color:black;
        justify-content: center;
        align-items: center;
        &:hover {
            background-color: rgba(steelblue, 0.3);
            color:white;
        }
        &.notcurrent {
            color:grey;
        }
        &.select {
            background-color: rgba(steelblue, 0.9);
        }
        &.middle {
             background-color: rgba(#20A0FF, 0.5);
             color: white;
        }
    }
</style>