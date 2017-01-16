<template>
    <div class='gantt__container'>
        <table cellspacing=0 cellpadding=0>
            <table-header :start='source.start' :end='end' v-if='end'></table-header>
            <tbody>
            <template v-for='step in source.step' v-if='end'>
                <tr>
                    <td class='title__col'>{{step.name}}</td>
                    <td v-for='i in getBlankDurationPrev(step.start)'></td>
                    <td valign="middle" v-for='i in getStepDuration(step.start, step.end)'>
                        <span class='gantt__steps'
                            v-bind:class="{
                               first: i==1,
                               last : i == getStepDuration(step.start, step.end)
                            }"
                        ></span>
                    </td>
                    <td v-for='i in getBlankDurationNext(step.end, end)'></td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>
    import moment from 'moment';
    import tableHeader from './table_header.vue';
    export default{
        props: ['source'],
        components: {tableHeader},
        data(){
            return{

            }
        },
        methods: {
            getBlankDurationPrev: function(start) {
                let _orginStart = moment(this.source.start).startOf('month');
                let _start = moment(start);
                let blankNumPrev = _start.diff(_orginStart, 'days') ;
                return blankNumPrev;
            },
            getStepDuration: function(start, end) {
                let _start = moment(start);
                let _end = moment(end);
                let durationNum = _end.diff(_start, 'days') + 1;
                return durationNum
            },

            getBlankDurationNext: function(end) {
                let _end = moment(end);
                let _realend = moment(this.end).endOf('month');

                let blankNumNext = _realend.diff(_end, 'days');
                console.log(end, _realend.format('YYYY-MM-DD'), blankNumNext) ;
                return blankNumNext
            }
        },
        computed: {
            end: function() {
                let _maxend = '';
                for(let i in this.source.step) {
                    let _step =  this.source.step[i];
                    if(!_maxend || _maxend < _step.end) {
                        _maxend = _step.end;
                    }
                }
                return _maxend;
            }
        }
    }


</script>

<style lang='scss' scoped>
    .gantt__container {
        table {
            background-color: white;
            .title__col {
                padding:5px 20px;
            }
            td {
                width: 20px;
                height: 20px;
                border-top: 1px solid rgba(grey, 0.3);
                border-left: 1px solid rgba(grey, 0.3);
                position: relative;
            }
        }
    }

    .gantt__steps {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        display: inline-block;
        width: 20px;
        height: 15px;
        background-color: steelblue;
        &.first {
            border-top-left-radius:10px;
            border-bottom-left-radius:10px;
        }
        &.last {
            border-top-right-radius:10px;
            border-bottom-right-radius:10px;
        }
    }
</style>
