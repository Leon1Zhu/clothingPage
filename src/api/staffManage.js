/**
 * Created by zhuliang on 2018/2/3.
 */
import api from './index'
let getAllStaffAccountUrl = '/api/17wa-shop/{account}/all'

export default {
  getAllStaffAccount : function(account){
    getAllStaffAccountUrl  = getAllStaffAccountUrl.replace('{account}',account)
    return api.get()
  }
}
