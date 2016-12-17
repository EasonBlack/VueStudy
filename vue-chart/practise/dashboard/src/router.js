
import VueRouter from 'vue-router'
import Board from './view-board/index.vue'

const router = new VueRouter({
    routes: [
        { path: '/board', component: Board },
        { path: '/', redirect: '/board' }
    ]
})

export default router