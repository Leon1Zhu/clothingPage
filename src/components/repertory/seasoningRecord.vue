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
          <img :src="imgUrl" class="html-cursor" @click="imageShow=true" alt="">
        </div>
        <div class="goods-introduction">
          <div class="code">货号:4544 / X1254</div>
          <div class="name">简称:5456</div>
          <div class="color">颜色:5456</div>
          <div class="size">尺码:5456</div>
          <div class="counts">数量:5456</div>
          <div class="operation-btn">
            <Button v-if="goods.flag == 1" type="primary" size="small" @click="goods.flag = 3">确认调入</Button>
            <Button v-if="goods.flag == 2" type="info" size="small" @click="goods.flag = 3">确认调出</Button>
            <Button v-if="goods.flag == 3" size="small" @click="seasoningOpen = true">完成调货</Button>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <Page :total="100" :page-size="10" class="footer-page" @on-change=""></Page>
    </footer>
    <Modal
      v-model="imageShow"
      title="图片展示"
      @on-ok="ok"
      @on-cancel="cancel">
      <img :src="imgUrl" alt="">
    </Modal>
  </div>
</template>
<script>
  import toolBar from '../../common/vue/toolBar.vue';

  export default {
    props: {},
    data() {
      return {
        imageShow: false,
        goodsNumber: '',
        searchDataTime: '',
        imgUrl: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
        goodsData: [
          {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
            flag: '1'
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
            flag: '1'
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
            flag: '1'
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
            flag: '1'
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
            flag: '1'
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
            flag: '1'
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
            flag: '1'
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
            flag: '1'
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
            flag: '1'
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
            flag: '2'
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
            flag: '2'
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
            flag: '2'
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
            flag: '2'
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
            flag: '2'
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
            flag: '2'
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
            flag: '3'
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
            flag: '3'
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
            flag: '3'
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
            flag: '3'
          }, {
            productPic: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
            productName: '三叶草卫衣',
            productId: '11',
            productCode: '15045624585',
            flag: '3'
          }
        ],
      };
    },
    methods: {},
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
