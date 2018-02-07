<template>
  <div class="">
    <Modal
      v-model="modalStatus"
      width="1200"
      title="盘点记录"
      @on-ok="ok"
      @on-cancel="cancel">
      <tool-bar>
        <Input v-model="goodsNumber" placeholder="请输入货号或简称"></Input>
        <Button class="search-button" type="primary" icon="ios-search">搜索</Button>
      </tool-bar>
      <div class="store-change-html">
        <div class="type-choose">
          <ul>
            <li class="choose-li icon-cursor" :class="{'active': wordType == 1}" @click="wordType = 1">异常记录</li>
            <li class="choose-li icon-cursor" :class="{'active': wordType == 2}" @click="wordType = 2">正常记录</li>
          </ul>
        </div>
        <div class="data-show">
          <Table class="" :columns="columns" :data="data"></Table>
        </div>
      </div>
      <footer>
        <Page :total="100" class="footer-page"></Page>
      </footer>
    </Modal>
    <my-drawer :open="check" title="清单盘点" @close-drawer="check=false"
               @complate-drawer="">
      <div class="add-repertory">
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
            <Tag class="size" color="blue">M</Tag>
            <span class="total">20</span>
            <InputNumber :min="1" v-model="value1" class="truth-total"></InputNumber>
          </div>
          <div class="detail">
            <Tag type="dot" class="color" @on-close="handleClose" color="#00EEEE">淡蓝</Tag>
            <Tag class="size" color="blue">XL</Tag>
            <span class="total">20</span>
            <InputNumber :min="1" v-model="value1" class="truth-total"></InputNumber>
          </div>
          <div class="detail">
            <Tag type="dot" class="color" @on-close="handleClose" color="#00EEEE">淡蓝</Tag>
            <Tag class="size" color="blue">XL</Tag>
            <span class="total">20</span>
            <InputNumber :min="1" v-model="value1" class="truth-total"></InputNumber>
          </div>
        </div>
      </div>
    </my-drawer>
  </div>
</template>
<script>
  import myDrawer from '../../common/vue/myDrawer.vue';
  import toolBar from '../../common/vue/toolBar.vue';

  export default {
    props: {
      modalStatus: {
        default: false
      }
    },
    data() {
      return {
        check: false,
        imgUrl: 'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
        goodsNumber: '',
        wordType: 1,
        columns: [
          {
            title: '名称',
            key: 'name'
          },
          {
            title: '商品ID',
            key: 'id'
          },
          {
            title: '货号',
            key: 'number'
          },
          {
            title: '库存数量',
            key: 'count'
          },
          {
            title: '盘点时间',
            key: 'date'
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
                      this.check = true;
                    }
                  }
                }, '库存核对')
              ]);
            }
          }
        ],
        data: [
          {
            name: '纯棉纱衬衫',
            id: '1231564',
            number: 'X123456',
            count: '50',
            date: '2016-10-03'
          }, {
            name: '纯棉纱衬衫',
            id: '1231564',
            number: 'X123456',
            count: '50',
            date: '2016-10-03'
          }, {
            name: '纯棉纱衬衫',
            id: '1231564',
            number: 'X123456',
            count: '50',
            date: '2016-10-03'
          }, {
            name: '纯棉纱衬衫',
            id: '1231564',
            number: 'X123456',
            count: '50',
            date: '2016-10-03'
          }, {
            name: '纯棉纱衬衫',
            id: '1231564',
            number: 'X123456',
            count: '50',
            date: '2016-10-03'
          }, {
            name: '纯棉纱衬衫',
            id: '1231564',
            number: 'X123456',
            count: '50',
            date: '2016-10-03'
          }, {
            name: '纯棉纱衬衫',
            id: '1231564',
            number: 'X123456',
            count: '50',
            date: '2016-10-03'
          },
        ],
        goodsDetailS: [
          {
            imageUrl: '',
            name: '纯棉纱衬衫',
            ids: '785412',
            number: '123657',
            count: '25',
            time: '2018/06/09',
            status: '0'
          },
          {
            imageUrl: '',
            name: '纯棉纱衬衫',
            ids: '785412',
            number: '123657',
            count: '25',
            time: '2018/06/09',
            status: '1'
          }, {
            imageUrl: '',
            name: '纯棉纱衬衫',
            ids: '785412',
            number: '123657',
            count: '25',
            time: '2018/06/09',
            status: '1'
          }, {
            imageUrl: '',
            name: '纯棉纱衬衫',
            ids: '785412',
            number: '123657',
            count: '25',
            time: '2018/06/09',
            status: '1'
          },
          {
            imageUrl: '',
            name: '纯棉纱衬衫',
            ids: '785412',
            number: '123657',
            count: '25',
            time: '2018/06/09',
            status: '1'
          }

        ]
      };
    },
    methods: {
      ok() {
      },
      cancel() {
        this.$emit('close-record');
      }
    },
    components: {myDrawer, toolBar}
  };
</script>
<style lang="scss" rel="stylesheet/scss" type="text/scss">
  .store-change-html {
    display: flex;
    width: 100%;
    .type-choose {
      width: 130px;
      .check-button {
        width: 100%;
      }
      ul {
        margin-top: 8px;
        li {
          cursor: pointer;
        }
      }
    }
    .choose-li {
      padding: 15px 12px;
      background-color: #f8f6f2;
      text-align: center;
      &.active {
        color: #06b9a5;
      }
    }
    .data-show {
      flex: 1;
      margin-left: 8px;
    }
    .hn-ui-margin {
      margin-top: 8px;
    }
  }

  footer {
    .footer-page {
      text-align: right;
      margin-top: 8px;
    }
  }

  .check-store {
    padding: 8px;
    .search-store {
      display: flex;
      .search-button {
        margin-left: 8px;
      }
    }
    .goods-show {
      .goods-detail {
        width: 100%;
        padding: 8px;
        margin-top: 8px;
        background-color: #f8f6f2;
        .top {
          display: flex;
          .goods-img {
            img {
              width: 105px;
              height: 105px;
            }
          }
          .goods-introduction {
            margin-left: 35px;
            flex: 1 1 280px;
            h4 {
              font-size: 16px;
              margin-top: 3px;
              font-weight: 600;
            }
            .ids {
              color: rgba(0, 0, 0, 0.4);
              margin-top: 12px;
            }
            .number, .count, .time {
              color: rgba(0, 0, 0, 0.4);
              margin-top: 5px;
            }
          }
          .status {
            margin-top: 7.5%;
            font-size: 20px !important;
            .yes-status {
              margin: {
                top: 8px;
              }
            }
          }
        }
        &.color-active {
          background-color: #FFE4E1;
        }
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
      }
      .size, .total {
        height: 32px;
        line-height: 32px;
        padding: 0 15px;
      }
      .truth-total {
        margin-top: 1px;
      }
    }
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
      .sure-store {
        margin-top: 8px;
      }
    }
  }

  .add-repertory {
    padding: 8px;
    width: 100%;
    .hn-ui-margin {
      margin: {
        top: 8px;
      }
    }
  }

  .search-button {
    margin-left: 8px;
  }
</style>
