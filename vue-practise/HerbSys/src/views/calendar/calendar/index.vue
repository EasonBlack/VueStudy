<template>
    <div class='calendar__container'>
       <weekend-div></weekend-div>
       <div class='date__container' v-for='i in countDays'>
            <date-div
            :dateMoment='getDateMoment(i)'
            :dateSource = 'getDateSource(i)'
            :dateNext = 'getNext(i)'
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
                startDate: '',
                endDate: '',
                countDays: ''
            }
        },
        methods: {
            getDateMoment: function(i) {
                return moment(this.startDate).add(i-1,'days');
            },
            getDateSource: function(i) {
                let _d = moment(this.startDate).add(i-1,'days').format('YYYY-MM-DD');
                return this.source.filter((o)=> o.date == _d) || {}
            },
            getNext : function(i) {
                let _d = moment(this.startDate).add(i-1,'days').format('YYYY-MM-DD');
                if(_d < moment().format('YYYY-MM-DD')) {
                    return {}
                }
                return this.source.filter((o)=> o.next == _d) || {}
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