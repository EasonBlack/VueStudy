<template>
    <div class='calendar__container'>
       <weekend-div></weekend-div>
       <div class='date__container' v-for='i in countDays'>
            <date-div
            :dateMoment='getDateMoment(i)'
            :dateSource = 'getDateSource(i)'
            @daily-click='dailyClick'
            :currentMonth='currentMonth'></date-div>
       </div>
    </div>
</template>

<script>
    import moment from 'moment';
    import dateDiv from './date.vue';
    import weekendDiv from './weekend.vue';
    export default{
        components: {dateDiv, weekendDiv},
        props: ['currentYear','currentMonth', 'source'],
        data:function(){
            return {
            }
        },
        methods: {
            getDateMoment: function(i) {
                return moment(this.startDate).add(i-1,'days');
            },
            getDateSource: function(i) {
                let _d = moment(this.startDate).add(i-1,'days').format('YYYY-MM-DD');
                return this.source.find((o)=> o.date == _d) || {}
            },
            dailyClick: function(date){
                this.$emit('daily-click', date)
            }
        },

        computed: {
             'startDate': function(){
                 let _year = this.currentYear;
                 let _month = this.currentMonth;
                 return  moment({y: _year, month: _month, d:1}).startOf('week').format('YYYY-MM-DD');
             },
             'endDate': function(){
                 let _year = this.currentYear;
                 let _month = this.currentMonth;
                 let monthEnd = moment({y: _year, month: _month, d:1}).endOf('month').format('YYYY-MM-DD');
                 let _end = moment(monthEnd).endOf('week').format('YYYY-MM-DD');
                 return _end;
             },
             'countDays': function() {
                 let _end = moment(this.endDate);
                 let _start = moment(this.startDate);
                 return _end.diff(_start, 'days') + 1;
             }
         }
    }
</script>

<style lang='scss' scoped>
    .calendar__container {
        display:flex;
        flex-wrap:wrap;
    }
    .date__container {
        flex: 1 0 14%;
    }
</style>