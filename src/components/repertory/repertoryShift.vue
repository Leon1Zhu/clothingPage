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
    <my-drawer :open="goodsAddOpen" title="商品添加" @close-drawer="goodsAddOpen=false"
               @complate-drawer="">
      <div class="add-goods">
        <Cascader :data="data2" v-model="value2"></Cascader>
        <div class="ui segment">
          <div class="ui vertical segment">
            <div class="add-img">
              <Icon type="plus-round" class="upload-icon"></Icon>
            </div>
          </div>
          <div class="ui vertical segment">
            <Form :model="formItem" :label-width="80" label-position="left">
              <FormItem label="货号">
                <Input v-model="formItem.input" placeholder="货号"></Input>
              </FormItem>
              <FormItem label="简称">
                <Input v-model="formItem.input" placeholder="简称"></Input>
              </FormItem>
              <FormItem label="售价">
                <Input v-model="formItem.input" placeholder="售价"></Input>
              </FormItem>
              <FormItem label="自定义售价">
                <Input v-model="formItem.input" placeholder="自定义售价"></Input>
              </FormItem>
            </Form>
          </div>
          <div class="ui vertical segment">
            <div class="add-img">
              <Icon type="plus-round" class="upload-icon"></Icon>
            </div>
            <span class="explain">上传图片,不要超过1M,否则系统自动压缩,单个商品最少9张图片,点击照片查看大图。</span>
          </div>
          <div class="ui vertical segment">
            <Form :model="formItem" :label-width="80" label-position="left">
              <FormItem label="网店可用">
                <i-switch v-model="formItem.switch" size="large">
                  <span slot="open">是</span>
                  <span slot="close">否</span>
                </i-switch>
              </FormItem>
              <FormItem label="初始库存">
                <Input v-model="formItem.input" placeholder="初始库存"></Input>
              </FormItem>
              <Collapse v-model="value1">
                <Panel name="1">
                  颜色
                  <div slot="content">
                    <div class="color-chunk">
                      <!--颜色的名称-->
                      <div class="color-name">
                        <div class="title">
                          单色系&nbsp;&nbsp;
                        </div>
                      </div>
                      <!--颜色的细节-->
                      <div class="detail">
                        <Tag type="dot" color="blue">蓝色</Tag>
                        <Tag type="dot" color="green">绿色</Tag>
                        <Tag type="dot" color="red">红色</Tag>
                        <Tag type="dot" color="yellow">黄色</Tag>
                      </div>
                    </div>
                    <div class="color-chunk">
                      <!--颜色的名称-->
                      <div class="color-name">
                        <div class="title">
                          红色系&nbsp;&nbsp;
                        </div>
                      </div>
                      <!--颜色的细节-->
                      <div class="detail">
                        <Tag type="dot" color="#FF8C69">红色</Tag>
                        <Tag type="dot" color="#FF8247">粉色</Tag>
                        <Tag type="dot" color="#FF34B3">玫瑰</Tag>
                        <Tag type="dot" color="#FF0000">牡红</Tag>
                      </div>
                    </div>
                  </div>
                </Panel>
                <Panel name="2">
                  尺码
                  <div slot="content">
                    <div class="size-chunk">
                      <!--尺码的名称-->
                      <div class="size-name">
                        <div class="title">
                          均码&nbsp;&nbsp;
                        </div>
                      </div>
                      <!--尺码的细节-->
                      <div class="detail">
                        <Tag type="dot" color="#06c1ae">M</Tag>
                        <Tag type="dot" color="#06c1ae">L</Tag>
                        <Tag type="dot" color="#06c1ae">XL</Tag>
                        <Tag type="dot" color="#06c1ae">XXL</Tag>
                      </div>
                    </div>
                    <div class="size-chunk">
                      <!--尺码的名称-->
                      <div class="size-name">
                        <div class="title">
                          中国码&nbsp;&nbsp;
                        </div>
                      </div>
                      <!--尺码的细节-->
                      <div class="detail">
                        <Tag type="dot" color="#06c1ae">L</Tag>
                        <Tag type="dot" color="#06c1ae">M</Tag>
                        <Tag type="dot" color="#06c1ae">X</Tag>
                      </div>
                    </div>
                  </div>
                </Panel>
                <Panel name="3">
                  分类
                  <div slot="content">

                  </div>
                </Panel>
              </Collapse>
            </Form>
          </div>
          <div class="ui vertical segment">
            <Form :model="formItem" :label-width="80" label-position="left">
              <FormItem label="面料">
                <Input v-model="formItem.input" placeholder="面料"></Input>
              </FormItem>
              <FormItem label="成份">
                <Input v-model="formItem.input" placeholder="成份"></Input>
              </FormItem>
            </Form>
          </div>
          <div class="ui vertical segment">
            尺码表（CM）
            <div class="tag">
              <Tag checkable color="blue">S</Tag>
              <Tag checkable color="blue">M</Tag>
              <Tag checkable color="blue">XL</Tag>
              <Tag checkable color="blue">XXL</Tag>
            </div>
            <Form :model="formItem" class="detail">
              <FormItem>
                <Row>
                  <Col span="11">
                  <Input v-model="formItem.input" placeholder="腰围"></Input>
                  </Col>
                  <Col span="1" style="text-align: center">
                  -
                  </Col>
                  <Col span="11">
                  <Input v-model="formItem.input" placeholder=""></Input>
                  </Col>
                </Row>
              </FormItem>
              <FormItem>
                <Row>
                  <Col span="11">
                  <Input v-model="formItem.input" placeholder="腿围"></Input>
                  </Col>
                  <Col span="1" style="text-align: center">
                  -
                  </Col>
                  <Col span="11">
                  <Input v-model="formItem.input" placeholder=""></Input>
                  </Col>
                </Row>
              </FormItem>
              <FormItem>
                <Row>
                  <Col span="11">
                  <Input v-model="formItem.input" placeholder="大腿围"></Input>
                  </Col>
                  <Col span="1" style="text-align: center">
                  -
                  </Col>
                  <Col span="11">
                  <Input v-model="formItem.input" placeholder=""></Input>
                  </Col>
                </Row>
              </FormItem>
              <FormItem>
                <Row>
                  <Col span="11">
                  <Input v-model="formItem.input" placeholder="小腿围"></Input>
                  </Col>
                  <Col span="1" style="text-align: center">
                  -
                  </Col>
                  <Col span="11">
                  <Input v-model="formItem.input" placeholder=""></Input>
                  </Col>
                </Row>
              </FormItem>
              <p class="explain">
                <Icon type="help-circled" color="green"></Icon>
                填写尺码详细可分享给客户
              </p>
            </Form>
          </div>
          <div class="ui vertical segment">
            <Form :model="formItem" :label-width="80" label-position="left">
              <FormItem label="备注">
                <Input v-model="formItem.input" placeholder="备注"></Input>
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
    </my-drawer>
  </div>
</template>
<script>
  import myDrawer from '../../common/vue/myDrawer.vue';

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
          textarea: '',
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
      myDrawer
    }
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
        text-align: right;
      }
    }
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

  .add-goods {
    .add-img {
      width: 76px;
      height: 76px;
      border: 1px dotted gray;
      .upload-icon {
        font-size: 50px;
        margin: {
          top: 13px;
          left: 17px;
        }
        color: gray;
      }
    }
    .detail, .tag {
      margin-top: 8px;
    }
  }

  .explain {
    margin-top: 10px;
    color: rgba(0, 0, 0, 0.4);
    font-size: 8px;
  }

</style>
