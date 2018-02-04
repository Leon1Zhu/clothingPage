<template>
  <my-drawer :open="open" title="客户管理" :btnFont="btnFont" @close-drawer="open=false" @complate-drawer="complateDrawer">
    <div class="custom-info-content">

      <div class="store-item store-item-icon-color">
        <div class="left-content">
          <i class="iconfont  icon-kehu" ></i>
          <div class="store-item-label">客户名称<span class="red-star">*</span></div>
        </div>
        <div class="right-content">
          <Input v-model="customInfo.customName" placeholder="客户名称" ></Input>
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
          <DatePicker :options="options3" type="date" format="yyyy-MM-dd"  placeholder="请选择出生日期" v-model="customInfo.customBirthday" style="width: 100%;"></DatePicker>
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
          <i class="iconfont  icon-lishijilu" ></i>
          <div class="store-item-label">最近消费&nbsp;&nbsp;</div>
        </div>
        <div class="right-content">
          <Input v-model="customInfo.customLatestTime" placeholder="最近消费日期" disabled ></Input>
        </div>
      </div>

      <div class="store-item  store-item-icon-color" v-if="type==='CHANGE'">
        <div class="left-content">
          <i class="iconfont  icon-jine" ></i>
          <div class="store-item-label">消费金额&nbsp;&nbsp;</div>
        </div>
        <div class="right-content">
          <Input v-model="customInfo.customLatestMoney" placeholder="最近消费金额" disabled></Input>
        </div>
      </div>

      <div class="store-item  store-item-icon-color" v-if="type==='CHANGE'">
        <div class="left-content">
          <i class="iconfont  icon-zhifufangshi" ></i>
          <div class="store-item-label">付款方式&nbsp;&nbsp;</div>
        </div>
        <div class="right-content">
          <Input v-model="customInfo.customLatestPaytype" placeholder="最近消费付款方式"  disabled></Input>
        </div>
      </div>


      <div class="store-item  store-item-icon-color" v-if="type==='CHANGE'">
        <div class="left-content">
          <i class="iconfont  icon-dashangzonge" ></i>
          <div class="store-item-label">消费总额&nbsp;&nbsp;</div>
        </div>
        <div class="right-content">
          <Input v-model="customInfo.customTotalMoney" placeholder="消费总额"  disabled></Input>
        </div>
      </div>


      <div class="store-item  store-item-icon-color" v-if="type ==='CHANGE'">
        <div class="left-content">
          <i class="iconfont  icon-yue" ></i>
          <div class="store-item-label">账户余额&nbsp;&nbsp;</div>
        </div>
        <div class="right-content">
          <Input v-model="customInfo.customRemainMoney" placeholder="账户余额" disabled ></Input>
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
                customBirthday:null,
                customCard:null,
                customLatestTime:null,
                customLatestMoney:null,
                customLatestPaytype:null,
                customTotalMoney:null,
                customRemainMoney:null,
              },
              type:null,
              options3: {
                disabledDate (date) {
                  return new Date().Format('yyyy-MM-dd') <  new Date(date).Format('yyyy-MM-dd');
                }
              },
            }
        },
        components: {
            'my-drawer':myDrawer
        },
        created(){
            if(this.btnFont === '修改'){
                this.customInfo.customId = this.customInfoProp.customId
                this.customInfo.customName = this.customInfoProp.customName
                this.customInfo.customPhone = this.customInfoProp.customPhone
                this.customInfo.customBirthday = this.customInfoProp.customBirthday
                this.customInfo.customCard = this.customInfoProp.customCard
                this.customInfo.customLatestTime = this.customInfoProp.customLatestTime
                this.customInfo.customLatestMoney = this.customInfoProp.customLatestMoney
                this.customInfo.customNcustomLatestPaytypeame = this.customInfoProp.customLatestPaytype
                this.customInfo.customRemainMoney = this.customInfoProp.customRemainMoney
            }
          if( this.btnFont === '新增'){
            this.type = 'ADD'
          }else{
            this.type = 'CHANGE'
          }
        },
        mounted(){
        },
        methods: {
          complateDrawer(){
              this.$emit('complateDrawer',this.customInfo)
          }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
</style>
