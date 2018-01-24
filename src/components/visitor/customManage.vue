<template>
  <div id="customManage">
    <div class="operate-bar">
      <AutoComplete
        v-model="customSearchInfo"
        :data="autoData"
        icon="ios-search"
        :filter-method="filterMethod"
        placeholder="请输入搜索客户信息"
        style="width:100%">
      </AutoComplete>

    </div>

    <Table stripe border :columns="columns10" :data="data9"></Table>
    <Page :total="100" style="margin-top: 5px;"></Page>

    <my-drawer :open="open" title="客户管理" @close-drawer="open=false" @complate-drawer="complateDrawer">
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
            <i class="iconfont  icon-gouwudai" ></i>
            <div class="store-item-label">联系方式<span class="red-star">*</span></div>
          </div>
          <div class="right-content">
            <Input v-model="customInfo.custom_phone" placeholder="联系电话" ></Input>
          </div>
        </div>

        <div class="store-item store-item-icon-color">
          <div class="left-content">
            <i class="iconfont  icon-shangjia" ></i>
            <div class="store-item-label">客户生日<span class="red-star">*</span></div>
          </div>
          <div class="right-content">
            <DatePicker :options="options3" type="date" format="yyyy/MM/dd"  placeholder="请选择开单日期" v-model="customInfo.custom_birthday" style="width: 100%;"></DatePicker>
          </div>
        </div>

        <div class="store-item  store-item-icon-color">
          <div class="left-content">
            <i class="iconfont  icon-10xiangxidizhi" ></i>
            <div class="store-item-label">客户卡号<span class="red-star">*</span></div>
          </div>
          <div class="right-content">
            <Input v-model="customInfo.custom_card" placeholder="客户卡号" ></Input>
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
        customInfo:{
          custom_name:null,
          custom_phone:null,
          custom_birthday:null,
          custom_card:null,
        },
        autoData: ['张三，12000', '李四，13000', '王五，140000'],
        customSearchInfo:'',
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
                      this.open=true
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
      filterMethod (value, option) {
        return option.toLowerCase().indexOf(value.toLowerCase()) !== -1;
      },
      returnGoods(item){
        console.log(item)
        this.returnitem = item;
        this.returnMoney = item.count * item.prince
        this.maxCount = item.count;
        this.open=true;
      },
      complateDrawer(){

      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../common/css/globalscss";
  #customManage{

    .custom-info-content{
      padding:0 5px;
      .ivu-input-wrapper{
        width:70%;
      }

    }
    .store-item-icon-color:first-child .iconfont:before{
      background: $menuSelectFontColor;
    }

  }
</style>
