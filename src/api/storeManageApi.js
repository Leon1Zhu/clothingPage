/**
 * Created by zhuliang on 2017/5/6.
 */
import api from './index'

var getAllStoreByAccountIdUrl = "/api/17wa-shop/{account}";

export default {
  getAllStoreByAccountId : function(accountId){
    getAllStoreByAccountIdUrl = getAllStoreByAccountIdUrl.replace('{account}',accountId);
    return api.get(getAllStoreByAccountIdUrl,null)
  }
}
