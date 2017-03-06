<template>
    <div class='chart-list__container'>
        <div class='chart-item__wrapper'>
            <day-chart :items='dailyItemsGroup'  v-if='dailyItemsGroup'></day-chart>
        </div>

    </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex';
    import dayChart from './day_chart.vue';
    export default{
        components: {dayChart},
        data(){
            return{

            }
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
                        groups.push(_groups[o]);
                        types.push(o);
                    }

                    return groups;
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
</style>
