/**
 * Created by zhuliang on 2017/5/6.
 */
import api from './index'

let getAllStoreByAccountIdUrl = "/api/17wa-shop/{account}";
let getMarketUrl = "/api/17wa-shop/market";
//更新、创建门店
let manageShopUrl = '/api/17wa-shop/{account}';

//删除门店
let deleteStoreUrl = '/api/17wa-shop/{account}/{shop}';

export default {
  getAllStoreByAccountId : function(accountId){
    return api.get(getAllStoreByAccountIdUrl.replace('{account}',accountId),null)
  },
  getMarket : function(){
    return api.get(getMarketUrl,null)
  },
  manageShop : function(accountId,shopObj){
    return api.post( manageShopUrl.replace('{account}',accountId),shopObj,null)
  },
  deleteStore: function(account,storeId){
    return api.delete(deleteStoreUrl.replace('{account}',account).replace('{shop}',storeId),null)
  }
}
