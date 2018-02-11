<template>
  <div class="hand-store-html">
    <tool-bar>
      <Input v-model="goodsNumber" placeholder="请输入货号或简称"></Input>
      <Button class="search-button" icon="ios-search" type="primary">搜索</Button>
      <Button class="search-button" type="primary">重新盘点</Button>
      <Button class="search-button" type="error">结束盘点</Button>
      <Button class="search-button" type="info" @click.native="storeRecord=true">盘点记录</Button>
    </tool-bar>
    <div class="goods-show">
      <div class="item" v-for="goods in goodsData" :class="{'active-gray':goods.flag == 0,
      'active-red':goods.flag == 1,
      'active-green':goods.flag == 2}">
        <div class="goods-img">
          <img :src="imgUrl" alt="">
        </div>
        <div class="goods-introduction">
          <h4>{{goods.name}}</h4>
          <div class="ids">商品id:{{goods.ids}}</div>
          <!--<div class="number">货号:{{goods.number}}</div>-->
          <div class="count">库存总量:{{goods.count}}</div>
          <div class="count">盘点总量:{{goods.count}}</div>
        </div>
        <div class="operation">
          <!--<Button type="primary" shape="circle" icon="gear-b" @click="check = true"></Button>-->
          <Button type="primary" shape="circle" icon="gear-a" @click="check = true"></Button>
        </div>
      </div>
    </div>
    <Modal
      v-model="check"
      title="手动盘点"
      @on-ok="ok"
      @on-cancel="cancel">
      <div class="goods-infor">
        <div class="goods-img">
          <img :src="imgUrl" alt="">
        </div>
        <div class="goods-introduction">
          <h4>三叶草卫衣</h4>
          <div class="ids">商品id:454564</div>
          <div class="number">货号:5456</div>
        </div>
      </div>
      <div class="repertory-infor">
        <div class="detail">
          <Tag type="dot" class="color" @on-close="handleClose" color="#00EEEE">淡蓝</Tag>
          <Tag class="size" color="#06b9a5">M</Tag>
          <InputNumber :min="1" v-model="value1" class="truth-total"></InputNumber>
        </div>
        <div class="detail">
          <Tag type="dot" class="color" @on-close="handleClose" color="#00EEEE">淡蓝</Tag>
          <Tag class="size" color="#06b9a5">XL</Tag>
          <InputNumber :min="1" v-model="value1" class="truth-total"></InputNumber>
        </div>
        <div class="detail">
          <Tag type="dot" class="color" @on-close="handleClose" color="#00EEEE">淡蓝</Tag>
          <Tag class="size" color="#06b9a5">XXL</Tag>
          <InputNumber :min="1" v-model="value1" class="truth-total"></InputNumber>
        </div>
      </div>
    </Modal>
    <footer>
      <Page :total="100" class="footer-page"></Page>
    </footer>
    <store-record :modalStatus="storeRecord" @close-record="storeRecord=false"></store-record>
  </div>
</template>
<script>
  import myDrawer from '../../common/vue/myDrawer.vue';
  import toolBar from '../../common/vue/toolBar.vue';
  import storeRecord from './storeRecord.vue';

  export default {
    props: {},
    data() {
      return {
        storeRecord: false,
        goodsNumber: '',
        check: false,
        add: false,
        value1: 1,
        imgUrl: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
        // 库存展示的信息数组
        goodsData: [
          {
            imageUrl: './1.jpg',
            name: '三叶草卫衣',
            ids: '454564',
            number: '5456',
            count: 454,
            flag: 2
          },
          {
            imageUrl: './1.jpg',
            name: '三叶草卫衣',
            ids: '454564',
            number: '5456',
            count: 454,
            flag: 2

          },
          {
            imageUrl: './1.jpg',
            name: '三叶草卫衣',
            ids: '454564',
            number: '5456',
            count: 454,
            flag: 2

          },
          {
            imageUrl: './1.jpg',
            name: '三叶草卫衣',
            ids: '454564',
            number: '5456',
            count: 454,
            flag: 2

          },
          {
            imageUrl: './1.jpg',
            name: '三叶草卫衣',
            ids: '454564',
            number: '5456',
            count: 454,
            flag: 2

          },
          {
            imageUrl: './1.jpg',
            name: '三叶草卫衣',
            ids: '454564',
            number: '5456',
            count: 454,
            flag: 2

          }, {
            imageUrl: './1.jpg',
            name: '三叶草卫衣',
            ids: '454564',
            number: '5456',
            count: 454,
            flag: 2

          }, {
            imageUrl: './1.jpg',
            name: '三叶草卫衣',
            ids: '454564',
            number: '5456',
            count: 454,
            flag: 0

          }, {
            imageUrl: './1.jpg',
            name: '三叶草卫衣',
            ids: '454564',
            number: '5456',
            count: 454,
            flag: 0

          }, {
            imageUrl: './1.jpg',
            name: '三叶草卫衣',
            ids: '454564',
            number: '5456',
            count: 454,
            flag: 0

          }, {
            imageUrl: './1.jpg',
            name: '三叶草卫衣',
            ids: '454564',
            number: '5456',
            count: 454,
            flag: 0

          }, {
            imageUrl: './1.jpg',
            name: '三叶草卫衣',
            ids: '454564',
            number: '5456',
            count: 454,
            flag: 0

          }, {
            imageUrl: './1.jpg',
            name: '三叶草卫衣',
            ids: '454564',
            number: '5456',
            count: 454,
            flag: 0

          }, {
            imageUrl: './1.jpg',
            name: '三叶草卫衣',
            ids: '454564',
            number: '5456',
            count: 454,
            flag: 1

          }, {
            imageUrl: './1.jpg',
            name: '三叶草卫衣',
            ids: '454564',
            number: '5456',
            count: 454,
            flag: 1

          }, {
            imageUrl: './1.jpg',
            name: '三叶草卫衣',
            ids: '454564',
            number: '5456',
            count: 454,
            flag: 1

          }, {
            imageUrl: './1.jpg',
            name: '三叶草卫衣',
            ids: '454564',
            number: '5456',
            count: 454,
            flag: 1

          }, {
            imageUrl: './1.jpg',
            name: '三叶草卫衣',
            ids: '454564',
            number: '5456',
            count: 454,
            flag: 1

          }, {
            imageUrl: './1.jpg',
            name: '三叶草卫衣',
            ids: '454564',
            number: '5456',
            count: 454,
            flag: 1
          }, {
            imageUrl: './1.jpg',
            name: '三叶草卫衣',
            ids: '454564',
            number: '5456',
            count: 454,
            flag: 1

          }
        ],
        goodsInformation: {}
      };
    },
    methods: {
      addRepertoryInformation() {
      }
    },
    components: {
      myDrawer,
      toolBar,
      storeRecord
    }
  };
</script>
<style lang="scss" rel="stylesheet/scss" type="text/scss">
  @import '../../common/css/globalscss.scss';

  .hand-store-html {
    width: 100%;
    display: flex;
    flex-direction: column;
    .footer-page {
      margin-top: 8px;
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
