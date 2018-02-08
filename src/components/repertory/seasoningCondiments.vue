<template>
  <div class="seasoning-condiments-html">
    <tool-bar>
      <Input v-model="goodsNumber" placeholder="请输入货号或简称"></Input>
      <Button class="search-button" icon="ios-search" type="primary">搜索</Button>
    </tool-bar>
    <Table :columns="columns10" :data="data9"></Table>
    <my-drawer :open="seasoningOpen" title="门店调货" @close-drawer="seasoningOpen=false"
               @complate-drawer="">
      <div class="seasoning-condiments">
        <div class="ui segment">
          <div class="ui vertical segment html-cursor" :class="{'active':repertory == 0}" @click="repertory = 0">
            <p>南京一号仓库 <span class="red">[1件库存]</span>
              <Icon v-if="repertory == 0" type="checkmark" color="#06b9a5" class="sure-icon"></Icon>
            </p>
          </div>
          <div class="ui vertical segment html-cursor" :class="{'active':repertory == 1}" @click="repertory = 1">
            <p>南京二号仓库 <span class="red">[5件库存]</span>
              <Icon v-if="repertory == 1" type="checkmark" color="#06b9a5" class="sure-icon"></Icon>
            </p>
          </div>
          <div class="ui vertical segment html-cursor" :class="{'active':repertory == 2}" @click="repertory = 2">
            <p>南京三号仓库 <span class="green">[10件库存]</span>
              <Icon v-if="repertory == 2" type="checkmark" color="#06b9a5" class="sure-icon"></Icon>
            </p>
          </div>
          <div class="ui vertical segment">
            <Input placeholder="请输入数量"></Input>
          </div>
        </div>
      </div>
    </my-drawer>
  </div>
</template>
<script>
  import myDrawer from '../../common/vue/myDrawer.vue';
  import expandRow from '../repertory/seasoningExpand.vue';
  import toolBar from '../../common/vue/toolBar.vue';

  export default {
    props: {},
    data() {
      return {
        repertory: 0,
        seasoningOpen: false,
        seasoningIn: '1',
        seasoningOut: '2',
        columns10: [
          {
            title: '编号',
            key: 'name'
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
            key: 'number'
          },
          {
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
                      this.seasoningOpen = true;
                    }
                  }
                }, '库存调拨')
              ]);
            }
          }
        ],
        columns11: [
          {
            type: 'expand',
            width: 50,
            render: (h, params) => {
              return h(expandRow, {
                props: {
                  row: params.row
                }
              })
            }
          },
          {
            title: '名称',
            key: 'name'
          },
          {
            title: '门店',
            key: 'store'
          },
          {
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
                      this.seasoningOpen = true;
                    }
                  }
                }, '调出')
              ]);
            }
          }
        ],
        data9: [
          {
            name: '三叶草卫衣',
            size: 'XL',
            color: '红色',
            number: '25',
            store: '八达成一号店'
          },
          {
            name: '三叶草卫衣',
            size: 'XL',
            color: '红色',
            number: '25',
            store: '八达成一号店'
          },
          {
            name: '三叶草卫衣',
            size: 'XL',
            color: '红色',
            number: '25',
            store: '八达成一号店'
          },
          {
            name: '三叶草卫衣',
            size: 'XL',
            color: '红色',
            number: '25',
            store: '八达成一号店'
          },
          {
            name: '三叶草卫衣',
            size: 'XL',
            color: '红色',
            number: '25',
            store: '八达成一号店'
          },
          {
            name: '三叶草卫衣',
            size: 'XL',
            color: '红色',
            number: '25',
            store: '八达成一号店'
          },
        ]
      };
    },
    methods: {
      ok() {
      },
      cancel() {
      }
    },
    components: {
      myDrawer,
      expandRow,
      toolBar
    }
  };
</script>
<style lang="scss" rel="stylesheet/scss" type="text/scss">
  .seasoning-condiments-html {

  }

  .seasoning-condiments {
    padding: 8px;
    .red {
      color: red;
    }
    .green {
      color: #06b9a5;
    }
    .ui.segment {
      background: #fff;
      box-shadow: 0 1px 2px 0 rgba(34, 36, 38, .15);
      margin: 1rem 0;
      padding: 1em 1em;
      border-radius: .28571429rem;
      border: 1px solid rgba(34, 36, 38, .15);
    }

    .ui.vertical.segment {
      margin: 0;
      padding-left: 8px;
      padding-right: 0;
      background: none transparent;
      border-radius: 0;
      box-shadow: none;
      border: none;
      border-bottom: 1px solid rgba(34, 36, 38, .15);
      &.active {
        background-color: #f8f6f2;
      }
    }

    .ivu-select-dropdown {
      position: absolute !important;
    }
    .sure-icon {
      margin-right: 8px;
      float: right;
    }

  }
</style>
