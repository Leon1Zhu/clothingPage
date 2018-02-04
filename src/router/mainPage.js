/**
 * Created by zhuliang on 2017/12/25.
 */
const mainPage = resolve => require(['@/components/mainPage/mainPage.vue'], resolve);

// 颜色管理
const colorManage = resolve => require(['@/components/system/colorManage.vue'], resolve);

// 尺码管理
const sizeManage = resolve => require(['@/components/system/sizeManage.vue'], resolve);

// 系统设置
const systemSetting = resolve => require(['@/components/system/systemSetting.vue'], resolve);

// 库存核对和修改
const repertoryRecord = resolve => require(['@/components/repertory/repertoryRecord.vue'], resolve);

// 清单盘点
const storeChange = resolve => require(['@/components/check/storeChange.vue'], resolve);

// 扫码盘点
const scanStore = resolve => require(['@/components/check/scanStore.vue'], resolve);

// 手动盘点
const handStore = resolve => require(['@/components/check/handStore.vue'], resolve);

// 盘点记录
const storeRecord = resolve => require(['@/components/check/storeRecord.vue'], resolve);

// 库存记录
const repertoryShift = resolve => require(['@/components/repertory/repertoryShift.vue'], resolve);

// 门店调货
const seasoningCondiments = resolve => require(['@/components/repertory/seasoningCondiments.vue'], resolve);

// 调货记录
const seasoningRecord = resolve => require(['@/components/repertory/seasoningRecord.vue'], resolve);

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

//往来管理
const visitorList = resolve => require(['@/components/visitor/visitorList.vue'], resolve);

//往来明细
const visitorDetail = resolve => require(['@/components/visitor/visitorDetail.vue'], resolve);

//商品管理
const goodsManage = resolve => require(['@/components/goods/goodsManage.vue'], resolve);

//订单列表
const orderList = resolve => require(['@/components/visitor/orderList.vue'], resolve);
const mainPageRouter = {
  path: '/',
  component: mainPage,
  children: [
    {
      path: '/colorManage',
      component: colorManage,
      name: "颜色管理",
      //needAlive表示该页面是否是标签页,keepAlive表示是否需要缓存改页面
      meta: {needAlive: true, keepAlive: true},
    },
    {
      path: '/sizeManage',
      component: sizeManage,
      name: "尺码管理",
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
      path: '/seasoningRecord',
      component: seasoningRecord,
      name: "调货记录",
      //needAlive表示该页面是否是标签页,keepAlive表示是否需要缓存改页面
      meta: {needAlive: true, keepAlive: true},
    },
    {
      path: '/storeRecord',
      component: storeRecord,
      name: "盘点记录",
      //needAlive表示该页面是否是标签页,keepAlive表示是否需要缓存改页面
      meta: {needAlive: true, keepAlive: true},
    },
    {
      path: '/storeChange',
      component: storeChange,
      name: "清单盘点",
      //needAlive表示该页面是否是标签页,keepAlive表示是否需要缓存改页面
      meta: {needAlive: true, keepAlive: true},
    },
    {
      path: '/handStore',
      component: handStore,
      name: "手动盘点",
      //needAlive表示该页面是否是标签页,keepAlive表示是否需要缓存改页面
      meta: {needAlive: true, keepAlive: true},
    },
    {
      path: '/scanStore',
      component: scanStore,
      name: "扫码盘点",
      //needAlive表示该页面是否是标签页,keepAlive表示是否需要缓存改页面
      meta: {needAlive: true, keepAlive: true},
    },
    {
      path: '/seasoningCondiments',
      component: seasoningCondiments,
      name: "门店调货",
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
      name: "退换入库",
      meta: {needAlive: true, keepAlive: true},
    },
    {
      path: '/storeManage',
      component: storeManage,
      name: "门店管理",
      meta: {needAlive: true, keepAlive: true},
    },
    {
      path: '/staffManage',
      component: staffManage,
      name: "店员管理",
      meta: {needAlive: true, keepAlive: true},
    },
    {
      path: '/customManage',
      component: customManage,
      name: "客户管理",
      meta: {needAlive: true, keepAlive: true},
    },
    {
      path: '/visitorList',
      component: visitorList,
      name: "往来管理",
      meta: {needAlive: true, keepAlive: true},
    },
    {
      path: '/visitorDetail',
      component: visitorDetail,
      name: "往来明细",
      meta: {needAlive: true, keepAlive: true},
    },
    {
      path: '/orderList',
      component: orderList,
      name: "订单列表",
      meta: {needAlive: true, keepAlive: true},
    },
    {
      path: '/goodsManage',
      component: goodsManage,
      name: "商品管理",
      meta: {needAlive: true, keepAlive: true},
    },


  ]
};

export default mainPageRouter;
