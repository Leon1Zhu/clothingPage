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



Vue.component('table-operation',{
  template: `<span>
        <div><button type="button" @click="deleteRow" class="ivu-btn ivu-btn-primary ivu-btn-circle ivu-btn-icon-only"><i class="ivu-icon ivu-icon-minus-round"></i> </button></div>
        </span>`,
  props:{
    rowData:{
      type:Object
    },
    field:{
      type:String
    },
    index:{
      type:Number
    }
  },
  methods:{

    deleteRow(){
      // 参数根据业务场景随意构造
      let params = {type:'delete',index:this.index};
      this.$emit('on-custom-comp',params);

    }
  }

})



Vue.component('table-addOperate',{
  template: `<span>
        <div><button type="button" @click="addRow" class="ivu-btn ivu-btn-primary ivu-btn-circle ivu-btn-icon-only"><i class="ivu-icon ivu-icon-plus-round"></i> </button></div>
        </span>`,
  props:{
    rowData:{
      type:Object
    },
    field:{
      type:String
    },
    index:{
      type:Number
    }
  },
  methods:{
    addRow(){
      // 参数根据业务场景随意构造
      let params = {type:'add',index:this.index};
      this.$emit('on-custom-comp',params);

    }
  }

})


Vue.component('table-ColorSelect',{
  template: `<Select  v-model="rowData.color" style="width: 70%;"> <Option value="浅蓝">浅蓝</Option><Option value="黑色">黑色</Option><Option value="白色">白色</Option></Select>`,
  props:{
    rowData:{
      type:Object
    },
    field:{
      type:String
    },
    index:{
      type:Number
    }
  },
  created(){
    console.log(this.field)
  },
  methods:{
    addRow(){
      // 参数根据业务场景随意构造
      let params = {type:'add',index:this.index};
      /*this.$emit('on-custom-comp',params);*/

    }
  }

})


Vue.component('table-SizeSelect',{
  template: `<Select  v-model="rowData.size" style="width: 70%;"> <Option value="L">L</Option><Option value="XL">XL</Option><Option value="XXL">XXL</Option></Select>`,
  props:{
    rowData:{
      type:Object
    },
    field:{
      type:String
    },
    index:{
      type:Number
    }
  },
  created(){
    console.log(this.rowData)
  },
  methods:{
    addRow(){
      // 参数根据业务场景随意构造
      let params = {type:'add',index:this.index};
     /* this.$emit('on-custom-comp',params);*/

    }
  }

})



