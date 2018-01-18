import Vue from 'vue'
import Router from 'vue-router'
import mainPage from './mainPage'

Vue.use(Router)
const notFound = resolve => require(['@/components/404'], resolve);

export default new Router({
  /*mode: 'history',*/
  base: __dirname,
  routes: [
    mainPage,
    {path: '*', name: '404', component: notFound}
  ]
})
