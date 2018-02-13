<template>
  <div class="good-table-expand">
    <Table class="my-table" :show-header="!showHeader"  :columns="columns1" :data="data1"></Table>
    <!--<Card  v-for="item in data1" @click.native="returnItem(item)">
      <div class="good-card">
        <div class="left-content">
            <img class="good-img" :src="item.productPic">
        </div>
        <div class="center-content">
            <div class="top-content">
              <div>商品货号:<span v-if="item.productCode && item.productCode2">{{item.productCode+'/'+item.productCode2}}</span></div>
              <div>商品名称:{{item.detailProductName}}</div>
            </div>

            <div class="bottom-content" v-if="item.detailProductName === '核销' || item.detailProductName === '抹零' ">
              <div class="center-color-size">
                <color-content :colorName="item.detailProductName" ></color-content>

                <div class="size-content">
                  {{item.detailProductName}}
                </div>
              </div>
            </div>

            <div class="bottom-content" v-else>
              <div class="center-color-size">
              <color-content :colorName="item.colorName" :color="item.colorName"></color-content>

              <div class="size-content">
                {{item.sizeName}}
              </div>
              </div>
            </div>
        </div>
        <div class="right-content">
          <div class="top-content">
             <p class="prince-content">{{'+'+item.detailPrice}}</p>
          </div>
          <div classs="right-center-content">
            <p class="count-content">{{'x'+item.detailAmount}}</p>
          </div>
          <div class="bottom-content">
              <p class="returnCount">{{item.detailReturnamount > 0 ? '-'+item.detailReturnamount : 0}}</p>
          </div>
        </div>
      </div>
    </Card>-->
    <Spin size="large" fix v-if="spinShow"></Spin>
  </div>
</template>

<script>
import colorContent from '../../../common/vue/colorContent.vue'
import visitManageApi from '../../../api/visitManage'
    export default{
        props: {
          row: Object
        },
        data(){
            return {
              showHeader:false,
              spinShow:true,
              data1:[],
              columns1: [
                {
                  title: '商品货号',
                  key: '081802000104'
                },
                {
                  title: '图片',
                  key: 'productPic',
                  render: (h,params){
                      return h('div',{
                          class
                      },[])
                  }
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
                },
                {
                  title: '备注',
                    key: 'orderMemo',
                }
              ],
            }
        },
        components: {
            'color-content':colorContent
        },
        created(){
            this.getOrderListDetailInfo()
        },
        mounted(){
        },
        methods: {
          returnItem(item){
              if(item.detailProductName === '核销' || item.detailProductName === '抹零'){
                  this.$warning(operatorWarning,'核销活抹零商品无法退货！');
                  return;
              }
              this.$emit('returnItem',item,this.row.orderId)
          },
          getOrderListDetailInfo(){
              visitManageApi.getOrderDetailInfo(this.$store.getters.getAccountId,this.row.orderId).then(response =>{
                  this.data1 = response.data.details
            console.log(this.data1)
                  this.$nextTick(function(){
                    this.spinShow = false;
                  })

              }).catch(response =>{
                  this.$error(apiError,response.data.message)
                  this.spinShow = false;
              })
          }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../../common/css/globalscss";
  .good-table-expand{









   /* margin-left:-1%;
    display: flex;
    width:100%;
    position: relative;
    flex-wrap: wrap;
    .expand-row{
      margin-bottom: 16px;

    }
    .ivu-card{
      overflow: hidden;
      margin-top:1%;
      max-width:100%;
      flex:1 1 100%;
      position: relative;
    }
    .good-card{
      position: relative;
      display: flex;
      .left-content,.center-content{
        flex:1 1 48%;
      }
      .right-content{
        flex:1 1 20%;
      }
      .good-img{
        width:85px;
        height:85px;
      }
      .center-content{
        font-size:14px;
        .top-content {
          line-height:1.6;
          div{
            word-break: keep-all;
          }
        }
        .bottom-content{
          display: flex;
          .center-color-size{
            display: flex;
            margin:0 auto;
          }
          .size-content{
            width: 65px;
            height:25px;
            padding: 3px;
            border: 1px solid $menuSelectFontColor;
            font-size:12px;
            margin-top:3px;
            border-radius:3px;
            margin-left:2px;
            background: $menuSelectFontColor;
            color: #fff;
            text-align: center;
          }
        }
      }
      .center-content,.right-content{
        line-height:140%;
      }
      .right-content{
        font-size:16px;
        text-align: right;
        .count-content{
          color: #c1c2c3;
        }
        .returnCount{
          color: #ff7300;
        }
      }
    }








    @media (min-width: 820px) {
        .ivu-card {
          flex:1 1 49%;
          max-width:49%;
          margin-left:1%;
          position: relative;
        }
    }

    @media (min-width: 1360px) {
      .ivu-card {
        position: relative;
        flex:1 1 32%;
        max-width:32%;
        margin-left:1%;
      }
    }


    @media (min-width: 1920px) {
      .ivu-card {
        position: relative;
        flex:1 1 24%;
        max-width:24%;
        margin-left:1%;
      }
    }

    @media (min-width: 2560px) {
      .ivu-card {
        position: relative;
        flex:1 1 19%;
        max-width:19%;
        margin-left:1%;
      }
    }
    @media (min-width: 3440px) {
      .ivu-card {
        position: relative;
        flex:1 1 15.5%;
        max-width:15.5%;
        margin-left:1%;
      }
    }
*/





  }




</style>
