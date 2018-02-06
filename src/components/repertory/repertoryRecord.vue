<template>
  <div class="repertory-record-html">
    <tool-bar>
      <Input v-model="goodsCode" placeholder="请输入货号或简称"></Input>
      <Button class="search-button" type="primary" @click="searchGoodS">搜索</Button>
    </tool-bar>
    <div class="goods-show">
      <div class="item" v-for="goods in goodsData">
        <div class="goods-img">
          <img :src="goods.productPic" alt="">
        </div>
        <div class="goods-introduction">
          <h4>{{goods.productName}}</h4>
          <div class="ids">商品id:{{goods.productId}}</div>
          <div class="number">货号:{{goods.productCode}}</div>
          <div class="count">库存数量:{{goods.count}}</div>
          <div class="operation">
            <Button type="warning" shape="circle" icon="compose" @click="checkRepertory(goods.productCode)"></Button>
          </div>
        </div>
      </div>
    </div>
    <Modal
      v-model="add"
      title="库存管理"
      @on-ok="ok"
      @on-cancel="cancel">
      <div class="goods-infor">
        <div class="goods-img">
          <img :src="goodsDetail.productPic" alt="">
        </div>
        <div class="goods-introduction">
          <h4>{{goodsDetail.productName}}</h4>
          <div class="ids">商品id:{{goodsDetail.productId}}</div>
          <div class="number">货号:{{goodsDetail.productCode}}</div>
        </div>
      </div>
      <div class="repertory-infor">
        <div class="detail" v-for="goodsSku in goodsSkuS">
          <Tag type="dot" class="color" color="#00EEEE">{{goodsSku.colorName}}</Tag>
          <Tag checkable class="size" color="blue">{{goodsSku.sizeName}}</Tag>
          <InputNumber :min="1" v-model="goodsSku.amount" class="truth-total"></InputNumber>
        </div>
      </div>
      <Button id="add-repertory" class="" @click="addRepertoryInformation" type="primary" shape="circle"
              icon="plus-round"></Button>
    </Modal>

    <footer>
      <Page :total="pageTotal" :page-size="pageSize" class="footer-page" @on-change="pageChange"></Page>
    </footer>

    <my-drawer :open="repertoryAddOpen" title="库存添加" @close-drawer="repertoryAddOpen=false"
               @complate-drawer="myDrawerConfirm">
      <div class="add-repertory">
        <Card>
          <p slot="title">
            <Icon type="crop"></Icon>
            请选择颜色
          </p>
          <ul>
            <Tag type="dot" closable color="blue">蓝色</Tag>
            <Tag type="dot" closable color="green">绿色</Tag>
          </ul>
        </Card>
        <Card class="hn-ui-margin">
          <p slot="title">
            <Icon type="contrast"></Icon>
            请选择颜色
          </p>
          <ul>
            <Tag type="dot" closable color="blue">XXL</Tag>
            <Tag type="dot" closable color="green">XL</Tag>
          </ul>
        </Card>
        <Card class="hn-ui-margin">
          <p slot="title">
            <Icon type="code-working"></Icon>
            请输入数量
          </p>
          <Input v-model="goodsCount" type="number" placeholder="请输入数量"></Input>
        </Card>
      </div>
    </my-drawer>
  </div>
</template>
<script>
  import myDrawer from '../../common/vue/myDrawer.vue';
  import toolBar from '../../common/vue/toolBar.vue';
  import repertoryRecordApi from '../../api/repertoryRecord';
  import colorManageApi from '../../api/colorManage';
  import sizeManageApi from '../../api/sizeManage';

  export default {
    props: {},
    data() {
      return {
        account: this.$store.getters.getAccountId,
        shopId: this.$store.getters.getShopId,
        goodsCode: '',
        pageSize: 10,
        pageNumber: 1,
        pageTotal: 60,
        add: false,
        goodsCount: 1,
        repertoryAddOpen: false,
        // 库存展示的信息数组
        goodsData: [],
        goodsSkuS: [],
        goodsDetail: {},
        // 添加库存的信息数组
        addRepertoryArray: [
          {
            name: '',
            size: '',
            color: '',
            total: ''
          }
        ],
        goodsInformation: {}
      };
    },
    created() {
      this.listAllGoods();
    },
    methods: {
      /**
       * 获取所有商品的库存
       */
      listAllGoods() {
        let account = this.$store.getters.getAccountId;
        let shopId = this.$store.getters.getShopId;
        let params = {
          index: this.pageNumber,
          size: this.pageSize
        };
        repertoryRecordApi.listAllGoods(account, params).then((rep) => {
          console.log(rep);
          /*let repertory = rep.data;
          this.pageTotal = repertory.totalElements;
          this.goodsData = repertory.content;*/
        }).catch((rep) => {
          this.$error(apiError, '获取全部商品出错!')
        })
      },
      addRepertoryInformation() {
        this.repertoryAddOpen = true;
      },
      myDrawerConfirm() {

      },
      checkRepertory(productCode) {
        this.add = true;
        repertoryRecordApi.getSingleGoods(this.account, this.shopId, productCode).then((rep) => {
          this.goodsSkuS = rep.data.skus;
          this.goodsDetail = rep.data.product;
        }).catch((rep) => {
          this.$error(apiError, '获取商品SKU出错!')
        })
      },
      pageChange(page) {
        this.pageNumber = page;
        this.listAllGoods();
      },
      searchGoodS() {
        if (this.goodsCode === '') {
          this.listAllGoods();
        } else {
          repertoryRecordApi.getSingleGoods(this.account, this.shopId, this.goodsCode).then((rep) => {
            this.goodsData = [];
            this.goodsData.push(rep.data.product);
          }).catch((rep) => {
            this.$error(apiError, '搜索商品出错!')
          })
        }
      },
      ok() {
      },
      cancel() {
      }
    },
    components: {
      myDrawer,
      toolBar
    }
  };
</script>
<style lang="scss" rel="stylesheet/scss" type="text/scss">
  @import '../../common/css/globalscss.scss';

  .repertory-record-html {
    width: 100%;
    display: flex;
    flex-direction: column;
    .goods-show {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      margin-left: -2%;
      .item {
        display: flex;
        width: 23%;
        padding: 15px;
        height: 130px;
        font-size: 14px;
        margin: {
          top: 8px;
          left: 2%;
        }
        background-color: #f8f6f2;
        .goods-img {
          img {
            width: 100px;
            height: 100px;
          }
        }
        .goods-introduction {
          margin-left: 14px;
          h4 {
            font-size: 12px;
            margin-top: 3px;
            font-weight: 600;
          }
          .ids {
            color: rgba(0, 0, 0, 0.4);
            font-size: 12px;
            margin-top: 7px;
          }
          .number, .count {
            color: rgba(0, 0, 0, 0.4);
            font-size: 12px;
            margin-top: 5px;
          }
          .operation {
            color: rgba(0, 0, 0, 0.4);
            margin-top: 5px;
            .add {
              margin-left: 14px;
            }
          }
        }
      }
    }
    footer {
      .footer-page {
        text-align: right;
      }
    }
  }

  .repertory-infor {
    .detail {
      display: flex;
      padding: 8px;
      border-bottom: 1px solid #f8f6f2;
      .size, .total, .truth-total {
        margin-left: 20px;
      }
      .size {
        width: 70px;
        text-align: center;
      }

      .total {
        margin-top: 1px;
      }
      .size, .total {
        height: 32px;
        line-height: 32px;
        padding: 0 15px;
      }
      .truth-total {
        margin-top: 1px;
      }
    }
  }

  .goods-infor {
    display: flex;
    .goods-img {
      img {
        width: 85px;
        height: 85px;
      }
    }
    .goods-introduction {
      margin-left: 32px;
      h4 {
        font-size: 16px;
        font-weight: 600;
      }
      .ids, .number {
        font-size: 14px;
        margin-top: 8px;
        color: rgba(0, 0, 0, 0.4);
      }
    }
  }

  #add-repertory {
    position: absolute;
    bottom: 90px !important;
    right: 30px !important;
  }

  .add-repertory {
    padding: 8px;
    width: 100%;
    .hn-ui-margin {
      margin: {
        top: 8px;
      }
    ;
    }
  }

  .search-button {
    margin-left: 8px;
  }

</style>
