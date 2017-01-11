<template>
    <div class='calendar__container'>
        <weekend :startDate ="startDate"></weekend>
        <month :dates='dates'></month>
        <ul class='week__container' v-for='date in dates'>
            <li class='day__container' v-for='d in date' :title='d'
                v-bind:class="{
                    active: getEventNum(d)
                }">
            </li>
        </ul>
    </div>
</template>

<script>
    import moment from 'moment';
    import weekend from './weekend.vue';
    import month from './month.vue';
    export default{
        components: {weekend, month},
        props: ['source'],
        data(){
            return{
                dates: [],
                currentYear: 2017,
                startDate: moment({y: this.currentYear, month: 0, d:1}).format('YYYY-MM-DD')
            }
        },
        created:function(){

            let startYear = moment({y: this.currentYear, month: 0, d:1});
            let endYear = moment({y: this.currentYear + 1, month:0, d:1});
            let loop = 7;
            let loopArray = [];
            let _dates = [];
            for (var m = startYear; m.isBefore(endYear); m.add(1, 'days')) {
                loopArray.push(m.format('YYYY-MM-DD'));
                loop--
                if(loop==0) {
                    loop = 7;
                    _dates.push(loopArray);
                    loopArray = [];
                }
            }
            this.dates = _dates;
        },
        methods: {
            getEventNum: function(d) {
                let _event = this.source.find((o) => {
                    return o.date == d
                });
                return _event ? _event.events.length: 0;
            }
        }
    }

</script>

<style scoped lang='scss'>
    .calendar__container {
        width: 100%;
        display: flex;
        border-left: 1px solid rgba(grey, 0.3);
        position:relative;
    }

    .week__container {
        list-style: none;
        display: flex;
        flex-direction:column;
        li:first-child {
            border-top: 1px solid rgba(grey, 0.3);
        }
    }

    .day__container {
        display: block;
        border-right: 1px solid rgba(grey, 0.3);
        border-bottom: 1px solid rgba(grey, 0.3);
        width:10px;
        height:10px;
        background-color:white;
        &.active {
            background-color:rgba(green, 0.3);
        }
    }
</style>
