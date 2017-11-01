

import App from './page/App.vue'
import Login from './page/Login.vue'
import Home from './page/Home/Home.vue'
import Detail from './page/Detail.vue'

const router = [

  {path: '/login', component: Login},
  {path: '/app', component: App,  
    children: [
      {path: '/', component: Home},
      {path: 'home', name: 'home', component: Home},
      {path: 'detail', name: 'detail', component: Detail},
    ]
  },
 
  {path: '/', redirect: '/login'}
]

export default router;