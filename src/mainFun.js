/**
 * Created by zhuliang on 2017/4/14.
 */
import Vue from 'vue'

Vue.prototype.ISNULL= function(value){
  if(val===null || val === undefined || val ==="" || val.length===0 )return true;
  else return false;
}


Vue.prototype.$DeleteKeepAlive = function(that){
  setTimeout(function(){
    if(that.$route.meta.needAlive){
      let name = that.$route.name
      let menuList =that.$store.getters.getMenuList;
      let deleteFlag = true;
      for(let item in menuList){
        let menuItem = menuList[item]
        if(menuItem.name === name){
          deleteFlag = false;
          break;
        }
      }
      if(deleteFlag){
        that.$destroy();
        console.log("销毁啦")
      }
    }
  },1000)
}



