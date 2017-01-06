<template>
	<div id="app">
		<div class='main_container'>
            <example-calendar :currentYear='currentYear' :currentMonth='currentMonth'></example-calendar>
        </div>


	</div>
</template>

<script>
    import moment from 'moment';
    import exampleCalendar from '../example__calendar__1/index.vue';
	export default {
	    name: 'app',
	    components: {exampleCalendar},
		data() {
			return {
                currentMoment: moment().month(),
                currentYear: moment().year()
            }
		}
	}
</script>
<style>
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

</style>