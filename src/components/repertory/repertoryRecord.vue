<template>
  <div class="repertory-record-html">
    <Input class="search" v-model="goodsNumber" placeholder="请输入货号或简称"></Input>
    <div class="goods-show">
      <div class="item">
        <div class="goods-img">
          <img src="./1.jpg" alt="">
        </div>
        <div class="goods-introduction">
          <h4>三叶草卫衣</h4>
          <div class="ids">商品id:454564</div>
          <div class="number">货号:5456</div>
          <div class="operation">
            <Icon type="gear-b" class="check" color="red"></Icon>
            <Icon type="compose" class="add" color="blue"></Icon>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="goods-img">
          <img src="./1.jpg" alt="">
        </div>
        <div class="goods-introduction">
          <h4>三叶草卫衣</h4>
          <div class="ids">商品id:454564</div>
          <div class="number">货号:5456</div>
          <div class="operation">操作:5456</div>
        </div>
      </div>
      <div class="item">
        <div class="goods-img">
          <img src="./1.jpg" alt="">
        </div>
        <div class="goods-introduction">
          <h4>三叶草卫衣</h4>
          <div class="ids">商品id:454564</div>
          <div class="number">货号:5456</div>
          <div class="operation">操作:5456</div>
        </div>
      </div>
      <div class="item">
        <div class="goods-img">
          <img src="./1.jpg" alt="">
        </div>
        <div class="goods-introduction">
          <h4>三叶草卫衣</h4>
          <div class="ids">商品id:454564</div>
          <div class="number">货号:5456</div>
          <div class="operation">操作:5456</div>
        </div>
      </div>
      <div class="item">
        <div class="goods-img">
          <img src="./1.jpg" alt="">
        </div>
        <div class="goods-introduction">
          <h4>三叶草卫衣</h4>
          <div class="ids">商品id:454564</div>
          <div class="number">货号:5456</div>
        </div>
      </div>
    </div>
    <footer>
      <Page :total="100" class="footer-page"></Page>
    </footer>
  </div>
</template>
<script>
  export default {
    props: {},
    data() {
      return {
        goodsNumber: ''
      };
    },
    methods: {},
    components: {}
  };
</script>
<style lang="scss" rel="stylesheet/scss" type="text/scss">
  .repertory-record-html {
    padding: 8px;
    width: 100%;
    display: flex;
    flex-direction: column;
    .search {
      width: 94%;
      margin-left: 3%;
    }
    .goods-show {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      padding: 8px;
      .item {
        display: flex;
        width: 230px;
        padding: 17.5px;
        height: 120px;
        font-size: 14px;
        margin: {
          top: 8px;
          left: 15px;
        }
        background-color: #f8f6f2;
        .goods-img {
          img {
            width: 85px;
            height: 85px;
          }
        }
        .goods-introduction {
          margin-left: 14px;
          h4 {
            font-size: 16px;
            margin-top: 3px;
            font-weight: 600;
          }
          .ids {
            color: rgba(0, 0, 0, 0.4);
            margin-top: 12px;
          }
          .number {
            color: rgba(0, 0, 0, 0.4);
            margin-top: 5px;
          }
          .operation {
            color: rgba(0, 0, 0, 0.4);
            margin-top: 8px;
            .add {
              margin-left: 14px;
            }
          }
        }
      }
    }
    footer {
      .footer-page {
        margin-left: 35%;
      }
    }
  }
</style>
