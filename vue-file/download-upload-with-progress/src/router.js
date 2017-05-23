import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Download from './download.vue';
import Upload from './upload.vue';

const router = new VueRouter({
    routes: [
        { path: '/download', name: 'download',component: Download },
        { path: '/upload', name: 'upload',component: Upload }
    ]
})

export default router