<template>
    <div id="salesReturn">
      <tool-bar>
        <AutoComplete
         v-model="customInfo"
          :data="autoData"
          icon="ios-search"
          :filter-method="filterMethod"
          placeholder="请输入搜索客户信息"
          style="width:100%" v-if="!isDetail">
        </AutoComplete>
        <div class="detail-tool-bar" v-else>
          <DatePicker :value="searchDataArr" :format="format" type="daterange" placement="bottom-end" placeholder="请选择搜索的日期区间" ></DatePicker>
          <Button type="primary" icon="ios-search" @click.native="searchVisitorDetail"  style="margin-right: .5%;">搜索</Button>
        </div>
      </tool-bar>

      <Table  border :columns="columns10" :data="data9"  :row-class-name="rowClassName"></Table>
      <div class="explain-content" style="display: flex;">
        <color-content color="palevioletred" colorName="核销"></color-content>
        <color-content color="#495060" colorName="已付款"></color-content>
        <color-content color="#11b5ff" colorName="未付款"></color-content>
        <Page :total="100" style="margin-top: 5px;flex: 1;" ></Page>
      </div>


      <my-drawer :open="open" title="退换入库" @close-drawer="open=false" @complate-drawer="complateDrawer">
        <div class="drawer-img-content"><img class="drawer-img" :src="returnitem.img"></div>
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
  import colorContent from '../../common/vue/colorContent.vue';
  import toolBar from'../../common/vue/toolBar.vue'
    export default{
        data(){
            return {
              format:dateFormatType,
              open:false,
              docked:false,
              returnitem:'',
              returnMoney:0,
              precision:0,
              maxCount:0,
              searchDataArr:[],
              autoData:['张三，12000', '李四，13000', '王五，140000'],
              customInfo:'',
              columns10: [
                {
                  type: 'expand',
                  width: 50,
                  render: (h, params) => {
                    return h(expandRow, {
                      props: {
                        row: params.row
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
              data9:[
                {
                  index:1,
                  payway:'支付宝',
                  custom_name:'张三',
                  rental:10121,
                  paymoney:10120,
                  dealtime:'2018/1/20',
                  remark:'无',
                  type:2
                },
                {
                  index:2,
                  custom_name:'张三',
                  payway:'支付宝',
                  rental:10121,
                  paymoney:10120,
                  dealtime:'2018/1/20',
                  remark:'无',
                  type:1
                },
                {
                  index:3,
                  custom_name:'张三',
                  payway:'支付宝',
                  rental:10121,
                  paymoney:10120,
                  dealtime:'2018/1/20',
                  remark:'无',
                  type:0
                },
                {
                  index:4,
                  custom_name:'张三',
                  payway:'支付宝',
                  rental:10121,
                  paymoney:10120,
                  dealtime:'2018/1/20',
                  remark:'无',
                  type:1
                },
                {
                  index:5,
                  custom_name:'张三',
                  payway:'支付宝',
                  rental:10121,
                  paymoney:10120,
                  dealtime:'2018/1/20',
                  remark:'无',
                  type:1
                },
                {
                  index:6,
                  custom_name:'张三',
                  payway:'支付宝',
                  rental:10121,
                  paymoney:10120,
                  dealtime:'2018/1/20',
                  remark:'无',
                  type:1
                },

              ]
            }
        },
        components: {
          expandRow,
          'my-drawer':myDrawer,
          'color-content':colorContent,
          'tool-bar':toolBar
        },
        created(){
            this.getOrderTable()
        },
        computed: {
          detailCustomId(){
            return this.$store.getters.getDetailCustomId
          },
          isDetail(){
            if (this.$route.path === '/visitorDetail') {
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
          getOrderTable(){

          },
          returnGoods(item){
              console.log(item)
            if(this.isDetail)return;
            this.returnitem = item;
            this.returnMoney = item.count * item.prince
            this.maxCount = item.count;
            this.open=true;
          },
          complateDrawer(){

          },
          rowClassName (row, index) {
              if(row.type === 2){
                  return 'recharge-order'
              }else if(row.type ===1){
                  return 'pay-order'
              }else if(row.type === 0){
                  return 'nopay-order'
              }
              return ''
          },
          searchVisitorDetail(){

          }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../common/css/globalscss";
  #salesReturn{
    .drawer-img-content{
      margin-left:  -$drawerPadding;
      margin-right:-$drawerPadding;
    }
    .detail-tool-bar{
      display: flex;
      .ivu-date-picker{
        margin-right: 1%;
      }
    }
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
      display: flex;
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
        margin-left:2%;
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
    .recharge-order{
      color: palevioletred;
    }
    .nopay-order{
      color: #11b5ff;
    }
   .color-content:not(:first-child){
     margin-left:5px;
   }
  }
</style>
