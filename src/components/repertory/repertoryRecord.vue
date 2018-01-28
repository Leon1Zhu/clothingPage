<template>
  <div class="repertory-record-html">
    <div class="search">
      <Input v-model="goodsNumber" placeholder="请输入货号或简称"></Input>
      <Button class="search-button" type="primary">搜索</Button>
    </div>
    <div class="goods-show">
      <div class="item" v-for="goods in goodsData">
        <div class="goods-img">
          <img :src="imgUrl" alt="">
        </div>
        <div class="goods-introduction">
          <h4>{{goods.name}}</h4>
          <div class="ids">商品id:{{goods.ids}}</div>
          <div class="number">货号:{{goods.number}}</div>
          <div class="count">数量:{{goods.count}}</div>
          <div class="operation">
            <Button type="primary" shape="circle" icon="gear-b" @click="check = true"></Button>
            <Button type="warning" shape="circle"  icon="compose" @click="add = true"></Button>
            <!--<span @click="check = true"><Icon type="gear-b" class="check" color="red"></Icon></span>
            <span @click="add = true"><Icon type="compose" class="add" color="blue"></Icon></span>-->
          </div>
        </div>
      </div>
    </div>
    <Modal
      v-model="check"
      title="库存核对"
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
          <Tag checkable class="size" color="blue">M</Tag>
          <span class="total">20</span>
          <InputNumber :max="10" :min="1" v-model="value1" class="truth-total"></InputNumber>
        </div>
        <div class="detail">
          <Tag type="dot" class="color" @on-close="handleClose" color="#00EEEE">淡蓝</Tag>
          <Tag checkable class="size" color="blue">XL</Tag>
          <span class="total">20</span>
          <InputNumber :max="10" :min="1" v-model="value1" class="truth-total"></InputNumber>
        </div>
        <div class="detail">
          <Tag type="dot" class="color" @on-close="handleClose" color="#00EEEE">淡蓝</Tag>
          <Tag checkable class="size" color="blue">XXL</Tag>
          <span class="total">20</span>
          <InputNumber :max="10" :min="1" v-model="value1" class="truth-total"></InputNumber>
        </div>
      </div>
    </Modal>

    <Modal
      v-model="add"
      title="库存添加"
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
          <Tag checkable class="size" color="blue">M</Tag>
          <InputNumber :max="10" :min="1" v-model="value1" class="truth-total"></InputNumber>
        </div>
        <div class="detail">
          <Tag type="dot" class="color" @on-close="handleClose" color="#00EEEE">淡蓝</Tag>
          <Tag checkable class="size" color="blue">XL</Tag>
          <InputNumber :max="10" :min="1" v-model="value1" class="truth-total"></InputNumber>
        </div>
      </div>
      <Button id="add-repertory" class="" @click="addRepertoryInformation()" type="primary" shape="circle"
              icon="plus-round"></Button>
    </Modal>

    <footer>
      <Page :total="100" class="footer-page"></Page>
    </footer>

    <my-drawer :open="repertoryAddOpen" title="库存添加" @close-drawer="repertoryAddOpen=false"
               @complate-drawer="handleClose">
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
          <Input v-model="value1" type="number" placeholder="请输入数量"></Input>
        </Card>
      </div>
    </my-drawer>
  </div>
</template>
<script>
  import myDrawer from '../../common/vue/myDrawer.vue';

  export default {
    props: {},
    data() {
      return {
        goodsNumber: '',
        check: false,
        add: false,
        value1: 1,
        imgUrl: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
        repertoryAddOpen: false,
        // 库存展示的信息数组
        goodsData: [
          {
            imageUrl: './1.jpg',
            name: '三叶草卫衣',
            ids: '454564',
            number: '5456',
            count: 454
          },
          {
            imageUrl: './1.jpg',
            name: '三叶草卫衣',
            ids: '454564',
            number: '5456',
            count: 454

          },
          {
            imageUrl: './1.jpg',
            name: '三叶草卫衣',
            ids: '454564',
            number: '5456',
            count: 454

          },
          {
            imageUrl: './1.jpg',
            name: '三叶草卫衣',
            ids: '454564',
            number: '5456',
            count: 454

          },
          {
            imageUrl: './1.jpg',
            name: '三叶草卫衣',
            ids: '454564',
            number: '5456',
            count: 454

          },
          {
            imageUrl: './1.jpg',
            name: '三叶草卫衣',
            ids: '454564',
            number: '5456',
            count: 454

          }, {
            imageUrl: './1.jpg',
            name: '三叶草卫衣',
            ids: '454564',
            number: '5456',
            count: 454

          }, {
            imageUrl: './1.jpg',
            name: '三叶草卫衣',
            ids: '454564',
            number: '5456',
            count: 454

          }, {
            imageUrl: './1.jpg',
            name: '三叶草卫衣',
            ids: '454564',
            number: '5456',
            count: 454

          }, {
            imageUrl: './1.jpg',
            name: '三叶草卫衣',
            ids: '454564',
            number: '5456',
            count: 454

          }, {
            imageUrl: './1.jpg',
            name: '三叶草卫衣',
            ids: '454564',
            number: '5456',
            count: 454

          }, {
            imageUrl: './1.jpg',
            name: '三叶草卫衣',
            ids: '454564',
            number: '5456',
            count: 454

          }
        ],
        detailArray: [
          {
            size: '',
            color: '',
            count: ''
          }
        ],
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
    methods: {
      addRepertoryInformation() {
        this.repertoryAddOpen = true;
      },
      handleClose() {
        this.modal1 = false;
        this.modal2 = false;
      }
    },
    components: {
      myDrawer
    }
  };
</script>
<style lang="scss" rel="stylesheet/scss" type="text/scss">
  @import '../../common/css/globalscss.scss';

  .repertory-record-html {
    padding: 8px;
    width: 100%;
    display: flex;
    flex-direction: column;
    .search {
      width: 95%;
      margin-left: 2.5%;
      display: flex;
      .search-button {
        margin-left: 8px;
      }
    }
    .goods-show {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      padding: 8px;
      .item {
        display: flex;
        width: 240px;
        padding: 15px;
        height: 130px;
        font-size: 14px;
        margin: {
          top: 8px;
          left: 15px;
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
            font-size: 14px;
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

</style>
