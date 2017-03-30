

import echarts from 'echarts'


export default {
    
    created () {
        this.pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
        this.createSeriesDate = (array)=> {
            return array.map(o=> {
                return {
                    data: o
                }
            })
        }

        this.createSeriesStyle = (array)=> {
            let itemStyle= [{
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0, color: '#D57774' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'white'// 100% 处的颜色
                    }], false),
                    barBorderRadius:[10, 10, 10, 10],
                }
            },{
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0, color: '#AA9177' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'white'// 100% 处的颜色
                    }], false),
                    barBorderRadius:[10, 10, 10, 10],
                }
            }]

            return array.map((d,i)=> {
                d.style = itemStyle[i];
                return d
            })
        }

        this.createSeries = (a)=> {
            return a.map((d)=> {
                return {
                    type: 'line',
                    smooth:true,
                    areaStyle: {normal: {}},
                    data: d.data,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width:5
                        }
                    },
                    itemStyle: d.style
                }})
        }
    }
}