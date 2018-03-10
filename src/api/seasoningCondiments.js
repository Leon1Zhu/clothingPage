import api from './index'
let postSeasoningUrl = '/api/17wa-inventory/dispatch/{account}';
let getAllSkuUrl = '/api/17wa-produt/allsku';
let getGoodsShopRecordUrl = '/api/17wa-inventory/shop/{account}/{productId}';

export  default {
  /**
   * 发起调货
   * @param account
   * @param params
   */
  postSeasoning: (account, params) => {
    return api.post(postSeasoningUrl.replace('{account}', account),null,params)
  },
  /**
   * 获取商品在不同的店铺的数量
   * @param account
   * @param productId
   */
  getGoodsShopRecord: (account, productId) => {
    return api.get(getGoodsShopRecordUrl.replace('{account}', account).replace('{productId}', productId), null);
  },
  getAllSku: (params) => {
    return api.get(getAllSkuUrl, params);
  }
}
