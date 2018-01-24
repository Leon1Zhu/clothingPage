<template>
  <div class="repertory-shift-html">
    <div class="search">
      <Input v-model="searchData.number" placeholder="请输入货号或者简称"></Input>
      <Col class="left-eight">
      <DatePicker v-model="searchData.time" type="daterange" placement="bottom-end" placeholder="选择日期"
                  style="width: 200px"></DatePicker>
      </Col>
      <Select class="left-eight" v-module="searchData.type">
        <Option v-for=" repertoryShift in repertoryShiftS" :value="repertoryShift.value">{{repertoryShift.name}}
        </Option>
      </Select>
      <Button class="left-eight" type="primary" @click="searchRepertoryData">搜索</Button>
    </div>
    <div class="table-show">
      <Table :columns="columns1" :data="data1"></Table>
    </div>
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
        columns1: [
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
        data1: [
          {
            time: '2017-12-23 07:49:09',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '入库',
          },
          {
            time: '2017-12-23 07:49:09',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '入库',
          },
          {
            time: '2017-12-23 07:49:09',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '入库',
          },
          {
            time: '2017-12-23 07:49:09',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '入库',
          },
          {
            time: '2017-12-23 07:49:09',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '入库',
          },
          {
            time: '2017-12-23 07:49:09',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '入库',
          },
          {
            time: '2017-12-23 07:49:09',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '入库',
          },
          {
            time: '2017-12-23 07:49:09',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '入库',
          }
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
    methods: {
      searchRepertoryData() {
        console.log(this.searchData);
      }
    },
    components: {}
  };
</script>
<style lang="scss" rel="stylesheet/scss" type="text/scss">
  @import '../../common/css/globalscss.scss';

  .repertory-shift-html {
    .search {
      display: flex;
      .left-eight {
        margin: {
          left: 8px;
        }
      ;
      }
    }
    .table-show {
      margin-top: 8px;
    }
    footer {
      margin-top: 8px;
      .footer-page {
        margin-left: 35%;
      }
    }
  }
</style>
