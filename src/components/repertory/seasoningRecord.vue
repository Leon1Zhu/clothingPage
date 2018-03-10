<template>
  <div class="seasoning-record">
    <tool-bar>
      <Input v-model="goodsNumber" placeholder="请输入货号或简称"></Input>
      <Col class="left-eight">
      <DatePicker :value="searchDataTime" type="daterange" placement="bottom-end" placeholder="选择日期"
                  style="width: 200px"></DatePicker>
      </Col>
      <Button class="search-button" icon="ios-search" type="primary">搜索</Button>
    </tool-bar>
    <div class="goods-show">
      <div class="item" v-for="goods in goodsData">
        <div class="goods-img">
          <img :src="goods.productPic" class="html-cursor" @click="imageShow=true,imgUrl=goods.productPic" alt="">
        </div>
        <div class="goods-introduction">
          <div class="code">货号:{{goods.productCode}} / {{goods.productCode2}}</div>
          <div class="name">简称:{{goods.productName}}</div>
          <div class="color">颜色:{{goods.colorName}}</div>
          <div class="size">尺码:{{goods.sizeName}}</div>
          <div class="counts">数量:{{goods.dispatchAmount}}</div>
          <div class="operation-btn">
            <Button v-if="goods.dispatchFromIsok === '1'" size="small">完成调货
            </Button>

            <Button v-if="goods.dispatchFromIsok !== '1'&&goods.dispatchFromShop === account" type="info" size="small"
                    @click="sureSeasoningRecord(goods.dispatchId)">确认调出
            </Button>
            <Button v-if="goods.dispatchFromIsok !== '1'&&goods.dispatchToShop === account" type="primary" size="small"
                    @click="sureSeasoningRecord(goods.dispatchId)">确认调入
            </Button>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <Page :total="goodTotal" :page-size="goodPageSize" class="footer-page" @on-change="pageChange"></Page>
    </footer>
    <Modal
      v-model="imageShow"
      title="图片展示">
      <img :src="imgUrl" alt="">
      <div slot="footer">
      </div>
    </Modal>
  </div>
</template>
<script>
  import toolBar from '../../common/vue/toolBar.vue';
  import seasoningApi from '../../api/seasoningRecord';

  export default {
    props: {},
    data() {
      return {
        account: this.$store.getters.getAccountId,
        shopId: this.$store.getters.getShopId,
        imageShow: false,
        imgUrl: '',
        goodTotal: '100',
        goodPageSize: '20',
        goodIndex: 0,
        goodsNumber: '',
        searchDataTime: '',
        goodsData: [],
      };
    },
    created() {
      this.listSeasoningRecord();
    },
    methods: {
      listSeasoningRecord() {
        let params = {
          shopId: this.shopId,
          keyword: '',
          index: this.goodIndex,
          size: this.goodPageSize
        };
        seasoningApi.listSeasoningRecord(this.account, params).then((rep) => {
          this.goodsData = rep.data.content;
          this.goodTotal = rep.data.totalElements;
        }).catch((rep) => {
          this.$error(apiError, '获取调货记录失败！')
        });
      },
      sureSeasoningRecord(dispatchId) {
        let params = {
          shopId: this.shopId,
          dispatchId
        };
        seasoningApi.sureSeasoningRecordUrl(this.account, params).then((rep) => {
        }).catch((rep) => {
          this.$error(apiError, '调货确认失败！');
        });
      },
      pageChange(page) {
        this.goodIndex = parseInt(page) - 1;
        this.listSeasoningRecord();
      }
    },
    components: {toolBar}
  };
</script>
<style lang="scss" rel="stylesheet/scss" type="text/scss">
  @import '../../common/css/globalscss.scss';

  .search-button {
    margin-left: 8px;
  }

  .left-eight {
    margin-left: 8px;
  }

  .seasoning-record {
    .item {
      width: 100%;
      padding: 15px;
      height: 80px;
      font-size: 14px;
      margin: {
        top: 8px;
        left: 2%;
      }
      background-color: #f8f6f2;
      border: 1px solid rgba(34, 36, 38, .15);
      display: flex;
      &:hover {
        box-shadow: 0 2px 4px 0 rgba(34, 36, 38, .12), 0 2px 10px 0 rgba(34, 36, 38, .15);
      }
      .goods-img {
        img {
          width: 50px;
          height: 50px;
        }
      }
      .goods-introduction {
        margin-left: 14px;
        flex: 1;
        display: flex;
        line-height: 50px;
        .code, .name, .color, .size, .counts {
          flex: 1;
          font-size: 14px;
        }
        .operation-btn {
          font-size: 14px;
          width: 120px;
        }
      }
    }
    footer {
      margin-top: 8px;
      .footer-page {
        text-align: right;
      }
    }
    .left-eight {
      .ivu-input:hover, .ivu-input:focus {
        width: 200px !important;
      }
    }
  }

</style>
