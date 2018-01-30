<template>
  <div class="repertory-shift-html">
    <tool-bar>
      <Input v-model="searchData.number"  placeholder="请输入货号或者简称"></Input>
      <Col class="left-eight">
      <DatePicker v-model="searchData.time" type="daterange" placement="bottom-end" placeholder="选择日期"
                  style="width: 200px"></DatePicker>
      </Col>
      <Select class="left-eight" v-module="searchData.type" style="width: 100px">
        <Option v-for=" repertoryShift in repertoryShiftS" :value="repertoryShift.value">{{repertoryShift.name}}
        </Option>
      </Select>
      <Button type="primary" icon="plus-round" @click.native="addNewStore('');">搜索</Button>
    </tool-bar>
    <div class="table-show">
      <Table :columns="columns1" :data="data1"></Table>
    </div>
    <footer>
      <Page :total="100" class="footer-page"></Page>
    </footer>
  </div>
</template>
<script>
  import toolBar from '../../common/vue/toolBar.vue';

  export default {
    props: {},
    data() {
      return {
        goodsAddOpen: true,
        formItem: {
          input: '',
          select: '',
          radio: 'male',
          checkbox: [],
          switch: true,
          time: '',
          slider: [20, 50],
          value1: '1',
          value2: [],
        },
        columns1: [
          {
            title: '名称',
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
        data1: [
          {
            name: '三叶草卫衣',
            time: '2017-12-23 07:49:09',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '入库',
          },
          {
            name: '三叶草卫衣',
            time: '2017-12-23 07:49:09',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '入库',
          },
          {
            name: '三叶草卫衣',
            time: '2017-12-23 07:49:09',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '入库',
          },
          {
            name: '三叶草卫衣',
            time: '2017-12-23 07:49:09',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '入库',
          },
          {
            name: '三叶草卫衣',
            time: '2017-12-23 07:49:09',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '入库',
          },
          {
            name: '三叶草卫衣',
            time: '2017-12-23 07:49:09',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '入库',
          },
          {
            name: '三叶草卫衣',
            time: '2017-12-23 07:49:09',
            number: 1152462502,
            color: '浅蓝色',
            size: 'XXL',
            total: '120',
            type: '入库',
          },
          {
            name: '三叶草卫衣',
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
      margin-top: 8px;
      .footer-page {
        text-align: right;
      }
    }
  }

</style>
