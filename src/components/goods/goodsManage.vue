<template>
    <div id="goodsManage">
      <tool-bar>
        <Input v-model="searchGoodsInfo" placeholder="请输入货号或简称" style="margin-right: .5%;" ></Input>
        <Button type="primary" icon="ios-search" @click.native="searchGoods"  style="margin-right: .5%;">搜索</Button>
        <Button type="primary" icon="plus-round" @click.native="addNewGoods">添加新商品</Button>
      </tool-bar>


      <div class="goods-content">

        <Card v-for="item in goodsData" class="goods-info-card">

          <div class="goods-img">
            <img  :src="item.productPic" alt="商品图片地址错误">
          </div>

          <div class="goods-desc">
            <p class="goods-name" >
              {{item.productName}}
            </p>
            <div class="goods-other-info">
              <p>商品ID:<span>{{item.productCode}}<span style="display: inline-block;margin: 0 3px;">/</span>{{item.productCode2}}</span></p>
            </div>

          </div>

          <div class="goods-price" >
            <span>￥</span>
            <span style="font-size: 20px;">{{item.productPrice1}}</span>
          </div>

          <div class="goods-operator">
            <Button class="change_status" type="primary" shape="circle" icon="edit" @click.native="changeProductInfo(item)"></Button>
            <Button class="change_goodsinfo" type="primary" shape="circle" icon="ios-gear" @click.native="openChangeStatusDrawer(item)"></Button>
            <Button class="delete_goods " type="primary" shape="circle"icon="trash-a" @click.native="deleteProduct(item.productId)"></Button>
            <Button class="goods-qr-code ivu-btn-icon-only" type="primary" shape="circle" ><i class="iconfont  icon-erweima" ></i></Button>
            <Button class="goods-dayin-code ivu-btn-icon-only" type="primary" shape="circle" ><i class="iconfont  icon-dayin" ></i></Button>
          </div>

        </Card>

      </div>

      <Page :total="100" style="margin-top: 5px;text-align: right"></Page>


      <my-drawer :open="open" title="商品状态管理"    @close-drawer="closeStatusDrawer" >
        <div class="goods-status-content">
          <div class="goods-code">
            系统货号&nbsp;&nbsp;{{changeStatuProductId}}
          </div>
          <div class="status-content">
            <Card  v-for="item in data1" class="status-card">
              <div class="good-card">
                <div class="left-content">
                  <img class="good-img" :src="changeStatuProductImgSrc" alt="商品图片地址错误">
                </div>
                <div class="center-content">
                  <div class="top-content">
                    <div>商品名称:{{changeStatuProductName}}</div>
                  </div>
                  <div class="bottom-content">
                    <div class="center-color-size">
                      <color-content :colorName="item.colorName" ></color-content>
                      <div class="size-content">
                        {{item.sizeName}}
                      </div>
                    </div>
                  <div class="btn-content">
                    <Button type="ghost" :class="{'active' : item.skuStatus === '上架'}"  @click.native="changStatus(item,'上架')">上架</Button>

                    <Button type="ghost" :class="{'active' : item.skuStatus === '下架'}" @click.native="changStatus(item,'下架')">下架</Button>

                    <Button type="ghost" :class="{'active' : item.skuStatus === '缺货'}" @click.native="changStatus(item,'缺货')">缺货</Button>
                  </div>
                </div>
                </div>
                <div class="right-content">
                </div>
              </div>
            </Card>

            <div class="batch_setting">
              <div class="left-content">
                <Button  :class="{'active':batchSet}" type="primary" shape="circle" icon="checkmark" size="small" @click.native="batchSet = !batchSet"></Button>
                <span>批量设置</span>
              </div>
              <div class="right-content">
                <Button type="ghost"  @click.native="batchChangeStatus('上架')">上架</Button>

                <Button type="ghost"  @click.native="batchChangeStatus('下架')">下架</Button>

                <Button type="ghost"  @click.native="batchChangeStatus('缺货')">缺货</Button>
              </div>
            </div>

          </div>
        </div>
      </my-drawer>
      <goods-drawer @complate-product="complateDrawer" :productInfo="productChangeInfo"  :btnFont="btnFont" :goodsAddOpen="goodsAddOpen"  @closeGoodsDrawer="closeGoodsDrawer"></goods-drawer>
      <deleteModel :open="deleteOpendModelFlag" title="商品删除确认" :deleteInfo="'确认删除商品['+deleteProductItem.productName+']吗？'"></deleteModel>
    </div>
</template>

<script>
  import myDrawer from'../../common/vue/myDrawer.vue'
  import colorContent from '../../common/vue/colorContent.vue'
  import toolBar from '../../common/vue/toolBar.vue'
  import goodsDrawer from './goodsDrawer.vue'
  import goodApi  from '../../api/goodsManage'
  import deleteModel from '../../common/vue/deleteModel.vue'
  let changeStatusProduct=null;
    export default{
        data(){
            return {
                productChangeInfo:null,
                deleteOpendModelFlag:false,
                batchSet:true,
                changeStatuProductId:null,
                changeStatuProductImgSrc:null,
                changeStatuProductName:null,
                deleteProductItem:{},
                goodsAddOpen:false,
                open:false,
                searchGoodsInfo:null,
                btnFont:'新增',
                /*goodsItem:{
                },*/
                total:0,
                index:0,
                pageSize:10,
                data1:[],
                goodsData:[],
            }
        },
        components: {
            'my-drawer':myDrawer,
            'color-content':colorContent,
            'tool-bar':toolBar,
            'goods-drawer':goodsDrawer,
            deleteModel,
        },
        created(){
            this.getAllGoodsList()
        },
        mounted(){
            let that = this;
          window.onresize = function(){
            setTimeout(function() {
              that.resizeHeight();
            },200)
          }

        },
        computed:{
           accountId(){
               return this.$store.getters.getAccountId;
           }
        },
        methods: {
          resizeHeight(){
              let dom =document.getElementsByClassName('goods-img')
              Array.prototype.forEach.call(dom,function(item,index){
                item.style.maxHeight =item.clientWidth+'px';
              })
          },
          openChangeStatusDrawer(value){
              changeStatusProduct = value;
              this.open = true;
              goodApi.getProductionDetailInfo(this.accountId,value.productId).then(response =>{
                this.changeStatuProductId = value.productId;
                this.changeStatuProductImgSrc = value.productPic;
                this.changeStatuProductName = value.productName;
                this.data1 = response.data.skus;
              }).catch(response =>{
                this.$error(apiError,'获取商品SKU列表出错');
              })
          },
          changStatus(item,status){
              if(item.skuStatus === status){
                  return;
              }
            goodApi.changeSkuStatus(this.accountId,item.id,status).then(response =>{
                item.skuStatus = status;
                this.$success(opeartorSuccess,'SKU状态设置成功！')
            }).catch(response =>{
                this.$error(operatorError,response.data.message)
            })

          },
          //批量设置方法
          batchChangeStatus(value){
              if(this.batchSet){
                  this.$warning(operatorError,'请先勾选确认按钮再重复此操作！');
                  return
              }
              goodApi.batchChangeProductStatus(this.accountId,this.changeStatuProductId,value).then(response=>{
                 this.openChangeStatusDrawer(changeStatusProduct)
                this.$success(opeartorSuccess,'批量设置['+value+']状态成功。');
              }).catch(response => {
                this.$error(operatorError,response.data.message)
              })
          },
          //删除商品方法
          deleteProduct(productId){
            /*goodApi.*/
          },
          closeStatusDrawer(){
              this.open = false;
              this.changeStatuProductId = null;
              this.changeStatuProductImgSrc = null;
              this.changeStatuProductName = null;
              this.batchSet = true;
              changeStatusProduct = null;
          },
          getAllGoodsList(){
            goodApi.getAllProduction(this.accountId,this.index,this.pageSize).then(response =>{
                this.goodsData = response.data.content;
                this.total = response.data.totalElements
                this.$nextTick(function(){
                  this.resizeHeight()
                })
            }).catch(response =>{
                this.$error(apiError,'获取商品列表出错');
            })
          },
          addNewGoods(){
            this.productChangeInfo = null;
              this.goodsAddOpen = true;
              this.btnFont='新增';
          },
          changeProductInfo(item){
            this.productChangeInfo = item;
            this.goodsAddOpen = true;
            this.btnFont='修改'
          },
          searchGoods(){

          },
          //商品新增完成
          complateDrawer(){
              this.open = false;
          },
          closeGoodsDrawer(){
              this.goodsAddOpen = false;
          }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../common/css/globalscss";
  #goodsManage{
    height:100%;
    width:100%;
    overflow:auto;
    position: relative;
    ::-webkit-scrollbar {
      width: 8px;
      height: 15px;
    }

    ::-webkit-scrollbar-thumb:vertical {
      height: 88%;
      background-color: rgba(125, 125, 125, 0.7);
      -webkit-border-radius: 10px;
    }

    .goods-content{
      position: relative;
      overflow: auto;
      height:85%;
      height: calc( 100% - 96px);
      display: flex;
      flex-wrap: wrap;
      margin-left:-1%;
      align-items: flex-start;
      .ivu-card{
        width:32%;
        max-width:32%;
        position: relative;
        margin-left: 1%;
        margin-top:1%;
        .ivu-card-body{
          padding-bottom:6px;
        }
        .goods-img{
          min-height:225px;
          margin:0 auto;
          overflow: hidden;
          width:100%;
          position: relative;
          img{
            display: inline;
            width:100%;
          }
        }
        .goods-desc{
          margin-top:10px;
          .goods-name{
            font-size:16px;
          }
          .goods-other-info{
            margin: 8px 0px;
            color: rgba(0,0,0,.4);
          }
        }
        .goods-price{
          color: red;
          border-bottom: 1px solid #f5f4f5;
          padding-bottom: 3px;
          margin-bottom: 5px;
        }
        .goods-operator{
          .ivu-btn{
            border: none;
            cursor: pointer;
          }
          .change_status{
            background-color: $menuSelectFontColor;
          }
          .change_goodsinfo{
            background: #f8ab48;
          }
          .delete_goods{
            background: #72c6f2;

          }
          .goods-qr-code{
            background: #598aea;
          }
          .goods-dayin-code{
            background: #4d66ac;
          }
          .change_goodsinfo,.delete_goods,.goods-qr-code, .goods-dayin-code{
            margin-left:5px;
          }
        }

      }


      @media (min-width: 620px) {
        .ivu-card {
          width:32%;
          max-width:32%;
        }
        .goods-info-card:nth-child(n):nth-child(-n+3){
          margin-top:0!important;
        }
      }
      @media (min-width: 1280px) {
        .ivu-card {
          width:24%;
          max-width:24%;
        }
        .goods-info-card:nth-child(n):nth-child(-n+4){
          margin-top:0!important;
        }
      }
      @media (min-width: 1620px) {
        .ivu-card {
          width:19%;
          max-width:19%;
        }
        .goods-info-card:nth-child(n):nth-child(-n+5){
          margin-top:0!important;
        }
      }
      @media (min-width: 1920px) {
        .ivu-card {
          width:15.65%;
          max-width:15.65%;
        }
        .goods-info-card:nth-child(n):nth-child(-n+6){
          margin-top:0!important;
        }
      }

      @media (min-width: 2220px) {
        .ivu-card {
          width:13.28%;
          max-width:13.28%;
        }
        .goods-info-card:nth-child(n):nth-child(-n+7){
          margin-top:0!important;
        }
      }
    }



    .goods-code{
      text-align: center;
      color: #aeaeae;
      padding:16px;
      margin:0 -5px;
      background: #f6f5f8;
      border-bottom: 1px solid #f5f4f5;
      font-size:18px;
    }

    .status-card{
      border:none;
      border-bottom:1px solid #f5f4f5;
    }
    .good-card{
      position: relative;
      display: flex;
      .left-content{
        text-align: center;
        width:30%;
      }
      .good-img{
        width:85px;
        height:85px;
      }
      .center-content{
        flex:1;
        margin-left:3px;
        font-size:14px;
        .bottom-content{
          display: flex;
          flex-wrap: wrap;
          margin-top:10px;
          .center-color-size{
            display: flex;
          }
          .size-content{
            width: 61px;
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
          .ivu-btn{
            height: 25px;
            font-size: 12px;
            padding: 3px;
            width: 55px;
            margin-left:4px;
          }
        }
      }
      .center-content,.right-content{
        line-height:140%;
      }
    }
    .btn-content{
      margin-top:7px;
      flex:1;
      display: flex;
      justify-content: flex-end;
    }
    .right-content,.bottom-content {
      .ivu-btn {
        font-size: 12px;
      }
      .ivu-btn:hover,.ivu-btn.active {
        background: $menuSelectFontColor;
        color: #fff !important;
        opacity: 1;
      }
    }
    .batch_setting{
      display: flex;
      padding:16px 16px 5px 16px;
      .ivu-btn-primary.active{
        background-color: #ccc;
        border-color: #ccc;
      }
      .left-content{
        button{
          margin-top:3px;
        }
        span{
          font-size: 16px;
          color: #b3b3b3;
          position: relative;
          top: 3px;
        }
      }
      .right-content{
        flex:1;
        text-align: right;
      }
    }
  }
</style>
