<template>
    <div class='full-mask' @click='close'>
        <div class='item-bar-wrapper'  @click.prevent.stop='()=>false' ref="cw"></div>
    </div>
</template>
<script>
    import moment from 'moment';
    import echarts from 'echarts';
    export default {
        props: ['items', 'start', 'end'],
        data(){
            return{
                myChart :null
            }
        },
        methods: {
            close() {
                this.$emit('closeChart');
            }
        },
        mounted: function() {
            this.myChart = echarts.init(this.$refs.cw);
          
            let _start = this.start;//this.items[0].date;
            let _end = this.end; //this.items[this.items.length - 1].date;
            let _endMoment = moment(_end).add(1,'days');
            let _dates = [];
            let _times = [];
            for (var m = moment(_start); m.isBefore(_endMoment); m.add(1, 'days')) {
                let _date = m.format('YYYY-MM-DD');
                _dates.push(_date);
                let _time = ''
                for(let i = 0;i<this.items.length;i++) {
                    let _item = this.items[i];
                    if(_date == _item.date) {
                        _time = _item.time;
                    }
                }
                _times.push(_time);
            }

            let titleObject = null;
            if(!this.items.length) {
                titleObject = {
                    text: "No Data Available",
                    left: 'center',
                    top: 'center'
                }
            } else {
                let _sum = this.items.reduce((t,item)=>t + parseFloat(item.time), 0)
                 titleObject = {
                    text: _sum.toFixed(2),
                    x: 'right',
                }
            }
            
            this.createChart = ()=> {   
                this.myChart.setOption({ 
                    backgroundColor: 'white',
                    title: titleObject,
                    xAxis : [
                        {
                            type : 'category',
                            data : _dates,
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name: 'time',
                            type:'bar',
                            data: _times
                        },
                    ]
                });

            }
            this.createChart();

        }
    }
</script>
<style lang='scss' scoped>
    @import './index.scss';
</style>