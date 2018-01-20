/**
 * Created by zhuliang on 2017/3/6.
 * 组装并导出store
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import loginAndMain from './modules/loginAndMain'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  actions,
  getters,
  modules: {
    loginAndMain
  },
  strict: debug,
})
