<template>
  <div class="repertory-record-html">
    <tool-bar>
      <Input v-model="goodsNumber" icon="qr-scanner" placeholder="扫描商品货号" @on-blur="check = true"></Input>
      <Button class="search-button" icon="ios-search" type="primary">搜索</Button>
      <Button class="search-button" type="primary">重新盘点</Button>
      <Button class="search-button" type="error">结束盘点</Button>
      <Button class="search-button" type="info" @click.native="storeRecord = true">盘点记录</Button>
    </tool-bar>
    <div class="goods-show">

    </div>
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

</style>
