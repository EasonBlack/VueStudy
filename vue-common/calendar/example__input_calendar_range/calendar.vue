<template>
    <div class='calendar__container'>
        <div class='calendar__title-section'>
            <span class='calendar__prev'>
                <img src='../../../assets/icons/Back-50.png' v-on:click='prev' />
            </span>
            <span class='calendar__title'>{{currentYear + '-' + currentMonth}}</span>
            <span class='calendar__next'>
                <img src='../../../assets/icons/Forward-50.png' v-on:click='next' />
            </span>
        </div>
        <div class='calendar__content-section'>
            <date-div
                    v-for='i in countDays'
                    v-on:confirmHandle='confirmHandle'
                    @mouseHandle='mouseHandle'
                    :dateMoment='getDateMoment(i)'
                    :currentMonth='currentMonth'
                    :selectStartMoment='selectStartMoment'
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
        data(){
            return{
                current: moment(),
                currentYear: moment().year(),
                currentMonth: moment().format('MM'),
                currentIntMonth : moment().month(),
                selectStartMoment: null,
                selectEndMoment: null
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
                if(this.selectStartMoment) {
                    this.selectEndMoment = obj.date;
                } else {
                     this.selectStartMoment = obj.date;
                }
                this.$emit('confirmHandle',{
                    start: this.selectStartMoment,
                    end: this.selectEndMoment
                });
                //if(this.selectStartMoment && this.selectEndMoment) {
                //     this.$emit('confirmHandle',obj);
                //}

            },
            mouseHandle: function(obj){
                if(!this.selectStartMoment) return ;
                else {
                    this.selectEndMoment = obj.date;
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
        position:absolute;
        top:30px;
        left:0;
        width:100%;
        padding-bottom: 20px;
        background-color:steelblue;
        z-index:10;

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
