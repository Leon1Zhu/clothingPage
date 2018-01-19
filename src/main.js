import Vue from 'vue'
import App from './App'
import store from './store/index'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './common/css/reset.css'
import './filter'
import './common/css/style.scss'
import './common/css/resetIview.scss';
import './common/css/iconFont.scss'
Vue.config.productionTip = false
Vue.use(iView);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

/*
new Vue({
  router,
  /!* store,*!/
  render: h => h(App),
}).$mount('#app')
*/
