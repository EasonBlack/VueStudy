import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Book from './views/book/index.vue'
import BookIndex from './views/book_general/index.vue'
import General from './views/book_general/general.vue'
import Charactor from './views/book_charactor/index.vue'
import Section from './views/book_section/index.vue'

import Current from './views/current/index.vue';
import Daily from './views/daily/index.vue';
import Inspire from './views/inspire/index.vue';
import Collection from './views/collection/index.vue';


const router = new VueRouter({
  
    routes: [
       
        { path: '/current', name: 'current', component: Current },
        { path: '/daily', name: 'daily', component: Daily }, 
        { path: '/inspire',  name: 'inspire', component: Inspire},
        { path: '/collection',  name: 'collection', component: Collection},
        
        { path: '/book', name: 'book', component: Book },
        { path: '/book/:id', component: BookIndex, children: [
            {  path: 'general',component: General },
            {  path: 'charactor',component: Charactor },
            {  path: 'section',component: Section },
            {  path: '/',redirect: 'general' }
        ]},
        { path: '/', redirect:  { name: 'book' } },
    ]
})

export default router