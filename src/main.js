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
import './mainFun'
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

Vue.prototype.$info = function(title,desc){
  iView.Notice.info(setNoticConfig(title,desc));
}

Vue.prototype.$success = function(title,desc){
  iView.Notice.success(setNoticConfig(title,desc));
}

Vue.prototype.$warning = function(title,desc){
  iView.Notice.warning(setNoticConfig(title,desc));
}


Vue.prototype.$error = function(title,desc){
  iView.Notice.error(setNoticConfig(title,desc));
}

iView.LoadingBar.config({
  color: SYSTEMCOLOR,
});
//路由的全局拦截
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  //对当前页面进行处理,查看是否需要缓存
  if(to.meta.needAlive){
    //若需要，则添加到缓存中，并且在页面上显示
    let obj = {
      name: to.name,
      link: to.path,
      isActive: true,
    }

    if(store.getters.getMenuList.length>8){
      iView.Notice.warning({
        title: '操作错误',
        desc:  '标签页最多存在8个，请关闭之前的标签页再重复此操作！ '
      });
    }else{
      store.dispatch('addMenuListAction',obj)
    }
  }
  next();
});

router.afterEach(route => {
  iView.LoadingBar.finish();
});






