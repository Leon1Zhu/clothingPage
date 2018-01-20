/**
 * Created by zhuliang on 2017/12/25.
 */
const mainPage = resolve => require(['@/components/mainPage/mainPage.vue'], resolve);

const colorSizeManage = resolve => require(['@/components/system/colorSizeManage.vue'], resolve);

const systemSetting = resolve => require(['@/components/system/systemSetting.vue'], resolve);

const repertoryRecord = resolve => require(['@/components/repertory/repertoryRecord.vue'], resolve);
//销售开单
const salesOrder = resolve => require(['@/components/goods/salesOrder.vue'], resolve);

const mainPageRouter = {
  path: '/',
  component: mainPage,
  children: [
    {
      path: '/colorSizeManage',
      component: colorSizeManage,
      name:"尺码颜色管理",
      //needAlive表示该页面是否是标签页,keepAlive表示是否需要缓存改页面
      meta:{ needAlive:true, keepAlive:true },
    },
    {
      path: '/systemSetting',
      component: systemSetting,
      name:"系统设置",
      meta:{ needAlive:true,keepAlive:true },
    },
    {
      path: '/repertoryRecord',
      component: repertoryRecord,
      name:"库存管理",
      //needAlive表示该页面是否是标签页,keepAlive表示是否需要缓存改页面
      meta:{ needAlive:true,keepAlive:true },
    },
    {
      path: '/salesOrder',
      component: salesOrder,
      name:"销售开单",
      meta:{ needAlive:true,keepAlive:true },
    },
  ]
};

export default mainPageRouter;
