<template>
    <div id="salesReturn">
      <AutoComplete
       v-model="customInfo"
        :data="autoData"
        icon="ios-search"
        :filter-method="filterMethod"
        placeholder="请输入搜索客户信息"
        style="width:100%" v-if="!isDetail">
      </AutoComplete>
      <Table stripe border :columns="columns10" :data="data9"  :row-class-name="rowClassName"></Table>
      <Page :total="100" style="margin-top: 5px;"></Page>

      <my-drawer :open="open" title="退换入库" @close-drawer="open=false" @complate-drawer="complateDrawer">
        <div><img class="drawer-img" :src="returnitem.img"></div>
        <div class="describe-content">
          <div class="left-font">货号</div>
          <div class="right-font">{{returnitem.id}}</div>
        </div>

        <div class="describe-content">
          <div class="left-font">颜色</div>
          <div class="right-font">{{returnitem.color}}</div>
        </div>


        <div class="describe-content">
          <div class="left-font">尺码</div>
          <div class="right-font">{{returnitem.size}}</div>
        </div>


        <div class="describe-content" style="display: flex;padding: 10px 3%;">
          <div class="left-font"style="height: 32px;line-height: 32px">数量</div>
          <div class="right-font">
            <InputNumber style="width: 70px;" :precision="precision" :max="maxCount" :min="1" v-model="returnitem.count"></InputNumber>
          </div>
        </div>


        <div class="describe-content">
          <div class="left-font">单价</div>
          <div class="right-font">{{returnitem.prince}}</div>
        </div>


        <div class="describe-content">
          <div class="left-font">退款金额</div>
          <div class="right-font">{{returnMoney}}</div>
        </div>
      </my-drawer>


    </div>
</template>

<script>
  import expandRow from './salesReturnExpandRow/expand.vue';
  import myDrawer from'../../common/vue/myDrawer.vue'
    export default{
        data(){
            return {
              open:false,
              docked:false,
              returnitem:'',
              returnMoney:0,
              precision:0,
              maxCount:0,
              autoData: ['张三，12000', '李四，13000', '王五，140000'],
              customInfo:'',
              columns10: [
                {
                  type: 'expand',
                  width: 50,
                  render: (h, params) => {
                    return h(expandRow, {
                      props: {
                        row: params.row,
                        vIf: !this.isDetail
                      },
                      on:{
                        returnItem: this.returnGoods
                      },
                    })
                  }
                },
                {
                  title: '序号',
                  key: 'index'
                },
                {
                  title: '客户名称',
                  key: 'custom_name'
                },
                {
                  title: '付款方式',
                  key: 'payway'
                },
                {
                  title: '总额',
                  key: 'rental',
                  sortable: true
                },
                {
                  title: '实付金额',
                  key: 'paymoney',
                  sortable: true
                },
                {
                  title: '交易时间',
                  key: 'dealtime',
                  sortable: true
                },
                {
                  title: '备注',
                  key: 'remark',
                }
              ],
              data9: [
                {
                  index:1,
                  payway:'支付宝',
                  custom_name:'张三',
                  rental:10121,
                  paymoney:10120,
                  dealtime:'2018/1/20',
                  remark:'无'
                },
                {
                  index:2,
                  custom_name:'张三',
                  payway:'支付宝',
                  rental:10121,
                  paymoney:10120,
                  dealtime:'2018/1/20',
                  remark:'无'
                },
                {
                  index:3,
                  custom_name:'张三',
                  payway:'支付宝',
                  rental:10121,
                  paymoney:10120,
                  dealtime:'2018/1/20',
                  remark:'无'
                },
                {
                  index:4,
                  custom_name:'张三',
                  payway:'支付宝',
                  rental:10121,
                  paymoney:10120,
                  dealtime:'2018/1/20',
                  remark:'无'
                },
                {
                  index:5,
                  custom_name:'张三',
                  payway:'支付宝',
                  rental:10121,
                  paymoney:10120,
                  dealtime:'2018/1/20',
                  remark:'无'
                },
                {
                  index:6,
                  custom_name:'张三',
                  payway:'支付宝',
                  rental:10121,
                  paymoney:10120,
                  dealtime:'2018/1/20',
                  remark:'无'
                },

              ]
            }
        },
        components: {
          expandRow,
          'my-drawer':myDrawer,
        },
        created(){
        },
        computed:{
          isDetail(){
              console.log(this.$route.path)
            if(this.$route.path === '/visitorDetail'){
               this.columns10.splice(0,1)
              return true
            }
            return false;
          },
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

          },
          rowClassName (row, index) {
            if (index === 1) {
              return 'demo-table-info-row';
            } else if (index === 3) {
              return 'demo-table-error-row';
            }
            return '';
          }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../common/css/globalscss";
  #salesReturn{
    .ivu-page{
      text-align: right;
    }
    .ivu-table-wrapper{
      margin-top:1.5%;
    }
    .drawer-img{
      width:100%;
    }
    .describe-content{
      display: block;
      position: relative;
      width:100%;
      background: #fff;
      padding:15px 3%;
      .left-font,.right-font{
        width:49%;
        display: inline-block;
        font-size:$fontSize;

      }
      .left-font{
        margin-left:2;
        color: $formInputLableFontColor;

      }
      .right-font{
        color: rgba(0,0,0,.3);
        text-align: right;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .describe-content:after{
      content: ' ';
      width:96%;
      margin-left:2%;
      height:1px;
      background: $formLabelBorderBottomColor;
      position: absolute;
      bottom: 0px;
      right:0px;
      left:0px;
    }

  }
</style>
