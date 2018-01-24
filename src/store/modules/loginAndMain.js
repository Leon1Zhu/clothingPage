/**
 * Created by zhuliang on 2017/3/6.
 * 登陆的相关数据的store
 */
import * as types  from '../mutations-types'

var menuListSesssion  = 'fire-cow-menulist'
const  state = {
  isLogin : false,
  menuList : sessionStorage.getItem(menuListSesssion) ? JSON.parse(sessionStorage.getItem(menuListSesssion)) :  [{name: '首页', link:'/', isActive:true,}],

}

function setSessionMenuList(){
  sessionStorage.setItem(menuListSesssion,JSON.stringify(state.menuList))
}

const getters = {
  getLoginStatus: state => state.isLogin,
  getMenuList : state => state.menuList,
}

const mutations = {
  [types.LOGIN_STATUS](state,flag){
    state.isLogin = flag;
  },
  addMenuList(state,obj){
    //首先循环是否在里面，若不在，直接添加，显示添加位，若在，直接将显示位置true
    let inFlag = false;
    for( let item in state.menuList ){
      let itemTemp =  state.menuList[item]
      itemTemp.isActive =  itemTemp.isActive ? false :  itemTemp.isActive
      if(itemTemp.name === obj.name){
        itemTemp.isActive = true;
        inFlag = true;
      }
      //inFlag为false表示当前标签不在数组内
    }
    if(!inFlag){
      state.menuList.push(obj)
    }
    setSessionMenuList();
  },
  changeActivePage(state,index){
    for( let item in state.menuList){
      let itemTemp =  state.menuList[item]
      itemTemp.isActive = itemTemp.isActive ? false : itemTemp.isActive
    }
    state.menuList[index].isActive = true;
    setSessionMenuList();
  },
  deletePage(state,index){
    let isActiveFlag = false;
    console.log(index)
    if(state.menuList[index].isActive === true){
      isActiveFlag = true;
    }
    state.menuList.splice(index,1)
    if(isActiveFlag){
      state.menuList[state.menuList.length-1].isActive = true;
    }
    setSessionMenuList();
  }
}

const actions = {
  setLoginStatus ({ commit },flag) {
    commit(types.LOGIN_STATUS,flag)
  },
  addMenuListAction({ commit },obj){
    commit('addMenuList',obj);
  },
  changeActivePageAction({ commit },index){
    commit('changeActivePage',index);
  },
  deletePageAction({ commit },index){
    commit('deletePage',index)
  }

}


export default {
  state,
  getters,
  mutations,
  actions
}

