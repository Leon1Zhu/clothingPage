/**
 * Created by coco on 2018/1/6.
 */
import api from './index'

let getSysTemColorUrl = '/api/17wa-sku/color/{account}';

let addStoreColorBySysTemUrl = '/api/17wa-sku/color/{account}';

let deleteStoreColorBySysTemUrl = '/api/17wa-sku/color/{account}/{colorid}';

export default {

  /**
   * 获取系统颜色
   * @returns {*}
   */
  getSysTemColor: function (account) {
    return api.get(getSysTemColorUrl.replace('{account}', account), null);
  },

  /**
   * 添加系统颜色
   * @returns {*}
   */
  addStoreColorBySysTem: function (account, color) {
    return api.post(addStoreColorBySysTemUrl.replace('{account}', account), color);
  },

  /**
   * 删除颜色
   * @param account
   * @param colorid
   * @returns {*}
   */
  deleteStoreColorBySysTemUrl: function (account, colorid) {
    return api.delete(deleteStoreColorBySysTemUrl.replace('{account}', account).replace('{colorid}', colorid), null);
  }
}
