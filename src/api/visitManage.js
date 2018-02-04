/**
 * Created by zhuliang on 2018/2/3.
 */
import api from './index'

//获取对应的订单记录
let getOrderListUrl = '/api/17wa-order/{account}'

//获取对应的客户订单记录
let getCustomOrderListUrl = '/api/17wa-order/{account}/custom'

//获取对对应订单的详细信息
let getOrderDetailInfoUrl = '/api/17wa-order/detail/{account}/{orderId}'

//退货
let turnBackUrl ='/api/17wa-order/turnback'


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
  getCustomOrderList : function(account,shopId,customId,index,size){
    let params = {
      shopId:shopId,
      custom:customId,
      index: index,
      size: size
    }
    return api.get(getCustomOrderListUrl.replace('{account}',account),params)
  },
  getOrderDetailInfo: function(account,orderId){
     return api.get(getOrderDetailInfoUrl.replace('{account}',account).replace('{orderId}',orderId),null)
  },
  turnBack : function(turnBack){
    return api.post(turnBackUrl,turnBack,null)
  }
}
