/**
 * Created by coco on 2018/1/6.
 */
import api from './index'

let listAllGoodsUrl = '/api/17wa-product/{account}/all';

let getSingleGoodsUrl = '/api/17wa-produt/code/{account}/{shopId}/{code}';

export default {
  listAllGoods(account, params) {
    return api.get(listAllGoodsUrl.replace('{account}', account), params);
  },
  getSingleGoods(account, shopId, code) {
    return api.get(getSingleGoodsUrl.replace('{account}', account).replace('{shopId}', shopId).replace('{code}', code), null);
  }
}
