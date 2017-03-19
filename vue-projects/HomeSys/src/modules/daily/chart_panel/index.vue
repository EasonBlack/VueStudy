<template>
    <div class='chart-list__container'>
        <div class='chart-item__wrapper'>
            <day-chart :items='dailyItemsGroup'  v-if='dailyItemsGroup'></day-chart>
        </div>
        <div class='chart-week__wrapper'>
            <week-chart :items='weekItemsGroup.groups' :types='weekItemsGroup.types' v-if='weekItemsGroup' ></week-chart>
        </div>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex';
    import dayChart from './day_chart.vue';
    import weekChart from './week_chart.vue';
    export default{
        components: {dayChart,weekChart},
        data(){
            return{

            }
        },
        created: function() {

        },
        computed: {
            ...mapState({
               dailyItemsGroup: (state) => {
                    if(!state.eventDaily.current) {
                        return null;
                    }
                    let _items = state.eventDaily.current;
                    let _groups = {};
                    let groups = [];
                    let types = [];
                    for(let t of _items) {
                        _groups[t.type_name] = _groups[t.type_name] || {name: t.type_name, time: 0, trophy: 0 };
                        _groups[t.type_name].time = _groups[t.type_name].time + parseFloat(t.time);
                        _groups[t.type_name].trophy = _groups[t.type_name].trophy + parseInt(t.trophy);
                    }
                    for(let o in _groups) {
                        _groups[o].time = _groups[o].time.toFixed(2);
                        _groups[o].trophy = _groups[o].trophy.toFixed(2);
                        groups.push(_groups[o]);
                        types.push(o);
                    }
                    return groups;
               },
               weekItemsGroup: (state) => {
                    if(!state.eventDaily.week) {
                        return null;
                    }
                    let _items = state.eventDaily.week;
                    let _groups = {};
                    let groups = [];
                    let types = [];
                    for(let t of _items) {
                        _groups[t.type_name] = _groups[t.type_name] || {name: t.type_name, time: 0, trophy: 0 };
                        _groups[t.type_name].time = _groups[t.type_name].time + parseFloat(t.time);
                        _groups[t.type_name].trophy = _groups[t.type_name].trophy + parseInt(t.trophy);
                    }
                    for(let o in _groups) {
                        _groups[o].time = _groups[o].time.toFixed(2);
                        _groups[o].trophy = _groups[o].trophy.toFixed(2);
                        groups.push(_groups[o]);
                        types.push(o);
                    }
                    return {groups: groups, types: types}
               }


            })
        }

    }
</script>

<style lang='scss' scoped>
    .chart-list__container {
        display:flex;
    }
    .chart-item__wrapper {
        width:300px;
        height:300px;
    }
    .chart-week__wrapper {
        flex: 1;
        height:300px;
    }
</style>
