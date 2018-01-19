/**
 * Created by zhuliang on 2017/4/14.
 */
import Vue from 'vue'

Vue.prototype.ISNULL= function(value){
  if(val===null || val === undefined || val ==="" || val.length===0 )return true;
  else return false;
}



