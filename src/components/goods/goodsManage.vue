<template>
    <div id="goodsManage">
      <div class="add-store-btn">
        <Input v-model="searchGoodsInfo" placeholder="请输入货号或简称" style="margin-right: .5%;" ></Input>
        <Button type="primary" icon="ios-search" @click.native="searchGoods"  style="margin-right: .5%;">搜索</Button>
        <Button type="primary" icon="plus-round" @click.native="addNewGoods">添加新商品</Button>
      </div>


      <div class="goods-content">

        <Card v-for="item in goodsData">

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

      <Page :total="100" style="margin-top: 5px;"></Page>


      <my-drawer :open="open" title="商品状态管理"    @close-drawer="open=false" @complate-drawer="complateDrawer">
        <div class="goods-status-content">
          <div class="goods-code">
            系统货号&nbsp;&nbsp;{{goodsItem.product_code}}
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
                searchGoodsInfo:null,
                goodsItem:{
                    product_code:19172525,
                },
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
            'my-drawer':myDrawer
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
  #goodsManage{
    width:100%;
    position: relative;
    .add-store-btn{
      display: flex;
      margin-bottom:5px;
    }
    .ivu-card{
      width:24%;
      .ivu-card-body{
        padding-bottom:6px;
      }
    }
    .goods-content{
      display: flex;
      flex-wrap: wrap;
      .ivu-card{
        width:24%;
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
      .ivu-card:not(:nth-child(5n)):not(:first-child){
        margin-left:1%;
      }
      .ivu-card:nth-child(5n),.ivu-card:first-child{
        margin-left:.5%;
      }
      .ivu-card:not(:nth-child(1)):not(:nth-child(2)):not(:nth-child(3)):not(:nth-child(4)){
        margin-top:1%;
      }
    }
  }
</style>
