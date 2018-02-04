/**
 * Created by zhuliang on 2018/1/25.
 */
import '../../globalFun'
const state={
  detailCustomId: ISNULL(sessionStorage.getItem('detailCustomId')) ? null : sessionStorage.getItem('detailCustomId'),
  returnCustomId: ISNULL(sessionStorage.getItem('returnCustomId')) ? null : sessionStorage.getItem('returnCustomId'),
}

const getters = {
  getDetailCustomId : state => state.detailCustomId,
  getReturnCustomId : state => state.returnCustomId,
}

const mutations = {
  setDetailCustomId(state,name){
    state.detailCustomId = name
  },
  setReturnCustomId(state,name){
    state.returnCustomId = name;
  }
}

const actions = {
  setDetailCustomNameAction({commit},name){
    commit('setDetailCustomId',name)
  },
  setReturnCustomNameAction({commit},name){
    commit('setReturnCustomId',name)
  }
}


export default {
  state,
  getters,
  mutations,
  actions
}
