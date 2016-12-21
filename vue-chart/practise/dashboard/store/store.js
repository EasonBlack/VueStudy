import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'jquery'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        chartType: [
            {id: 'area_spline', title: 'Area Spline',chart: 'area-spline-chart'},
            {id: 'bar', title: 'Bar', chart: 'bar-chart'},
            {id: 'stacked_column', title: 'Stacked Column', chart: 'stacked-column-chart'},
            {id: 'pie', title: 'Pie', chart: 'pie-list-chart'},
            {id: 'table', title: 'Table', chart: 'table-chart'}

        ],
        dataType: [
            {id: 'monthly_audit', title: 'Monthly Audit', fun: 'fetchMonthlyAudit'},
            {id: 'deployment_efficiency', title:'Deployment Efficiency', fun: 'fetchDeploymentEfficiency'},
            {id: 'deployment_mrr',title: 'Deployment MRR', fun: 'fetchDeploymentMrr'}
        ],
        charts: [],
        count:0
    },
    getters: {
        monthlyAudit: (state)=> {
            return state.charts.find(c => c.id=='monthly_audit');
        },
        deploymentEfficiency:(state)=> {
            return state.charts.find(c => c.id=='deployment_efficiency');
        },
        deploymentMrr:(state)=> {
            return state.charts.find(c => c.id=='deployment_mrr');
        },
    },
    mutations: {
        incrementCount: (state)=>{
            state.count ++;
        },
        removeChart: (state,id)=> {
            let _id = id;
            console.log(_id);
            for(let i =0;i<state.charts.length;i++) {
                if(state.charts[i].id == _id) {
                    state.charts.splice(i,1);
                }
            }
        },
        addNewChart:(state, res)=> {
            let _id = res.chartInfo.id + '-' + res.dataInfo.id;
            let _result = {
                id: _id,
                size: res.size,
                title: res.title,
                dataInfo: res.dataInfo,
                chartInfo:res.chartInfo,
                data: res.data,
                type:res.type
            }
            state.count ++;
            state.charts.push(_result)
        }
    },
    actions: {
        fetchDataById ({dispatch,commit,state},res) {
            let _dataFun = res.dataInfo.fun;
            return dispatch(_dataFun, res);
        },
        fetchMonthlyAudit ({ commit, state }, res) {
            $.when(
                $.getJSON('../data/monthly_audit_data.json'),
                $.getJSON('../data/monthly_audit_type.json')
            ).then((d, t)=>{
                commit('addNewChart', {data:d[0], type:t[0], ...res})
                //commit('getAudit', {data:d[0], type:t[0]})
            })
        },
        fetchDeploymentEfficiency ({commit, state}, res) {
            $.when(
                $.getJSON('../data/deployment_efficiency_data.json'),
                $.getJSON('../data/deployment_efficiency_type.json')
            ).then((d, t)=>{
                commit('addNewChart', {data:d[0], type:t[0], ...res})
                //commit('getDeploymentEfficiency', {data:d[0], type:t[0]})
            })
        },
        fetchDeploymentMrr ({commit, state}, res) {
            $.when(
                $.getJSON('../data/deployment_mrr_data.json'),
                $.getJSON('../data/deployment_mrr_type.json')
            ).then((d, t)=>{
                commit('addNewChart', {data:d[0], type:t[0], ...res})
                //commit('getDeploymentMrr', {data:d[0], type:t[0]})
            })
        }
    }
})

export default store;