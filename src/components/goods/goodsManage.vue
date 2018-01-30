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
            <img :src="item.product_pic">
          </div>

          <div class="goods-desc">
            <p class="goods-name">
              {{item.product_name}}
            </p>
            <div class="goods-other-info">
              <p>商品ID:<span>{{item.product_id}}</span></p>
              <p>货号:<span>{{item.product_code}}</span></p>
              <p>描述:<span>{{item.product_desc}}</span></p>
            </div>

          </div>

          <div class="goods-price" >
            <span>￥</span>
            <span style="font-size: 20px;">{{item.product_price}}</span>
          </div>

          <div class="goods-operator">
            <Button class="change_status" type="primary" shape="circle" icon="edit" @click.native="open=true"></Button>
            <Button class="change_goodsinfo" type="primary" shape="circle" icon="ios-gear"></Button>
            <Button class="delete_goods" type="primary" shape="circle" icon="trash-a"></Button>
          </div>

        </Card>

      </div>

      <Page :total="100" style="margin-top: 5px;text-align: right"></Page>


      <my-drawer :open="open" title="商品状态管理"    @close-drawer="open=false" @complate-drawer="complateDrawer">
        <div class="goods-status-content">
          <div class="goods-code">
            系统货号&nbsp;&nbsp;{{goodsItem.product_code}}
          </div>
          <div class="status-content">
            <Card  v-for="item in data1" class="status-card">
              <div class="good-card">
                <div class="left-content">
                  <img class="good-img" :src="item.img">
                </div>
                <div class="center-content">
                  <div class="top-content">
                    <div>商品名称:{{item.product_name}}</div>
                  </div>
                  <div class="bottom-content">
                    <div class="center-color-size">
                      <color-content :colorName="item.product_colors" :color="item.colorName"></color-content>
                      <div class="size-content">
                        {{item.product_sizes}}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="right-content">

                  <Button type="ghost" >上架</Button>

                  <Button type="ghost" >下架</Button>

                  <Button type="ghost" >缺货</Button>
                </div>
              </div>
            </Card>

            <div class="batch_setting">
              <div class="left-content">
                <Button type="primary" shape="circle" icon="checkmark" size="small"></Button>
                <span>批量设置</span>
              </div>
              <div class="right-content">
                <Button type="ghost" >上架</Button>

                <Button type="ghost" >下架</Button>

                <Button type="ghost" >缺货</Button>
              </div>
            </div>

          </div>
        </div>
      </my-drawer>


    </div>
</template>

<script>
  import myDrawer from'../../common/vue/myDrawer.vue'
  import colorContent from '../../common/vue/colorContent.vue'
  import toolBar from '../../common/vue/toolBar.vue'
    export default{
        data(){
            return {
                open:false,
                searchGoodsInfo:null,
                goodsItem:{
                    product_code:19172525,
                },
              data1:[
                {
                  img:'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
                  id:'892726252525/0905',
                  product_colors:'浅蓝色',
                  colorName:'#65cefa',
                  product_sizes:'均码',
                  product_name:'01016下口袋'
                },
                {
                  img:'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
                  id:'892726252525/0905',
                  product_colors:'浅蓝色',
                  colorName:'#65cefa',
                  product_sizes:'L',
                  product_name:'01016下口袋'
                },
                {
                  img:'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
                  id:'892726252525/0905',
                  product_colors:'浅蓝色',
                  colorName:'#65cefa',
                  product_sizes:'L',
                  product_name:'01016下口袋'
                },
                {
                  img:'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
                  id:'892726252525/0905',
                  product_colors:'浅蓝色',
                  colorName:'#65cefa',
                  product_sizes:'L',
                  product_name:'01016下口袋'
                },
                {
                  img:'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
                  id:'892726252525/0905',
                  product_colors:'浅蓝色',
                  colorName:'#65cefa',
                  product_sizes:'L',
                  product_name:'01016下口袋'
                },

              ],
                goodsData:[
                  {
                    product_id:'1142522',
                    product_name:'这是商品名称',
                    product_code:'x125',
                    product_pic:'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
                    product_price:'78',
                    product_desc:'这是一段商品描述',
                  },{
                    product_id:'1142522',
                    product_name:'这是商品名称',
                    product_code:'x125',
                    product_pic:'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
                    product_price:'78',
                    product_desc:'这是一段商品描述',
                  },{
                    product_id:'1142522',
                    product_code:'x125',
                    product_name:'这是商品名称',
                    product_pic:'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
                    product_price:'78',
                    product_desc:'这是一段商品描述',
                  },{
                    product_id:'1142522',
                    product_code:'x125',
                    product_name:'这是商品名称',
                    product_pic:'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
                    product_price:'78',
                    product_desc:'这是一段商品描述',
                  },{
                    product_id:'1142522',
                    product_code:'x125',
                    product_pic:'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
                    product_price:'78',
                    product_desc:'这是一段商品描述',
                  },{
                    product_id:'1142522',
                    product_code:'x125',
                    product_name:'这是商品名称',
                    product_pic:'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
                    product_price:'78',
                    product_desc:'这是一段商品描述',
                  },{
                    product_id:'1142522',
                    product_code:'x125',
                    product_name:'这是商品名称',
                    product_pic:'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
                    product_price:'78',
                    product_desc:'这是一段商品描述',
                  }
                ],
            }
        },
        components: {
            'my-drawer':myDrawer,
            'color-content':colorContent,
            'tool-bar':toolBar
        },
        created(){
        },
        mounted(){
        },
        methods: {
          addNewGoods(){
              this.open = true;

          },
          searchGoods(){

          },
          complateDrawer(){
              this.open = false;
          }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../common/css/globalscss";
  #goodsManage{
    width:100%;
    position: relative;
    .goods-content{
      display: flex;
      flex-wrap: wrap;
      margin-left:-1%;
      margin-top:-1%;
      .ivu-card{
        width:32%;
        max-width:32%;
        margin-left: 1%;
        margin-top:1%;
        .ivu-card-body{
          padding-bottom:6px;
        }
        .goods-img{
          width:100%;
          position: relative;
          img{
            width:100%;
          }
        }
        .goods-desc{
          .goods-name{
            font-size:16px;
          }
          .goods-other-info{
            line-height: 1.2;
            margin: 5px 0px;
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
          .change_status{
            background: #f8ab48;
            border-color: #f6a524;
          }
          .change_goodsinfo{
            background: #72c6f2;
            border-color: #c3e5f8;
          }
          .delete_goods{
            background: #4d66ac;
            border-color: #8d99c3;
          }
          .change_goodsinfo,.delete_goods{
            margin-left:5px;
          }
        }

      }


      @media (min-width: 620px) {
        .ivu-card {
          width:32%;
          max-width:32%;
        }
      }
      @media (min-width: 1280px) {
        .ivu-card {
          width:24%;
          max-width:24%;
        }
      }
      @media (min-width: 1620px) {
        .ivu-card {
          width:19%;
          max-width:19%;
        }
      }
      @media (min-width: 1920px) {
        .ivu-card {
          width:15.65%;
          max-width:15.65%;
        }
      }

      @media (min-width: 2220px) {
        .ivu-card {
          width:13.28%;
          max-width:13.28%;
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
      }
      .left-content,.center-content{
        flex:1 1 40%;
      }
      .right-content{
        flex:1 1 20%;
      }
      .good-img{
        width:85px;
        height:85px;
      }
      .center-content{
        margin-left:3px;
        font-size:14px;
        .bottom-content{
          display: flex;
          margin-top:10%;
          .center-color-size{
            display: flex;
            margin:0 auto;
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
        }
      }
      .center-content,.right-content{
        line-height:140%;
      }
    }
    .right-content {
      display:flex;
      align-items: center;
      margin-left: 3px;
      flex-wrap: nowrap;
      flex:1 1 60%;
      justify-content: flex-end;
      .ivu-btn {
        font-size: 12px;
      }
      .ivu-btn:hover {
        background: $menuSelectFontColor;
        color: #fff !important;
        opacity: 1;
      }
    }
    .batch_setting{
      display: flex;
      padding:16px 16px 5px 16px;
      .left-content{
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
