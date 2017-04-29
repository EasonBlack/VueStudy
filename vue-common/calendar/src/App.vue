<template>
	<div id="app">
	    <div class='main_container'>
            <example-input-calendar-range2></example-input-calendar-range2>
        </div>
	    <div class='main_container'>
            <example-input-calendar-range></example-input-calendar-range>
        </div>
		<div class='main_container'>
    		<example-daily-arrange :source='dailyArrange' :start="'800'" :end="'1900'" v-if='dailyArrange.length'></example-daily-arrange>
    	</div>
	    <div class='main_container'>
        	<example-gantt1 :source='ganttSource' v-if='ganttSource'></example-gantt1>
        </div>
		<div class='main_container'>
            <example-calendar-git :source='source' v-if='source.length'></example-calendar-git>
		</div>
		<div class='main_container'>
			<example-input-calendar2></example-input-calendar2>
		</div>
        <div class='main_container'>
            <example-input-calendar></example-input-calendar>
        </div>
		<div class='main_container'>
		    <div class='calendar__nav'>
		        <a class='nav__prev' v-on:click='prev'>Prev</a>
		        <div class='nav__title'>{{this.current.format('YYYY-MM')}}</div>
		        <a  class='nav__next'  v-on:click='next'>Next</a>
		    </div>
            <example-calendar
            :currentYear='currentYear'
            :currentMonth='currentMonth'
            :source='source'></example-calendar>
        </div>


	</div>
</template>

<script>
    import Vue from 'vue';
    import moment from 'moment';
    import exampleCalendar from '../example__calendar__1/index.vue';
    import exampleInputCalendar from '../example__input_calendar/index.vue';
    import exampleInputCalendar2 from '../example__input_calendar_2/index.vue';
    import exampleInputCalendarRange from '../example__input_calendar_range/index.vue';
    import exampleInputCalendarRange2 from '../example__input_calendar_range2/index.vue';
    import exampleCalendarGit from '../example__calendar_gitlike/index.vue';
    import exampleGantt1 from '../example__gantt_1/index.vue';
    import exampleDailyArrange from '../example__daily_arrange/index.vue';

	export default {
	    name: 'app',
	    components: {
	        exampleCalendar, exampleInputCalendar,exampleInputCalendar2, exampleCalendarGit, exampleGantt1,
	        exampleDailyArrange, exampleInputCalendarRange, exampleInputCalendarRange2
	    },
		data() {
			return {
			    current: moment().startOf('month'),
			    currentText: moment().startOf('month').format('YYYY-MM-DD'),
                currentMonth: moment().month(),
                currentYear: moment().year(),
                source: [],
                ganttSource: {},
                dailyArrange: []
            }
		},
		created: function(){
		    Vue.http.get('../data/source.json').then((response) => {
                this.source = response.body;
            })
            Vue.http.get('../data/gantt1.json').then((response) => {
                this.ganttSource = response.body;
            })
            Vue.http.get('../data/daily_arrange.json').then((response) => {
                this.dailyArrange = response.body;
            })

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
<style lang='scss' >
    * {
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family: Arial;
    }

    #app {
        min-height:100vh;
        background-color:#EFEFEF;
        padding: 20px 20px;
    }

    .main_container {
        margin-bottom:50px;
    }

    .calendar__nav {
        display:flex;
        width:200px;
        .nav__prev,.nav__next {
            flex:1;
            display: block;
        }
        .nav__title {
            flex: 1;
        }
        .nav__next {
            text-align: right;
        }
    }

</style>