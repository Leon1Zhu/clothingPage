/**
 * Created by zhuliang on 2017/5/6.
 */
import Vue from 'vue'
import axios from 'axios'
export default {
   get:function(url,params){
       return axios.get(url,{params:params});
   },
  post:function(url,body,params){
      return axios.post(url,body,{params:params});
  },
  delete:function(url,params){
     return axios.delete(url,{params:params});
  },
  put:function(url,body,params){
     return axios.put(url,body,{params:params});
  }
  }
