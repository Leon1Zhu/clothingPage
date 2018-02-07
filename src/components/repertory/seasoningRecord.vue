<template>
  <div class="">
    <tool-bar>
      <Input v-model="goodsNumber" placeholder="请输入货号或简称"></Input>
      <Button class="search-button" icon="ios-search" type="primary">搜索</Button>
    </tool-bar>
    <Table :columns="columns1" :data="data1"></Table>
  </div>
</template>
<script>
  import toolBar from '../../common/vue/toolBar.vue';

  export default {
    props: {},
    data() {
      return {
        goodsNumber: '',
        columns1: [
          {
            title: '名称',
            key: 'name'
          },
          {
            title: '数量',
            key: 'count'
          },
          {
            title: '尺码',
            key: 'size'
          },
          {
            title: '颜色',
            key: 'color'
          }, {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              let btnName = '';
              let type = ''
              if (params.row.type === '调入') {
                btnName = '确认调入';
                type = 'info'
              } else {
                btnName = '确认调出';
                type = 'primary'
              }
              return h('div', [
                h('Button', {
                  props: {
                    type: type,
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, btnName)
              ]);
            }
          }
        ],
        data1: [
          {
            name: '三叶草卫衣',
            count: 18,
            size: 'XXL',
            color: '蓝色',
            type: '调入'
          },
          {
            name: '三叶草卫衣',
            count: 18,
            size: 'XXL',
            color: '蓝色',
            type: '调出'
          },
          {
            name: '三叶草卫衣',
            count: 18,
            size: 'XXL',
            color: '蓝色',
            type: '调出'
          },
          {
            name: '三叶草卫衣',
            count: 18,
            size: 'XXL',
            color: '蓝色',
            type: '调入'
          },
        ]
      };
    },
    methods: {},
    components: {toolBar}
  };
</script>
<style lang="scss" rel="stylesheet/scss" type="text/scss">
  .search-button {
    margin-left: 8px;
  }
</style>
