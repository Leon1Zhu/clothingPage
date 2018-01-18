/**
 * Created by zhuliang on 2017/12/25.
 */
const mainPage = resolve => require(['@/components/mainPage/mainPage.vue'],resolve)


const mainPageRouter = {
    path: '/',
    component: mainPage,
}

export default mainPageRouter;
