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
            <span @click="modal1 = true"><Icon type="gear-b" class="check" color="red"></Icon></span>
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
          <div class="operation">
            <span @click="modal1 = true"><Icon type="gear-b" class="check" color="red"></Icon></span>
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
          <div class="operation">
            <span @click="modal1 = true"><Icon type="gear-b" class="check" color="red"></Icon></span>
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
          <div class="operation">
            <span @click="modal1 = true"><Icon type="gear-b" class="check" color="red"></Icon></span>
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
          <div class="operation">
            <span @click="modal1 = true"><Icon type="gear-b" class="check" color="red"></Icon></span>
            <Icon type="compose" class="add" color="blue"></Icon>
          </div>
        </div>
      </div>
    </div>
    <Modal
      v-model="modal1"
      title="库存核对"
      @on-ok="ok"
      @on-cancel="cancel">
      <div class="goods-infor">
        <div class="goods-img">
          <img src="./1.jpg" alt="">
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
          <Tag checkable class="size" color="blue">标签一</Tag>
          <span class="total">20</span>
          <InputNumber :max="10" :min="1" v-model="value1" class="truth-total"></InputNumber>
        </div>
        <div class="detail">
          <Tag type="dot" class="color" @on-close="handleClose" color="#00EEEE">淡蓝</Tag>
          <Tag checkable class="size" color="blue">标签一</Tag>
          <span class="total">20</span>
          <InputNumber :max="10" :min="1" v-model="value1" class="truth-total"></InputNumber>
        </div>
        <div class="detail">
          <Tag type="dot" class="color" @on-close="handleClose" color="#00EEEE">淡蓝</Tag>
          <Tag checkable class="size" color="blue">标签一</Tag>
          <span class="total">20</span>
          <InputNumber :max="10" :min="1" v-model="value1" class="truth-total"></InputNumber>
        </div>
      </div>
    </Modal>
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
        goodsNumber: '',
        modal1: false,
        value1: 1,
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

  .repertory-infor {
    .detail {
      display: flex;
      padding: 8px;
      border-bottom: 1px solid #f8f6f2;
      .size, .total, .truth-total {
        margin-left: 12px;
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
</style>
