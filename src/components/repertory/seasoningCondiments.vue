<template>
  <div class="seasoning-condiments-html">
    <Table :columns="columns10" :data="data9"></Table>
    <my-drawer :open="seasoningOpen" title="库存添加" @close-drawer="seasoningOpen=false"
               @complate-drawer="">
      <div class="seasoning-condiments">
        <div class="ui segment">
          <div class="ui vertical segment">
            <p>南京一号仓库 <span class="red">[1件库存]</span></p>
          </div>
          <div class="ui vertical segment">
            <p>南京二号仓库 <span class="red">[5件库存]</span></p>
          </div>
          <div class="ui vertical segment">
            <p>南京三号仓库 <span class="green">[10件库存]</span></p>
          </div>
        </div>
        <div class="ui segment">
          <Form :label-width="40" label-position="left">
            <FormItem label="数量">
              <Input placeholder="请输入数量"></Input>
            </FormItem>
            <FormItem label="调出">
              <Select>
                <Option value="1">南京1号仓库</Option>
                <Option value="2">南京2号仓库</Option>
                <Option value="3">南京3号仓库</Option>
              </Select>
            </FormItem>
            <FormItem label="调入">
              <Select>
                <Option value="1">南京1号仓库</Option>
                <Option value="2">南京2号仓库</Option>
                <Option value="3">南京3号仓库</Option>
              </Select>
            </FormItem>
          </Form>
        </div>
      </div>
    </my-drawer>
    <Modal
      v-model="modal"
      title="Common Modal dialog box title"
      @on-ok="ok"
      @on-cancel="cancel">
      <div>
        <Table :columns="columns11" :data="data9"></Table>
      </div>
    </Modal>
  </div>
</template>
<script>
  import myDrawer from '../../common/vue/myDrawer.vue';
  import expandRow from '../repertory/seasoningExpand.vue';

  export default {
    props: {},
    data() {
      return {
        modal: true,
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
        this.$Message.info('Clicked ok');
      },
      cancel() {
        this.$Message.info('Clicked cancel');
      }
    },
    components: {
      myDrawer,
      expandRow
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
      padding-left: 0;
      padding-right: 0;
      background: none transparent;
      border-radius: 0;
      box-shadow: none;
      border: none;
      border-bottom: 1px solid rgba(34, 36, 38, .15);
    }

    .ivu-select-dropdown {
      position: absolute !important;
    }

  }
</style>
