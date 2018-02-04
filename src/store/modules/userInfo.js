/**
 * Created by zhuliang on 2018/2/1.
 */
const state={
    accountId: 1,
    accountName: 'admin',
    accountPwd: '123456',
    accountType : '管理员',
    shopId: '1',
}


const getters = {
  getAccountId: state => state.accountId,
  getAccountName: state => state.accountName,
  getAccountPwd: state => state.accountPwd,
  getAccountType: state => state.accountType,
  getShopId: state => state.shopId,
}


const mutations = {

}


const actions = {

}



export default {
  state,
  getters,
  mutations,
  actions
}
