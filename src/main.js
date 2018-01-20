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
const app = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
iView.LoadingBar.config({
  color: '#65cea7',
});
//路由的全局拦截
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  //对当前页面进行处理,查看是否需要缓存
  console.log(store)
  console.log(to)
  console.log(from)
  next();
});

router.afterEach(route => {
  iView.LoadingBar.finish();
});


