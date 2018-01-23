/**
 * Created by zhuliang on 2017/12/25.
 */
const mainPage = resolve => require(['@/components/mainPage/mainPage.vue'], resolve);

const colorSizeManage = resolve => require(['@/components/system/colorSizeManage.vue'], resolve);

const systemSetting = resolve => require(['@/components/system/systemSetting.vue'], resolve);

const repertoryRecord = resolve => require(['@/components/repertory/repertoryRecord.vue'], resolve);

const repertoryShift = resolve => require(['@/components/repertory/repertoryShift.vue'], resolve);
//销售开单
const salesOrder = resolve => require(['@/components/goods/salesOrder.vue'], resolve);

//退换入库
const salesReturn = resolve => require(['@/components/goods/salesReturn.vue'], resolve);

//门店管理
const storeManage = resolve => require(['@/components/merchant/storeManage.vue'], resolve);

//店员管理
const staffManage = resolve => require(['@/components/merchant/staffManage.vue'], resolve);

//客户管理
const customManage = resolve => require(['@/components/visitor/customManage.vue'], resolve);

const mainPageRouter = {
  path: '/',
  component: mainPage,
  children: [
    {
      path: '/colorSizeManage',
      component: colorSizeManage,
      name: "尺码颜色管理",
      //needAlive表示该页面是否是标签页,keepAlive表示是否需要缓存改页面
      meta: {needAlive: true, keepAlive: true},
    },
    {
      path: '/systemSetting',
      component: systemSetting,
      name: "系统设置",
      meta: {needAlive: true, keepAlive: true},
    },
    {
      path: '/repertoryRecord',
      component: repertoryRecord,
      // 可以进行库存的添加和核对
      name: "库存管理",
      //needAlive表示该页面是否是标签页,keepAlive表示是否需要缓存改页面
      meta: {needAlive: true, keepAlive: true},
    },
    {
      path: '/repertoryShift',
      component: repertoryShift,
      name: "库存记录",
      //needAlive表示该页面是否是标签页,keepAlive表示是否需要缓存改页面
      meta: {needAlive: true, keepAlive: true},
    },
    {
      path: '/salesOrder',
      component: salesOrder,
      name: "销售开单",
      meta: {needAlive: true, keepAlive: true},
    },
    {
      path: '/salesReturn',
      component: salesReturn,
      name:"退换入库",
      meta:{ needAlive:true,keepAlive:true },
    },
    {
      path: '/storeManage',
      component: storeManage,
      name:"门店管理",
      meta:{ needAlive:true,keepAlive:true },
    },
    {
      path: '/staffManage',
      component: staffManage,
      name:"店员管理",
      meta:{ needAlive:true,keepAlive:true },
    },
    {
      path: '/customManage',
      component: customManage,
      name:"客户管理",
      meta:{ needAlive:true,keepAlive:true },
    },

  ]
};

export default mainPageRouter;
