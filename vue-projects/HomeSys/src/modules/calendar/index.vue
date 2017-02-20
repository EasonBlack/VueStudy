<template>
    <div>
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
                currentMonth: moment().month(),
                currentYear: moment().year(),
                source: []
            }
        }
    }
</script>

<style lang='scss' scoped>

</style>
