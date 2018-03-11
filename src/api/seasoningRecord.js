import api from './index'
let listSeasoningRecordUrl = '/api/17wa-inventory/dispatch/{account}';
let sureSeasoningRecordUrl = '/api/17wa-inventory/dispatch/{account}';

export default {
  /**
   * 根据用户名，获取调货记录
   * @param account
   * @param params
   * @returns {*}
   */
  listSeasoningRecord: (account, params) => {
    return api.get(listSeasoningRecordUrl.replace('{account}', account), params);
  },
  /**
   * 确认门店之间的调货
   * @param account
   * @param params
   * @returns {*}
   */
  sureSeasoningRecordUrl: (account, params) => {
    return api.put(sureSeasoningRecordUrl.replace('{account}', account), null, params);
  }
}
