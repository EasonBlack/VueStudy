<template>
    <div>
        <div class='calendar__header'>
           <div class='left__section'>
                <div class='flex__left'>
                     <a class='calendar__prev icon-left-open' @click='prev'></a>
                </div>
                <div class='flex__center'>
                    {{this.current.format('YYYY-MM')}}
                </div>
                <div class='flex__right'>
                    <a class='calendar__next icon-right-open' @click='next'></a>
                </div>
            </div>
        </div>
        <example-calendar
                :currentYear='currentYear'
                :currentMonth='currentMonth'
                :source='source'></example-calendar>
    </div>
</template>

<script>
    import moment from 'moment';
    import exampleCalendar from 'common/calendar/example__calendar__1/index.vue';
    export default{
        components: {exampleCalendar},
        data(){
            return{
                current: moment().startOf('month'),
                currentMonth: moment().month(),
                currentYear: moment().year(),
                source: []
            }
        },
         methods: {
             prev: function() {
                 this.current =this.current.subtract(1, 'months');
                 this.currentMonth = this.current.month();
                 this.currentYear = this.current.year();
             },
             next: function() {
                 this.current = this.current.add(1, 'months');
                 this.currentMonth = this.current.month();
                 this.currentYear = this.current.year();
             },
         },
    }
</script>

<style lang='scss' scoped>
    .calendar__header {
        height:60px;
        position:relative;
        .left__section {
            height:100%;
            width:300px;
            display:flex;
            align-items:center;
            padding:0 10px;

            .flex__left,.flex__right, .flex__center {
                flex:1;
                display: flex;
            }

            .flex__center {
                justify-content: center;
            }

            .flex__right {
                 justify-content:flex-end;
            }

            .calendar__prev, .calendar__next {
                width:30px;
                height:30px;
                color: white;
                background-color: #00AECD;
                border-radius: 50%;
                display:flex;
                justify-content: center;
                align-items:center;
            }
            .calendar__next:before {
                margin-right:0;
            }
        }
    }

</style>
