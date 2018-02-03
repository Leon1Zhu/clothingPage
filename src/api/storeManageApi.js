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
    getAllStoreByAccountIdUrl = getAllStoreByAccountIdUrl.replace('{account}',accountId);
    return api.get(getAllStoreByAccountIdUrl,null)
  },
  getMarket : function(){
    return api.get(getMarketUrl,null)
  },
  manageShop : function(accountId,shopObj){
    manageShopUrl = manageShopUrl.replace('{account}',accountId);
    return api.post(manageShopUrl,shopObj,null)
  },
  deleteStore: function(account,storeId){
    deleteStoreUrl = deleteStoreUrl.replace('{account}',account).replace('{shop}',storeId);
    return api.put(deleteStoreUrl,null,null)
  }
}
