<template>
  <my-drawer :open="open" title="客户管理" :btnFont="btnFont" @close-drawer="closeDrawer" @complate-drawer="complateDrawer">
    <div class="custom-info-content">

      <div class="store-item store-item-icon-color">
        <div class="left-content">
          <i class="iconfont  icon-kehu" ></i>
          <div class="store-item-label">客户姓名<span class="red-star">*</span></div>
        </div>
        <div class="right-content">
          <Input v-model="customInfo.customName" placeholder="客户姓名" ></Input>
        </div>
      </div>

      <div class="store-item store-item-icon-color">
        <div class="left-content">
          <i class="iconfont  icon-dianhua" ></i>
          <div class="store-item-label">联系方式<span class="red-star">*</span></div>
        </div>
        <div class="right-content">
          <Input v-model="customInfo.customPhone" placeholder="联系电话" ></Input>
        </div>
      </div>

      <div class="store-item store-item-icon-color">
        <div class="left-content">
          <i class="iconfont  icon-shengri" ></i>
          <div class="store-item-label">客户生日<span class="red-star">*</span></div>
        </div>
        <div class="right-content">
          <DatePicker :options="options3" type="date" :format="format"  placeholder="请选择出生日期" v-model="customInfo.customBirth" style="width: 100%;"></DatePicker>
        </div>
      </div>

      <div class="store-item  store-item-icon-color">
        <div class="left-content">
          <i class="iconfont  icon-yinxingqia" ></i>
          <div class="store-item-label">客户卡号<span class="red-star">*</span></div>
        </div>
        <div class="right-content">
          <Input v-model="customInfo.customCard" placeholder="客户卡号"></Input>
        </div>
      </div>



      <div class="store-item  store-item-icon-color" v-if="type==='CHANGE'">
        <div class="left-content">
          <i class="iconfont  icon-zhifufangshi" ></i>
          <div class="store-item-label">积分余额&nbsp;&nbsp;</div>
        </div>
        <div class="right-content">
          <Input v-model="customInfo.customGrade"  disabled></Input>
        </div>
      </div>


      <div class="store-item  store-item-icon-color" v-if="type==='CHANGE'">
        <div class="left-content">
          <i class="iconfont  icon-dashangzonge" ></i>
          <div class="store-item-label">消费总额&nbsp;&nbsp;</div>
        </div>
        <div class="right-content">
          <Input v-model="customInfo.customTotalMoney"   disabled></Input>
        </div>
      </div>


      <div class="store-item  store-item-icon-color" v-if="type ==='CHANGE'">
        <div class="left-content">
          <i class="iconfont  icon-yue" ></i>
          <div class="store-item-label">账户余额&nbsp;&nbsp;</div>
        </div>
        <div class="right-content">
          <Input v-model="customInfo.customRemainMoney"  disabled ></Input>
        </div>
      </div>

    </div>

  </my-drawer>
</template>

<script>
  import myDrawer from'../../common/vue/myDrawer.vue'
    export default{
      props:{
        'open':{
          type:Boolean,
          default:false,
        },
        btnFont:{
          type:String,
          default:'完成',
        },
        customInfoProp:{
            type:Object
        }
      },
        data(){
            return {
              customInfo:{
                customName:null,
                customPhone:null,
                customBirth:new Date().Format(dateFormatType),
                customCard:null,
                customLatestTime:null,
                customLatestMoney:null,
                customGrade:null,
                customTotalMoney:null,
                customRemainMoney:null,
              },
              options3: {
                disabledDate (date) {
                  return new Date().Format(dateFormatType) <  new Date(date).Format(dateFormatType);
                }
              },
              format:dateFormatType,
            }
        },
        components: {
            'my-drawer':myDrawer
        },
        created(){
        },
        computed:{
          type(){
            if( this.btnFont === '新增'){
              return 'ADD';
            }else if(this.btnFont === '修改'){
              this.customInfo.customId = this.customInfoProp.customId
              this.customInfo.customName = this.customInfoProp.customName
              this.customInfo.customPhone = this.customInfoProp.customPhone
              this.customInfo.customBirth = this.customInfoProp.customBirth
              this.customInfo.customCard = this.customInfoProp.customCard
              this.customInfo.customGrade = this.customInfoProp.customGrade
              this.customInfo.customRemainMoney = this.customInfoProp.customRemainMoney
              this.customInfo.customTotalMoney = this.customInfoProp.customTotalMoney
              return'CHANGE';
            }
          }
        },
      watch:{
            open(v1,v2){
               if(v1 && this.btnFont ==='新增'){
                   this.customInfo={
                     customName:null,
                     customPhone:null,
                     customBirth:new Date().Format(dateFormatType),
                     customCard:null,
                     customGrade:null,
                     customTotalMoney:null,
                     customRemainMoney:null,
                 }
               }
            }
      },
        methods: {
          complateDrawer(){
              this.$emit('complateDrawer',this.customInfo)
          },
          closeDrawer(){
              this.$emit('close-drawer')
          }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
</style>
