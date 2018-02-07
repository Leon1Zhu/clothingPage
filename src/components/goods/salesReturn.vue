<template>
    <div id="salesReturn">
      <tool-bar>
        <div class="detail-tool-bar" v-if="!isDetail" >
          <Input v-model="searchGoodsInfo" placeholder="商品code1,code2,商品名称" style="margin-right: .5%;" ></Input>
          <DatePicker :value="searchDataArr" :format="format" type="daterange" placement="bottom-end" placeholder="请选择搜索的日期区间" ></DatePicker>
          <Button type="primary" icon="ios-search" @click.native="getOrderTable"  style="margin-right: .5%;">搜索</Button>
        </div>
        <AutoComplete
         v-model="customInfo"
          :data="autoData"
          icon="ios-search"
          placeholder="请输入搜索客户信息"
          style="width:100%" v-else>
        </AutoComplete>

      </tool-bar>

      <Table  border :columns="columns10" :data="data9"  :row-class-name="rowClassName"></Table>
      <div class="explain-content" style="display: flex;">
        <div class="color-contentT">
          <div class="colordiamonds"  style="background:palevioletred"></div>
          <div class="colorName">核销</div>
        </div>

        <div class="color-contentT" style="margin-left: 10px;">
          <div class="colordiamonds"  style="background:#495060"></div>
          <div class="colorName">已付款</div>
        </div>

        <div class="color-contentT" style="margin-left: 10px;">
          <div class="colordiamonds"  style="background:#11b5ff"></div>
          <div class="colorName">未付款</div>
        </div>

        <Page :total="total" style="margin-top: 5px;flex: 1;" :page-size="size" @on-change="changePage" ></Page>
      </div>


      <my-drawer :open="open" title="退换入库" btnFont="退款" @close-drawer="open=false" @complate-drawer="complateDrawer">
        <div class="drawer-img-content"><img class="drawer-img" :src="returnitem.productPic"></div>
        <div class="describe-content">
          <div class="left-font">货号</div>
          <div class="right-font">{{returnitem.productCode}}</div>
        </div>

        <div class="describe-content">
          <div class="left-font">颜色</div>
          <div class="right-font">{{returnitem.colorName}}</div>
        </div>


        <div class="describe-content">
          <div class="left-font">尺码</div>
          <div class="right-font">{{returnitem.sizeName}}</div>
        </div>


        <div class="describe-content" style="display: flex;padding: 10px 3%;">
          <div class="left-font"style="height: 32px;line-height: 32px">数量</div>
          <div class="right-font">
            <InputNumber style="width: 70px;" :precision="precision" :max="maxCount" :min="1" v-model="returnitem.detailAmount"></InputNumber>
          </div>
        </div>

        <div class="describe-content">
          <div class="left-font">单价</div>
          <div class="right-font">{{returnitem.detailPrice}}</div>
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

  import visitorApi from '../../api/visitManage'
    export default{
        data(){
            return {
              searchGoodsInfo:null,
              format:dateFormatType,
              open:false,
              docked:false,
              returnitem:'',
              precision:0,
              maxCount:0,
              index:0,
              total:0,
              size:SIZE,
              searchDataArr:[new Date(new Date().getTime()-365*24*60*60*1000).Format(dateFormatType),new Date().Format(dateFormatType)],
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
                  title: '客户名称',
                  key: 'cusName'
                },
                {
                  title: '付款方式',
                  key: 'orderPaytype'
                },
                {
                  title: '总额',
                  key: 'orderMoney',
                  sortable: true
                },
                {
                  title: '实付金额',
                  key: 'orderPayment',
                  sortable: true
                },
                {
                  title: '交易时间',
                  key: 'orderTime',
                  sortable: true,
                  render: (h, params) => {
                    return h('p', {
                    },new Date(params.row.orderTime).Format(dateFormatType) );
                  }
                },
                {
                  title: '备注',
                  key: 'orderMemo',
                }
              ],
              data9:[],
              turnBackOrderNo:null,
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
            if (this.$route.path === '/orderList') {
              return false
            }
            return true;
          },
          returnMoney(){
              return this.returnitem.detailAmount * this.returnitem.detailPrice;
          }
        },
        mounted(){
        },
        methods: {
          getOrderTable(){
              if(this.isDetail){
                  //表示获取个人详情列表
              }else{
                  //获取所有订单
                this.getOrderByAccount()
              }
          },
          getOrderByAccount(){
              if(this.searchDataArr.length<2){
                  this.$warning(operatorWarning,'请填写完整的查询时间段!');
                  return;
              }
            visitorApi.getOrderList(this.$store.getters.getAccountId,this.$store.getters.getShopId,this.searchDataArr[0],this.searchDataArr[1],this.searchGoodsInfo,this.index,this.size).then(response =>{
              this.data9 = response.data.content
              this.total = response.data.totalElements
            }).catch(response =>{

            })
          },
          returnGoods(item,orderNo){
            this.turnBackOrderNo = orderNo
            this.returnitem = item;
            this.maxCount = this.returnitem.detailAmount;
            this.open=true;
          },
          complateDrawer(){
              let that =this;
              let turnBack = {
                account: that.$store.getters.getAccountId,
                skuid : that.returnitem.skuId,
                orderno : that.turnBackOrderNo,
                amount :that.returnitem.detailAmount
              }
              console.log(turnBack)
              visitorApi.turnBack(turnBack).then(response =>{
                  this.getOrderTable();
                  this.$success(opeartorSuccess,'退货成功！');
                  this.open = false;
              }).catch(response =>{
                  this.$error(operatorError,response.data.message)
              })
          },
          rowClassName (row, index) {
              if(row.orderRecharge > 0){
                  return 'recharge-order'
              }else if(row.orderPayment >0){
                  return 'pay-order'
              }else if(row.orderPayment == 0){
                  return 'nopay-order'
              }
              return ''
          },
          changePage(pageIndex){
            this.index = pageIndex-1;
            this.getOrderTable()
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
      margin-top:1%;
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

    .color-contentT{
      display: flex;
      color: $menuSelectFontColor;
      width: 61px;
      height:25px;
      padding: 3px;
      border: 1px solid $menuSelectFontColor;
      font-size:12px;
      margin-top:3px;
      border-radius:3px;
      .colordiamonds{
        border-radius:100%;
        margin-top:2.5px;
        width: 12px;
        height:12px;
        margin-right:3px;
        margin-left:2px;
      }
      .colorName{
        line-height:150%;
      }
    }
  }
</style>
