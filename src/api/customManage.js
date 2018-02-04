/**
 * Created by zhuliang on 2018/2/3.
 */
import api from './index'

//获取客户列表
let getCustomListUrl = '/api/17wa-order/custom/{account}/{keyword}';

//新增客户
let addCusstomUrl = '/api/17wa-custom/{account}'
export default {
  getCustomList : function(account,keyword){
    return api.get(getCustomListUrl.replace('{account}',account).replace('{keyword}',keyword))
  },
  addCusstom : function(account,custom){
    return api.post(addCusstomUrl.replace('{account}',account),custom,null)
  }
}
