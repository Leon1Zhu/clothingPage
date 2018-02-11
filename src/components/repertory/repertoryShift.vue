<template>
  <div class="repertory-shift-html">
    <tool-bar>
      <Input v-model="searchData.number" placeholder="请输入货号或者简称"></Input>
      <Col class="left-eight">
      <DatePicker :value="searchData.time" type="daterange" placement="bottom-end" placeholder="选择日期"
                  style="width: 200px"></DatePicker>
      </Col>
      <Select v-model="searchData.type" class="left-eight" style="width: 100px">
        <Option v-for=" repertoryShift in repertoryShiftS" :value="repertoryShift.value">{{repertoryShift.name}}
        </Option>
      </Select>
      <Button type="primary" icon="ios-search" @click.native="listGoodsRepertoryRecord()" class="post-btn">搜索</Button>
    </tool-bar>
    <div class="table-show">
      <Table :columns="columns" :data="data"></Table>
    </div>
    <footer>
      <div class="total-record">
        <span>合计:</span>
        <span class="word">入库:<span class="system-word-color">531</span></span>
        <span class="word">出库:<span class="system-word-color">200</span></span>
        <span class="word">销售:<span class="system-word-color">100</span></span>
        <span class="word">退货:<span class="system-word-color">21</span></span>
        <span class="word">盘点:<span class="system-word-color">0</span></span>
        <span class="word">调货:<span class="system-word-color">-10</span></span>
      </div>
      <Page :total="100" class="footer-page"></Page>
    </footer>
  </div>
</template>
<script>
  import toolBar from '../../common/vue/toolBar.vue';
  import repertoryShiftApi from '../../api/repertoryShift';

  export default {
    props: {},
    data() {
      return {
        goodsAddOpen: true,
        columns: [
          {
            title: '货号',
            key: 'name'
          },
          {
            title: '时间',
            key: 'time'
          },
          {
            title: '编号',
            key: 'number'
          },
          {
            title: '颜色',
            key: 'color'
          },
          {
            title: '尺码',
            key: 'size'
          },
          {
            title: '数量',
            key: 'total'
          },
          {
            title: '类型',
            key: 'type'
          }
        ],
        data: [
          {
            name: '545612 / x1253',
            time: '2017-12-23 07:49',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '入库',
          },
          {
            name: '545612 / x1253',
            time: '2017-12-23 07:49',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '出库',
          },
          {
            name: '545612 / x1253',
            time: '2017-12-23 07:49',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '入库',
          },
          {
            name: '545612 / x1253',
            time: '2017-12-23 07:49',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '出库',
          },
          {
            name: '545612 / x1253',
            time: '2017-12-23 07:49',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '入库',
          },
          {
            name: '545612 / x1253',
            time: '2017-12-23 07:49',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '入库',
          },
          {
            name: '545612 / x1253',
            time: '2017-12-23 07:49',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '销售',
          },
          {
            name: '545612 / x1253',
            time: '2017-12-23 07:49',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '销售',
          }, {
            name: '545612 / x1253',
            time: '2017-12-23 07:49',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '销售',
          }, {
            name: '545612 / x1253',
            time: '2017-12-23 07:49',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '销售',
          }, {
            name: '545612 / x1253',
            time: '2017-12-23 07:49',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '销售',
          }, {
            name: '545612 / x1253',
            time: '2017-12-23 07:49',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '销售',
          }, {
            name: '545612 / x1253',
            time: '2017-12-23 07:49',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '入库',
          }, {
            name: '545612 / x1253',
            time: '2017-12-23 07:49',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '调货',
          }, {
            name: '545612 / x1253',
            time: '2017-12-23 07:49',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '调货',
          }, {
            name: '545612 / x1253',
            time: '2017-12-23 07:49',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '调货',
          }, {
            name: '545612 / x1253',
            time: '2017-12-23 07:49',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '入库',
          }, {
            name: '545612 / x1253',
            time: '2017-12-23 07:49',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '调货',
          }, {
            name: '545612 / x1253',
            time: '2017-12-23 07:49',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '入库',
          }, {
            name: '545612 / x1253',
            time: '2017-12-23 07:49:09',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '调货',
          },
        ],
        repertoryShiftS: [
          {
            name: '入库',
            value: '1'
          }, {
            name: '出库',
            value: '2'
          }, {
            name: '销售',
            value: '3'
          }, {
            name: '退货',
            value: '4'
          }, {
            name: '盘点',
            value: '5'
          }, {
            name: '调货',
            value: '6'
          }],
        searchData: {
          number: '',
          time: '',
          type: ''
        }
      }
    },
    created() {
      this.listGoodsRepertoryRecord();
    },
    methods: {
      listGoodsRepertoryRecord() {
        let account = this.$store.getters.getAccountId;
        let shopId = this.$store.getters.getShopId;
        let time = this.searchData.time;
        let searchData = {
          status: this.searchData.type,
          startDate: '2016-08-08',
          endDate: '2018-08-08',
          index: '1',
          size: '10',
          /* keyword: ''*/
        };
        repertoryShiftApi.listGoodsRepertoryRecord(account, shopId, searchData).then((response) => {
          console.log(response);
        }).catch(() => {
          this.$error(apiError, '获取库存记录出错!')
        });
      }
    },
    components: {
      toolBar
    }
  };
</script>
<style lang="scss" rel="stylesheet/scss" type="text/scss">
  @import '../../common/css/globalscss.scss';

  .repertory-shift-html {
    .left-eight {
      margin: {
        left: 8px;
      }
    }
    .table-show {
      margin-top: 8px;
    }
    footer {
      display: flex;
      margin-top: 8px;
      .total-record {
        height: 32px;
        padding: 8px;
        width: 680px;
        background-color: #dcdcdc;
        span {
          font-weight: 600;
        }
        .word {
          margin-left: 12px;
        }
        .system-word-color {
          color: #06b9a5;
        }
      }
      .footer-page {
        flex: 1;
        text-align: right;
      }
    }
    .left-eight {
      .ivu-input:hover, .ivu-input:focus {
        width: 200px !important;
      }
    }
  }

  .post-btn {
    margin-left: 8px;
  }

  .ivu-select-item {
    text-align: center !important;
  }


</style>
