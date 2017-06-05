import AppView1 from './App-View1.vue';
import AppView2 from './App-View2.vue';

const routes = [
    { path: '/foo', meta: { name: 'view1', auth: 'admin,siteadmin'} , component: AppView1 },
    { path: '/bar', meta: { name: 'view2', auth: 'siteadmin'} , component: AppView2 }
]

const auth = "admin"

export default routes;


export  function checkRouteAuth(routes) {
    let _r =routes.filter(r=>{
        return r.meta.auth.split(',').indexOf(auth) > -1
    })
    return _r;
}