import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Book from './views/book/index.vue'
import General from './views/book_general/index.vue'
import Charactor from './views/book_charactor/index.vue'

import Current from './views/current/index.vue';
import Inspire from './views/inspire/index.vue';
import CollectionIt from './views/collection_it/index.vue';
import CollectionLit from './views/collection_lit/index.vue';

const router = new VueRouter({
  
    routes: [
       
        { path: '/current', name: 'current', component: Current },
        { path: '/inspire',  name: 'inspire', component: Inspire },
        { path: '/collectionit',  name: 'collectionit', component: CollectionIt },
        { path: '/collectionlit',  name: 'collectionlit', component: CollectionLit },
        { path: '/book', name: 'book', component: Book },
        { path: '/book/:id', component: General, children: [
            {  path: 'charactor',component: Charactor },
            {  path: '/',redirect: 'charactor' }
        ]},
        { path: '/', redirect:  { name: 'book' } },
    ]
})

export default router