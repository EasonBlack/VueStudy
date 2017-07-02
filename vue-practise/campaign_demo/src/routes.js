import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const Campaign = () => System.import('./modules/campaign/index.vue');
const CampaignNew = () => System.import('./modules/campaign_new/index.vue');
const CampaignEdit = () => System.import('./modules/campaign_edit/index.vue');
const Overview = () => System.import('./modules/overview/index.vue');


const router = new VueRouter({
    routes: [
        { path: '/overview', name: 'overview',component: Overview },
        { path: '/campaign',name: 'campaign', component: Campaign },
        { path: '/campaign/new',name: 'campaign_new', component: CampaignNew },
        { path: '/campaign/edit',name: 'campaign_edit', component: CampaignEdit },
        { path: '/', redirect: '/overview' }
    ]
})

export default router