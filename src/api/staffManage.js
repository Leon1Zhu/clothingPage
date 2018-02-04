/**
 * Created by zhuliang on 2018/2/3.
 */
import api from './index'
//获取账户下所有的店员
let getAllStaffAccountUrl = '/api/17wa-shop/{account}/all';

//新增、修改店员账户信息
let manageAccountUrl = '/api/17wa-shop/account/{account}';

//删除门店账户
let deleteAccountUrl = '/api/17wa-shop/account/{account}/{shopaccount}'

export default {
  getAllStaffAccount : function(account){
    return api.get(getAllStaffAccountUrl.replace('{account}',account),null)
  },
  manageAccount: function(account,shopAccount){
    return api.post(manageAccountUrl.replace('{account}',account),shopAccount,null)
  },
  deleteAccount: function(account,shopAccount){
    return api.delete(deleteAccountUrl.replace('{account}',account).replace('{shopaccount}',shopAccount),null)
  }
}
