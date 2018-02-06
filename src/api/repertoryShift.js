/**
 * Created by coco on 2018/1/6.
 */
import api from './index'

let listGoodsRepertoryRecordUrl = '/api/17wa-inventory/product/{account}/{shopId}';

let getSingleGoodsRepertoryRecordUrl = '/api/17wa-inventory/detail/{account}/{skuid}';

export default {
  /**
   * 获取所有商品的库存记录
   * @param account
   * @param shopId
   * @param condition
   * @returns {*}
   */
  listGoodsRepertoryRecord(account, shopId, condition) {
    return api.get(listGoodsRepertoryRecordUrl.replace('{account}', account).replace('{shopId}', shopId), condition);
  },

  /**
   * 获取单个商品的库存记录
   * @param account
   * @param skuid
   * @param condition
   * @returns {*}
   */
  getSingleGoodsRepertoryRecord(account, skuid, condition) {
    return api.get(getSingleGoodsRepertoryRecordUrl.replace('{account}', account).replace('{skuid}', skuid), condition);
  },
}


