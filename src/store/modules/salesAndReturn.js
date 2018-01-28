/**
 * Created by zhuliang on 2018/1/25.
 */
import '../../globalFun'
const state={
  detailCustomName: ISNULL(sessionStorage.getItem('detailCustomName')) ? null : sessionStorage.getItem('detailCustomName'),
  returnCustomName: ISNULL(sessionStorage.getItem('returnCustomName')) ? null : sessionStorage.getItem('returnCustomName'),
}

const getters = {
  getDetailCustomName : state => state.detailCustomName,
  getReturnCustomName : state => state.returnCustomName,
}

const mutations = {
  setDetailCustomName(state,name){
    state.detailCustomName = name
  },
  setReturnCustomName(state,name){
    state.returnCustomName = name;
  }
}

const actions = {
  setDetailCustomNameAction({commit},name){
    commit('setDetailCustomName',name)
  },
  setReturnCustomNameAction({commit},name){
    commit('setReturnCustomName',name)
  }
}


export default {
  state,
  getters,
  mutations,
  actions
}
