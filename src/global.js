/**
 * Created by zhuliang on 2017/4/6.
 */
/*
global.title=[{name:'首页',path:"/",isClick:false},{name:'报纸',path:"/newspaperPage",isClick:false},{name:'关于',path:"/about",isClick:false},{name:'联系',path:"/relation",isClick:false}];
global.mainContentTile="打破传统报纸阅读方式";
global.mainContentFir="各类报纸一站式搜索，新闻热点随时掌握，";
global.mainContentSec="给你带来全新的阅读体验。";
global.tokenUrl="http://localhost:8011/getToken"
global.TOKENTIME=new Date();
global.TOKEN="";
global.ISLOGIN=false;
global.USERINFO=[];
 */




global.SYSTEMCOLOR = '#06b9a5';
//付款方式
global.PAYMENTWAY = [{value:0,label:'现金'},{value:1,label:'支付宝'},{value:2,label:'微信'},{value:3,label:'银行卡'},{value:4,label:'信用卡'}];
//行业分类
global.STORECLASSIFY = [{value:0,label:'女装'},{value:1,label:'男装'},{value:2,label:'童装'}];
//销售类型
global.SALETYPE = [{value:0,label:'批发'},{value:1,label:'零售'}];
//店铺服务
global.STORESERVICE = [{value:0,label:'一件代发'},{value:1,label:'退货退款'},{value:2,label:'换款换货'},{value:3,label:'调色调码'},{value:4,label:'五件起批'},{value:5,label:'少量退换'}];

//支付方式
global.PAYTYPE = [{value:0,label:'支付宝'},{value:2,label:'银行卡'},{value:3,label:'信用卡'},{value:1,label:'微信'}];

global.apiError = '接口出小差啦';
global.operatorError = '操作出错啦';
global.opeartorSuccess = '操作成功';

global.SERVICEURL="http://appserver01.17wa.com/17wa"
global.PICSERVICEURL="http://image02.17wa.com/17wa"

if(process.env.NODE_ENV=="development"){
  /*global.accountId=1;
  global.accountName='admin';
  global.accountPwd='123456';
  global.accountType ='管理员';*/

}




