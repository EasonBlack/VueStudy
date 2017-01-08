<template>
    <div class='container'>
        <div class='calendar__header'>
            <div class='left__section'>
                <div class='flex__left'>
                     <a class='calendar__prev icon-left-open' v-on:click='prev'></a>
                </div>
                <div class='flex__center'>
                    {{this.current.format('YYYY-MM')}}
                </div>
                <div class='flex__right'>
                    <a class='calendar__next icon-right-open' v-on:click='next'></a>
                </div>
            </div>
        </div>
        <div class='calendar__content'>
            <calendar  :currentYear='currentYear'
                   :currentMonth='currentMonth'
                   :source='source'></calendar>
        </div>
    </div>
</template>
<script>
    import calendar from './calendar/index.vue';
    import moment from 'moment';

    export default {
        components: {calendar},
        data:function() {
        	 return {
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
            }
        }
    }

</script>
<style lang='scss' scoped>
    .container {
        height:100vh;
    }
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
    .calendar__content {
        height: calc(100% - 60px);
        overflow:auto;
    }
</style>