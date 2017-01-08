<template>
	<div id="app">
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
	export default {
	    name: 'app',
	    components: {exampleCalendar},
		data() {
			return {
			    current: moment().startOf('month'),
			    currentText: moment().startOf('month').format('YYYY-MM-DD'),
                currentMonth: moment().month(),
                currentYear: moment().year(),
                source: []
            }
		},
		created: function(){
		    Vue.http.get('../data/source.json').then((response) => {
                this.source = response.body;
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