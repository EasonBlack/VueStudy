<template>
    <div class='m__container'>
        <span class='input__wrapper'>
            <input type='text' v-on:click='toggleCalendar' :value='selectDate' />
        </span>
        <div class='calender__section'>
            <div class='start-calendar__section'>
                <calendar v-if='showCalendar' v-on:confirmHandle='confirmHandle' :type='"start"'
                    :selectStartDate='selectStartDate' :selectEndDate='selectEndDate' :selectEndMoment='selectEndMoment'
                    :thisCurrent='current' @mouseHandle='mouseHandle'
                ></calendar>
            </div>
            <div class='end-calendar__section'>
                <calendar v-if='showCalendar' v-on:confirmHandle='confirmHandle' :type='"end"'
                    :selectStartDate='selectStartDate' :selectEndDate='selectEndDate' :selectEndMoment='selectEndMoment'
                     :thisCurrent='currentNext'  @mouseHandle='mouseHandle'
                ></calendar>
            </div>
        </div>
    </div>
</template>

<script>
    import calendar from './calendar.vue';
    import moment from 'moment';
    export default{
        components: {calendar},
        data(){
            return{
                current: moment(),
                currentNext: moment().add(1,'month'),
                showCalendar: false,
                startMonth: '',
                endMonth: '',
                selectStartDate: '',
                selectEndDate: '',
                selectEndMoment: '',
            }
        },
        methods: {
            toggleCalendar:function() {
                this.showCalendar = !this.showCalendar;
            },
            confirmHandle: function(obj) {
                if(this.selectStartDate && this.selectEndDate) {
                    this.selectEndDate = '';
                    this.selectStartDate = '';
                    this.selectEndMoment = '';
                    return ;
                }
                if(!this.selectStartDate) {
                    this.selectStartDate = obj;
                } else {
                    if(obj > this.selectStartDate) {
                        this.selectEndDate = obj;
                    }
                }
            },
            mouseHandle: function(obj){
                this.selectEndMoment = obj;
            }
        },
        computed: {
            selectDate() {
                if(this.selectStartDate && this.selectEndDate) {
                    return  this.selectStartDate + ' ~ ' + this.selectEndDate
                } else {
                    return '';
                }
            }
        }
    }
</script>

<style scoped lang='scss'>
    .m__container {
        width:210px;
        position:relative;
        z-index:120;
        .input__wrapper {
            width:100%;
            position:relative;
            display:inline-block;
            height:30px;
            &:after {
                content: '';
                position: absolute;
                right: 5px;
                top: 2px;
                background-image: url(../../../assets/icons/Calendar-50.png);
                background-repeat: no-repeat;
                background-size: contain;
                width: 25px;
                height: 25px;
            }
        }
        input {
            width:100%;
            height:30px;
            line-height:30px;
            padding:5px 25px 5px 15px;
            outline:medium;
            display:inline-block;
            position:relative;
        }
        .calender__section {

        }
        .start-calendar__section {
             position:absolute;
             width:210px;
             top:30px;
             left:0;
        }
        .end-calendar__section {
             position:absolute;
             width:210px;
             top:30px;
             left:210px;
        }
    }
</style>
