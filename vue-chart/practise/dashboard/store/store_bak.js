import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'jquery'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        chartType: [
            {id: 'area_spline', title: 'Area Spline'},
            {id: 'bar', title: 'Bar'},
            {id: 'stacked_column', title: 'Stacked Column'}
        ],
        dataType: [
            {id: 'monthly_audit', title: 'Monthly Audit', fun: 'fetchMonthlyAudit'},
            {id: 'deployment_efficiency', title:'Deployment Efficiency', fun: 'fetchDeploymentEfficiency'},
            {id: 'deployment_mrr',title: 'Deployment MRR', fun: 'fetchDeploymentMrr'}
        ],
        charts: []
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
        getAudit: (state, res) =>  {
            let _monthlyAudit = {
                id: 'monthly_audit',
                data: res.data,
                type:res.type
            }
            state.charts.push(_monthlyAudit)
        },
        getDeploymentEfficiency: (state, res)=>{
            let _result = {
                id: 'deployment_efficiency',
                data: res.data,
                type:res.type
            }
            state.charts.push(_result)
        },
        getDeploymentMrr:(state, res) => {
            let _result = {
                id: 'deployment_mrr',
                data: res.data,
                type:res.type
            }
            state.charts.push(_result)
        },
        addNewChart:(state, res)=> {
            let _result = {
                id: res.chartId + '-' + res.dataId,
                chart: res.chartId,
                size: res.size,
                title: res.title,
                data: res.data,
                type:res.type
            }
            state.charts.push(_result)
        }
    },
    actions: {
        fetchDataById ({dispatch,commit,state},res) {
            let _dataFun = res.dataSelected.fun;
            return dispatch(_dataFun, res);
        },
        fetchMonthlyAudit ({ commit, state }) {
            $.when(
                $.getJSON('../data/monthly_audit_data.json'),
                $.getJSON('../data/monthly_audit_type.json')
            ).then((d, t)=>{
                //commit('addNewChart', {data:d[0], type:t[0], ...res})
                commit('getAudit', {data:d[0], type:t[0]})
            })
        },
        fetchDeploymentEfficiency ({commit, state}) {
            $.when(
                $.getJSON('../data/deployment_efficiency_data.json'),
                $.getJSON('../data/deployment_efficiency_type.json')
            ).then((d, t)=>{
                commit('getDeploymentEfficiency', {data:d[0], type:t[0]})
            })
        },
        fetchDeploymentMrr ({commit, state}) {
            $.when(
                $.getJSON('../data/deployment_mrr_data.json'),
                $.getJSON('../data/deployment_mrr_type.json')
            ).then((d, t)=>{
                commit('getDeploymentMrr', {data:d[0], type:t[0]})
            })
        }
    }
})

export default store;