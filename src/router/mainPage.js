/**
 * Created by zhuliang on 2017/12/25.
 */
const mainPage = resolve => require(['@/components/mainPage/mainPage.vue'], resolve);
const colorSizeManage = resolve => require(['@/components/system/colorSizeManage.vue'], resolve);
const systemSetting = resolve => require(['@/components/system/systemSetting.vue'], resolve);
const repertoryRecord = resolve => require(['@/components/repertory/repertoryRecord.vue'], resolve);

const mainPageRouter = {
  path: '/',
  component: mainPage,
  children: [
    {
      path: '/colorSizeManage',
      component: colorSizeManage
    },
    {
      path: '/systemSetting',
      component: systemSetting
    },
    {
      path: '/repertoryRecord',
      component: repertoryRecord
    },
  ]
};

export default mainPageRouter;
