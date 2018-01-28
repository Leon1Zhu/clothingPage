<template>
  <div id="customManage">
    <div class="operate-bar">
      <Input v-model="searchStaffName" placeholder="请输入客户姓名" style="margin-right: .5%;" ></Input>
      <Button type="primary" icon="ios-search" @click.native="searchCustom"  style="margin-right: .5%;">搜索</Button>

      <div class="add-store-btn"><Button type="primary" icon="plus-round" @click.native="customManage('')">添加客户</Button></div>
    </div>

    <Table stripe border :columns="columns10" :data="data9"></Table>
    <Page :total="100" style="margin-top: 5px;"></Page>

    <my-drawer :open="open" title="客户管理" :btnFont="btnFont" @close-drawer="open=false" @complate-drawer="complateDrawer">
      <div class="custom-info-content">

        <div class="store-item store-item-icon-color">
          <div class="left-content">
            <i class="iconfont  icon-kehu" ></i>
            <div class="store-item-label">客户名称<span class="red-star">*</span></div>
          </div>
          <div class="right-content">
            <Input v-model="customInfo.custom_name" placeholder="客户名称" ></Input>
          </div>
        </div>

        <div class="store-item store-item-icon-color">
          <div class="left-content">
            <i class="iconfont  icon-dianhua" ></i>
            <div class="store-item-label">联系方式<span class="red-star">*</span></div>
          </div>
          <div class="right-content">
            <Input v-model="customInfo.custom_phone" placeholder="联系电话" ></Input>
          </div>
        </div>

        <div class="store-item store-item-icon-color">
          <div class="left-content">
            <i class="iconfont  icon-shengri" ></i>
            <div class="store-item-label">客户生日<span class="red-star">*</span></div>
          </div>
          <div class="right-content">
            <DatePicker :options="options3" type="date" format="yyyy/MM/dd"  placeholder="请选择出生日期" v-model="customInfo.custom_birthday" style="width: 100%;"></DatePicker>
          </div>
        </div>

        <div class="store-item  store-item-icon-color">
          <div class="left-content">
            <i class="iconfont  icon-yinxingqia" ></i>
            <div class="store-item-label">客户卡号<span class="red-star">*</span></div>
          </div>
          <div class="right-content">
            <Input v-model="customInfo.custom_card" placeholder="客户卡号"></Input>
          </div>
        </div>


        <div class="store-item  store-item-icon-color" v-if="type==='CHANGE'">
          <div class="left-content">
            <i class="iconfont  icon-lishijilu" ></i>
            <div class="store-item-label">最近消费&nbsp;&nbsp;</div>
          </div>
          <div class="right-content">
            <Input v-model="customInfo.custom_latest_time" placeholder="最近消费日期" disabled ></Input>
          </div>
        </div>

        <div class="store-item  store-item-icon-color" v-if="type==='CHANGE'">
          <div class="left-content">
            <i class="iconfont  icon-jine" ></i>
            <div class="store-item-label">消费金额&nbsp;&nbsp;</div>
          </div>
          <div class="right-content">
            <Input v-model="customInfo.custom_latest_money" placeholder="最近消费金额" disabled></Input>
          </div>
        </div>

        <div class="store-item  store-item-icon-color" v-if="type==='CHANGE'">
          <div class="left-content">
            <i class="iconfont  icon-zhifufangshi" ></i>
            <div class="store-item-label">付款方式&nbsp;&nbsp;</div>
          </div>
          <div class="right-content">
            <Input v-model="customInfo.custom_latest_paytype" placeholder="最近消费付款方式"  disabled></Input>
          </div>
        </div>


        <div class="store-item  store-item-icon-color" v-if="type==='CHANGE'">
          <div class="left-content">
            <i class="iconfont  icon-dashangzonge" ></i>
            <div class="store-item-label">消费总额&nbsp;&nbsp;</div>
          </div>
          <div class="right-content">
            <Input v-model="customInfo.custom_total_money" placeholder="消费总额"  disabled></Input>
          </div>
        </div>


        <div class="store-item  store-item-icon-color" v-if="type ==='CHANGE'">
          <div class="left-content">
            <i class="iconfont  icon-yue" ></i>
            <div class="store-item-label">账户余额&nbsp;&nbsp;</div>
          </div>
          <div class="right-content">
            <Input v-model="customInfo.custom_remain_money" placeholder="账户余额" disabled ></Input>
          </div>
        </div>

      </div>

    </my-drawer>


  </div>
</template>

<script>
  import myDrawer from'../../common/vue/myDrawer.vue'
  export default{
    data(){
      return {
        open:false,
        btnFont:'新增',
        customInfo:{
          custom_name:null,
          custom_phone:null,
          custom_birthday:null,
          custom_card:null,
          custom_latest_time:'2018/01/14',
          custom_latest_money:'24000',
          custom_latest_paytype:'支付宝',
          custom_total_money:'240000',
          custom_remain_money:'12000',
        },
        type:null,
        options3: {
          disabledDate (date) {
            return new Date().Format('yyyy/MM/dd') <  new Date(date).Format('yyyy/MM/dd');
          }
        },
        columns10: [
          {
            title: '客户名称',
            key: 'custom_name'
          },
          {
            title: '联系方式',
            key: 'custom_phone'
          },
          {
            title: '客户等级',
            key: 'custom_grade',
          },
          {
            title: '客户卡号',
            key: 'custom_card',
          },
          {
            title: '消费总额',
            key: 'custom_total_money',
          },
          {
            title: '账户余额',
            key: 'custom_remain_money',
          }, {
            title: '操作',
            key: 'operate',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'ghost',
                    shape: 'circle',
                    icon:"ios-compose-outline"
                  },
                  style: {
                  },
                  on: {
                    click: () => {
                      this.customManage(params.row)
                    }
                  }
                }, ),
                h('Button',{
                  props: {
                    type: 'ghost',
                    shape: 'circle',
                    icon:"trash-a"
                  },
                  style: {
                    marginLeft:'3px'
                  },
                  on:{
                    click: () => {

                    }
                  }
                },)
              ]);
            }
          }
        ],
        data9: [
          {
            id:1,
            custom_phone:'18752002039',
            custom_name:'张三',
            custom_grade:'新会员',
            custom_card:'39485732',
            custom_total_money:120000,
            custom_remain_money:20000,
          },{
            id:1,
            custom_phone:'18752002039',
            custom_name:'张三',
            custom_grade:'新会员',
            custom_card:'39485732',
            custom_total_money:120000,
            custom_remain_money:20000,
          },{
            id:1,
            custom_phone:'18752002039',
            custom_name:'张三',
            custom_grade:'新会员',
            custom_card:'39485732',
            custom_total_money:120000,
            custom_remain_money:20000,
          },{
            id:1,
            custom_phone:'18752002039',
            custom_name:'张三',
            custom_grade:'新会员',
            custom_card:'39485732',
            custom_total_money:120000,
            custom_remain_money:20000,
          },{
            id:1,
            custom_phone:'18752002039',
            custom_name:'张三',
            custom_grade:'新会员',
            custom_card:'39485732',
            custom_total_money:120000,
            custom_remain_money:20000,
          },{
            id:1,
            custom_phone:'18752002039',
            custom_name:'张三',
            custom_grade:'新会员',
            custom_card:'39485732',
            custom_total_money:120000,
            custom_remain_money:20000,
          },

        ]
      }
    },
    components: {
      'my-drawer':myDrawer,
    },
    created(){
    },
    mounted(){
    },
    methods: {
      complateDrawer(){
        this.open=false;
      },
      customManage(value){
          if(ISNULL(value)){
              this.btnFont = '新增'
            this.type='ADD'
          }else{
              this.btnFont = '修改'
            this.type='CHANGE'
          }

        this.open=true;
      },
      searchCustom(){

      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../common/css/globalscss";
  #customManage{
    .operate-bar{
      display: flex;
      margin-bottom:5px;
      width:100%;
      position: relative;
      .ivu-auto-complete.ivu-select.ivu-select-single{
        margin-right:1%;
      }
    }
    .custom-info-content{
      padding:0 5px;
      .ivu-input-wrapper{
        width:70%;
      }

    }
    .ivu-page{
      text-align: right;
    }

  }
</style>
