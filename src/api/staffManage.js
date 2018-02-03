/**
 * Created by zhuliang on 2018/2/3.
 */
import api from './index'
//获取账户下所有的店员
let getAllStaffAccountUrl = '/api/17wa-shop/{account}/all';

//新增、修改店员账户信息
let manageAccountUrl = '/api/17wa-shop/account/{account}';

export default {
  getAllStaffAccount : function(account){
    getAllStaffAccountUrl  = getAllStaffAccountUrl.replace('{account}',account)
    return api.get(getAllStaffAccountUrl,null)
  },
  manageAccount: function(account,shopAccount){
    manageAccountUrl.replace('{account}',account);
    return api.post(manageAccountUrl,shopAccount,null)
  }
}
