/**
 * Created by coco on 2018/1/6.
 */
import api from './index'

let getSysTemSizeUrl = '/api/17wa-sku/size/{account}';

let addStoreSizeBySysTemUrl = '/api/17wa-sku/size/{account}';

let deleteStoreSizeBySysTemUrl = '/api/17wa-sku/size/{account}/{sizeid}';

export default {

  /**
   * 获取系统颜色
   * @returns {*}
   */
  getSysTemSize: function (account) {
    return api.get(getSysTemSizeUrl.replace('{account}', account), null);
  },

  /**
   * 添加系统颜色
   * @returns {*}
   */
  addStoreSizeBySysTem: function (account, color) {
    return api.post(addStoreSizeBySysTemUrl.replace('{account}', account), color);
  },

  /**
   * 删除颜色
   * @param account
   * @param colorid
   * @returns {*}
   */
  deleteStoreSizeBySysTemUrl: function (account, sizeId) {
    return api.delete(deleteStoreSizeBySysTemUrl.replace('{account}', account).replace('{sizeid}', sizeId), null);
  }
}
