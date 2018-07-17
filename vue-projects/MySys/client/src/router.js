import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Book from './views/book/index.vue'
import BookIndex from './views/book_general/index.vue'
import General from './views/book_general/general.vue'
import Charactor from './views/book_charactor/index.vue'

import Current from './views/current/index.vue';
import Inspire from './views/inspire/index.vue';
import InspireList from './views/inspire_list/index.vue';
import CollectionItList from './views/collection/it/list.vue';
import CollectionLitList from './views/collection/lit/list.vue';

const router = new VueRouter({
  
    routes: [
       
        { path: '/current', name: 'current', component: Current },
        //{ path: '/inspire/new',  name: 'inspire-new', component: Inspire},
        { path: '/inspire',  name: 'inspire-list', component: InspireList},
      
        { path: '/collectionit/list',  name: 'collectionit-list', component: CollectionItList },
     
        { path: '/collectionlit/list',  name: 'collectionlit-list', component: CollectionLitList },
        { path: '/book', name: 'book', component: Book },
        { path: '/book/:id', component: BookIndex, children: [
            {  path: 'general',component: General },
            {  path: 'charactor',component: Charactor },
            {  path: '/',redirect: 'general' }
        ]},
        { path: '/', redirect:  { name: 'book' } },
    ]
})

export default router