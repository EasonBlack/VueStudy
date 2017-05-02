<template>
    <div class='calendar__container'>
        <div class='calendar__title-section'>
            <span class='calendar__prev'>
                <img src='../../../assets/icons/Back-50.png' v-on:click='prev'  v-if='type=="start"' />
            </span>
            <span class='calendar__title'>{{currentYear + '-' + currentMonth}}</span>
            <span class='calendar__next' >
                <img src='../../../assets/icons/Forward-50.png' v-on:click='next'  v-if='type=="end"'/>
            </span>
        </div>
        <div class='calendar__content-section'>
            <date-div
                    v-for='i in 42'
                    v-on:confirmHandle='confirmHandle'
                    @mouseHandle='mouseHandle'
                    :dateMoment='getDateMoment(i)'
                    :currentMonth='currentMonth'
                    :selectStartDate='selectStartDate'
                    :selectEndDate='selectEndDate'
                    :selectEndMoment='selectEndMoment'>
            </date-div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    import dateDiv from './date.vue';
    export default{
        components: {dateDiv},
        props:['thisCurrent', 'type','selectStartDate', 'selectEndDate', 'selectEndMoment'],  // start or end
        data(){
            return{
                current: this.thisCurrent,
                currentYear: this.thisCurrent.year(),
                currentMonth: this.thisCurrent.format('MM'),
                currentIntMonth :  this.thisCurrent.month(),
            }
        },
        methods: {
            getDateMoment: function(i) {
                return moment(this.startDate).add(i-1,'days');
            },
            prev:function() {
                this.current = this.current.subtract(1,'month');
                this.currentYear = this.current.year();
                this.currentMonth = this.current.format('MM');
                this.currentIntMonth = this.current.month();
            },
            next:function() {
                this.current = this.current.add(1,'month');
                this.currentYear = this.current.year();
                this.currentMonth = this.current.format('MM');
                this.currentIntMonth = this.current.month();
            },
            confirmHandle:function(obj) {
                this.$emit('confirmHandle', obj.date);
            },
            mouseHandle: function(obj){
                if(!this.selectStartDate) return ;
                else {
                    this.$emit('mouseHandle', obj.date);
                }
            }
        },
        computed: {
            'startDate': function() {
                 let _year = this.currentYear;
                 let _month = this.currentIntMonth;
                 return  moment({y: _year, month: _month, d:1}).startOf('week').format('YYYY-MM-DD');
            },
             'endDate': function(){
                 let _year = this.currentYear;
                 let _month =  this.currentIntMonth;
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
        position:relative;
        width:100%;
        padding-bottom: 20px;
        background-color:steelblue;
        z-index:120;

    }

    .calendar__title-section {
        height:30px;
        line-height:30px;
        display:flex;
        .calendar__prev {
            display:flex;
            flex:1;
            img {
                width:25px;
            }
        }
        .calendar__next {
            display:flex;
            flex:1;
            justify-content: flex-end;
            img {
                width:25px;
            }
        }
        .calendar__title {
            display:flex;
            flex:2;
            color:white;
            justify-content: center;
        }
    }
    .calendar__content-section {
        width:100%;
        display:flex;
        position:relative;
        flex-wrap:wrap;
        z-index:10;
    }


</style>
