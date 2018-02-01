<template>
  <div class="">
    <tool-bar>
      <Input v-model="goodsNumber" placeholder="请输入货号或简称"></Input>
      <Button class="search-button" type="primary">搜索</Button>
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
          },
          {
            title: '类型',
            key: 'type'
          }, {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
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
                }, '确认')
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
