<template>
    <div>
        <div class='calendar__header'>
           <div class='left__section'>
                <div class='flex__left'>
                     <a class='calendar__prev icon-left-open' @click='change(-1)'></a>
                </div>
                <div class='flex__center'>
                    {{this.current.format('YYYY-MM')}}
                </div>
                <div class='flex__right'>
                    <a class='calendar__next icon-right-open' @click='change(1)'></a>
                </div>
            </div>
        </div>
        <example-calendar
                :currentYear='currentYear'
                :currentMonth='currentMonth'
                :source='monthGroup'
                @daily-click='dailyClick'
        ></example-calendar>
    </div>
</template>

<script>
    import moment from 'moment';
    import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex';
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
        created:function() {
            this.setCalendar(0)
        },
         methods: {
            change(step) {
                this.setCalendar(step);
            },
            setCalendar(step) {
                console.log('set calendar');
                 this.current = this.current.add(step, 'months');
                 this.currentMonth = this.current.month();
                 this.currentYear = this.current.year();
                 let _start =  this.current.startOf('month').format('YYYY-MM-DD');
                 let _end = this.current.endOf('month').format('YYYY-MM-DD');
                 this.$store.dispatch('fetchDailyByDate', {startDate:_start, endDate: _end});
            },
            dailyClick: function(date) {
                 this.$store.commit('setActiveMenu', 'daily')
                 this.$router.push('/daily/'+ date);
            }
         },
         computed: {
            ...mapState({
               monthItems: (state) => {
                    return state.eventDaily.month.map((o)=> {
                        o.name = o.item_name;
                        return o;
                    });
               }
            }),
            monthGroup: function() {
                let groups = {};
                if(!this.monthItems) return null;
                for(let m of this.monthItems) {
                    groups[m.date] = groups[m.date] || [];
                    groups[m.date].push(m);
                }
                let monthGroup = Object.keys(groups).map((o)=>{
                    return {
                        date: o,
                        events: groups[o]
                    }
                })
                return monthGroup;
            }
         }
    }
</script>

<style lang='scss' scoped>
    @import '~$color/color.scss';
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
