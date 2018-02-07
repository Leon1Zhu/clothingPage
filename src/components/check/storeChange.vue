<template>
  <div class="repertory-record-html">
    <tool-bar>
      <Input v-model="goodsNumber" placeholder="请输入货号或简称"></Input>
      <Button class="search-button" icon="ios-search" type="primary">搜索</Button>
      <Button class="search-button" type="warning">开始盘点</Button>
      <Button class="search-button" type="error">结束盘点</Button>
      <Button class="search-button" type="info" @click.native="storeRecord=true">盘点记录</Button>
    </tool-bar>
    <div class="goods-show">
      <div class="item" v-for="(goods,index) in goodsData" :class="{'active-gray':goods.flag == 0,
      'active-red':goods.flag == 1,
      'active-green':goods.flag == 2}">
        <div class="goods-img">
          <img :src="imgUrl" alt="">
        </div>
        <div class="goods-introduction">
          <h4>{{goods.name}}</h4>
          <div class="ids">商品id:{{goods.ids}}</div>
          <div class="number">货号:{{goods.number}}</div>
          <div class="count">库存数量:{{goods.count}}</div>
          <div class="operation">
            <!--<Button type="primary" shape="circle" icon="gear-b" @click="check = true"></Button>-->
            <Button type="primary" shape="circle" icon="clipboard"
                    @click="repertoryAddOpen = true, storeRecordIndex=index"></Button>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <Page :total="100" class="footer-page"></Page>
    </footer>

    <Modal
      v-model="repertoryAddOpen"
      title="清单盘点"
      @on-ok="ok"
      @on-cancel="cancel">
      <RadioGroup v-model="phone" size="large">
        <Radio label="1">
          <span>有误</span>
        </Radio>
        <Radio label="2">
          <span>无误</span>
        </Radio>
      </RadioGroup>
    </Modal>
    <!--<my-drawer :open="repertoryAddOpen" title="清单盘点" @close-drawer="repertoryAddOpen=false"
               @complate-drawer="handleClose">
      <div class="add-repertory">
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
            <InputNumber :min="1" v-model="value1" class="truth-total" disabled></InputNumber>
          </div>
          <div class="detail">
            <Tag type="dot" class="color" @on-close="handleClose" color="#00EEEE">淡蓝</Tag>
            <Tag checkable class="size" color="blue">XL</Tag>
            <InputNumber :min="1" v-model="value1" class="truth-total" disabled></InputNumber>
          </div>
          <div class="detail">
            <Tag type="dot" class="color" @on-close="handleClose" color="#00EEEE">淡蓝</Tag>
            <Tag checkable class="size" color="blue">XL</Tag>
            <InputNumber :min="1" v-model="value1" class="truth-total" disabled></InputNumber>
          </div>
          <RadioGroup v-model="phone" class="sure-store">
            <Radio label="1">
              <Icon type="close-circled"></Icon>
              <span>有误</span>
            </Radio>
            <Radio label="0">
              <Icon type="checkmark-circled"></Icon>
              <span>无误</span>
            </Radio>
          </RadioGroup>
        </div>
      </div>
    </my-drawer>-->
    <store-record :modal="storeRecord"></store-record>
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
        storeRecordIndex: 0,
        storeRecord: false,
        goodsNumber: '',
        check: false,
        add: false,
        phone: '1',
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
            count: 454,
            flag: 1
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
            flag: 1

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
            flag: 1

          },
          {
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
            flag: 2

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
      },
      ok() {
        this.goodsData[this.storeRecordIndex].flag = this.phone;
        this.phone = 1;
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
        &.active-gray {
          background-color: #f8f6f2;
        }
        &.active-red {
          background-color: #FFE7BA;
        }
        &.active-green {
          background-color: #C6E2FF;
        }
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
        margin-top: 8px;
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
      .sure-store {
        margin-top: 8px;
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
    }
  }

  .search-button {
    margin-left: 8px;
  }

</style>
