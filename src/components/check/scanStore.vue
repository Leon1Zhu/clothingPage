<template>
  <div class="repertory-record-html">
    <tool-bar>
      <Input v-model="goodsNumber" icon="qr-scanner" placeholder="扫描商品货号" @on-blur="check = true"></Input>
      <Button class="search-button" icon="ios-search" type="primary">搜索</Button>
      <Button class="search-button" type="primary">重新盘点</Button>
      <Button class="search-button" type="error">结束盘点</Button>
      <Button class="search-button" type="info" @click.native="storeRecord = true">盘点记录</Button>
    </tool-bar>
    <div class="sku-show">
      <Row class="sku-choose">
        <Col span="12" style="padding-right:10px">
        <Select v-model="model11">
          <Option v-for="item in colorSize" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        </Col>
        <Col span="12">
        <Select v-model="model12">
          <Option v-for="item in sizeSize" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        </Col>
      </Row>
      <Button class="search-button" type="primary" @click="scanModal = true">确定</Button>
    </div>
    <Modal
      v-model="scanModal"
      title="扫码盘点"
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
          <span class="total">已扫描数量:555</span>
        </div>
      </div>
    </Modal>
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
        colorSize: [
          {
            value: '红色',
            label: '红色'
          },
          {
            value: '蓝色',
            label: '蓝色'
          },
          {
            value: '黑色',
            label: '黑色'
          }
        ],
        sizeSize: [
          {
            value: 'XXL',
            label: 'XXL'
          },
          {
            value: 'XL',
            label: 'XL'
          },
          {
            value: 'L',
            label: 'L'
          }
        ],
        model11: '',
        model12: '',
        scanModal: false,
        selectValue: '',
        cityList: [
          {
            value: '三叶草卫衣-淡蓝-xl',
            label: '三叶草卫衣-淡蓝-xl'
          },
          {
            value: '三叶草卫衣-淡蓝-xl',
            label: '三叶草卫衣-淡蓝-xl'
          }
        ],
        goodsNumber: '',
        check: false,
        add: false,
        value1: 1,
        imgUrl: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
        repertoryAddOpen: false,
        // 库存展示的信息数组
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
      myDrawer,
      toolBar,
      storeRecord
    }
  };
</script>
<style lang="scss" rel="stylesheet/scss" type="text/scss">
  @import '../../common/css/globalscss.scss';

  .search-button {
    margin-left: 8px;
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
        font-size: 16px;
      }
      .size, .total {
        height: 32px;
        line-height: 32px;
        padding: 0 15px;
      }
    }
  }

  .sku-show {
    width: 1126px;
    display: flex;
    .sku-choose {
      flex: 1;
    }
  }

</style>
