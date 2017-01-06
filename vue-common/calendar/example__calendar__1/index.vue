<template>
    <div class='calendar__container'>
       <div class='date__container' v-for='i in countDays'>
            {{getDate(i)}}
       </div>
    </div>
</template>

<script>
    import moment from 'moment';
    export default{
        props: ['currentYear','currentMonth'],
        data:function(){
            return {

            }
        },
        created:function() {
            console.log(moment().format('YYYY-MM-DD'));
            console.log(moment().format('d'));
        },
        methods: {
            getDate: function(i) {
                return moment(this.startDate).add(i-1,'days').format('YYYY-MM-DD');
            }
        },
        computed: {
            'startDate': function(){
                let _first = moment({y: this.currentYear, m: this.currentMonth, d:1}).startOf('week').format('YYYY-MM-DD');
                return _first;
            },
            'endDate': function(){
                let monthEnd = moment({y: this.currentYear, m: this.currentMonth, d:1}).endOf('month').format('YYYY-MM-DD');
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