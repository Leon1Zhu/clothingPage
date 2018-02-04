/**
 * Created by zhuliang on 2018/2/3.
 */
import api from './index'

//获取对应的订单记录
let getOrderListUrl = '/api/17wa-order/{account}'

//获取对应的客户订单记录
let getCustomOrderListUrl = '/api/17wa-order/{account}/custom'

export default {
  getOrderList : function(account,shopId,sdate,edate,keyword,index,size){
    let params = {
      shopId: shopId,
      sdate: sdate,
      edate: edate,
      keyword: keyword,
      index: index,
      size: size
    }
    return api.get(getOrderListUrl.replace('{account}',account),params);
  },
  getCustomOrderList : function(account,shopId,sdate,edate,keyword,index,size){

  }
}