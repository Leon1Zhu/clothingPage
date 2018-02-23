<template>
  <div class="repertory-record-html">
    <div class="top-content">
      <tool-bar>
        <Input v-model="goodsCode" placeholder="请输入货号或简称"></Input>
        <Button class="search-button" icon="ios-search" type="primary" @click="searchGoodS">搜索</Button>
      </tool-bar>
      <div class="goods-show">
        <div class="record-item" v-for="goods in goodsData">
          <div class="goods-infor">
            <div class="goods-img">
              <img :src="imgUrl" alt="">
            </div>
            <div class="goods-introduction">
              <h4>三叶草卫衣(加绒)</h4>
              <div class="ids">商品id:4544</div>
              <div class="number">货号:5456</div>
            </div>
          </div>
          <div class="repertory-infor">
            <div class="detail">
              <Tag type="dot" class="color" @on-close="handleClose" color="#00EEEE">淡蓝</Tag>
              <Tag class="size" color="#06b9a5">M</Tag>
              <span class="total">0</span>
              <span class="repertory-add-btn html-cursor" @click="repertoryAddOpen = true"><Icon color="#06b9a5"
                                                                                                 type="edit"></Icon></span>
            </div>
            <div class="detail">
              <Tag type="dot" class="color" @on-close="handleClose" color="#00EEEE">淡蓝</Tag>
              <Tag class="size" color="#06b9a5">XL</Tag>
              <span class="total">0</span>
              <span class="repertory-add-btn html-cursor" @click="repertoryAddOpen = true"><Icon color="#06b9a5"
                                                                                                 type="edit"></Icon></span>
            </div>
            <div class="detail">
              <Tag type="dot" class="color" @on-close="handleClose" color="#00EEEE">淡蓝</Tag>
              <Tag class="size" color="#06b9a5">XXL</Tag>
              <span class="total">0</span>
              <span class="repertory-add-btn html-cursor" @click="repertoryAddOpen = true"><Icon color="#06b9a5"
                                                                                                 type="edit"></Icon></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <Page :total="pageTotal" :page-size="pageSize" class="footer-page" @on-change="pageChange"></Page>
    </footer>

    <my-drawer :open="repertoryAddOpen" title="库存添加" @close-drawer="repertoryAddOpen=false"
               @complate-drawer="myDrawerConfirm">
      <div class="add-repertory">
        <div class="store-item">
          <div class="left-content">
            <div class="store-item-label">库存数量<span class="red-star">*</span></div>
          </div>
          <div class="right-content">
            <Input v-model="sizeName" class="input-width" placeholder="正数增加|负数减少"></Input>
          </div>
        </div>
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
        imgUrl: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
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
        goodsData: [
          {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
          }
        ],
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
      /*this.listAllGoods();*/
    },
    methods: {
      /**
       * 获取所有商品的库存
       */
      /*listAllGoods() {
        let account = this.$store.getters.getAccountId;
        let shopId = this.$store.getters.getShopId;
        let params = {
          index: this.pageNumber,
          size: this.pageSize
        };
        repertoryRecordApi.listAllGoods(account, params).then((rep) => {
          let repertory = rep.data;
          this.pageTotal = repertory.totalElements;
          this.goodsData = repertory.content;
        }).catch((rep) => {
          this.$error(apiError, '获取全部商品出错!')
        })
      },*/
      addRepertoryInformation() {
        this.repertoryAddOpen = true;
      },
      myDrawerConfirm() {

      },
      checkRepertory(productCode) {
        this.add = true;
        /*repertoryRecordApi.getSingleGoods(this.account, this.shopId, productCode).then((rep) => {
          this.goodsSkuS = rep.data.skus;
          this.goodsDetail = rep.data.product;
        }).catch((rep) => {
          this.$error(apiError, '获取商品SKU出错!')
        })*/
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
    height: 100%;
    display: flex;
    flex-direction: column;
    .top-content {
      height: 94%;
      overflow-y: auto;
    }
    .goods-show {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      margin-left: -2%;
      .record-item {
        display: flex;
        width: 540px;
        padding: 15px;
        height: 150px;
        font-size: 14px;
        margin: {
          top: 8px;
          left: 2%;
        }
        background-color: #f8f6f2;
        .repertory-infor {
          margin-left: 14px;
          .detail {
            display: flex;
            padding: 2px;
            border-bottom: 1px solid #f8f6f2;
            .repertory-add-btn {
              margin-top: 8px;
              margin-left: 18px;
            }
            .size, .total {
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
              padding: 0 8px;
            }
          }
        }

        .goods-infor {
          display: flex;
          flex: 1;
          .goods-img {
            img {
              width: 120px;
              height: 120px;
            }
          }
          .goods-introduction {
            margin-left: 14px;
            flex: 1;
            h4 {
              font-size: 14px;
              margin-top: 25px;
              font-weight: 600;
            }
            .ids {
              color: rgba(0, 0, 0, 0.4);
              font-size: 12px;
              margin-top: 15px;
            }
            .number {
              color: rgba(0, 0, 0, 0.4);
              font-size: 12px;
              margin-top: 15px;
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
    }
    footer {
      .footer-page {
        margin-top: 8px;
        text-align: right;
      }
    }
  }

  .search-button {
    margin-left: 8px;
  }

  .store-item {
    padding: 5px 0px;
    border-bottom: 1px solid $formLabelBorderBottomColor;
    display: flex;
    .left-content {
      display: flex;
      flex: 1;
      line-height: 200%;
    }
    .right-content {
      text-align: right;
      .input-width {
        width: 82%;
      }
    }
  }

</style>
