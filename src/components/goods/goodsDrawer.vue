<template>
  <div class="goodsAddDrawer">
    <my-drawer :open="goodsAddOpen" title="商品添加" @close-drawer="closeGoodsDrawer"
               @complate-drawer="addGoodsCallback">
      <div class="add-goods">
        <div class="ui segment">
          <div class="ui vertical segment">
            <div class="add-img">
              <Icon type="plus-round" class="upload-icon"></Icon>
            </div>
          </div>
          <div class="ui vertical segment">
            <Form :model="formItem" :label-width="80" label-position="left">
              <FormItem >
                <span slot="label">货号<span class="red-star">*</span></span>
                <Input v-model="formItem.input" placeholder="货号"></Input>
              </FormItem>
              <FormItem >
                <span slot="label">货号<span class="red-star">*</span></span>
                <Input v-model="formItem.input" placeholder="简称"></Input>
              </FormItem>
              <FormItem >
                <span slot="label">货号<span class="red-star">*</span></span>
                <Input v-model="formItem.input" placeholder="售价"></Input>
              </FormItem>
              <FormItem >
                <div style="width: 120px;" slot="label">自定义售价<span class="red-star">*</span><i class="iconfont  icon-wenhao" style="padding-left: 2px;position: relative;top: 4px;" ></i></div>
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
              <FormItem >
                <div style="width: 120px;" slot="label"><i class="iconfont  icon-gantanhao" style="padding-right: 2px;" ></i>图片网店可用</div>
                <i-switch v-model="formItem.switch" >
                  <span slot="open"></span>
                  <span slot="close"></span>
                </i-switch>
              </FormItem>
              <FormItem label="初始库存">
                <Input v-model="formItem.input" placeholder="初始库存"></Input>
              </FormItem>
              <Collapse v-model="formItem.value1">
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
                        <Tag type="dot" color="'#FF8C69'">红色</Tag>
                        <Tag type="dot" color="'#FF8247'">粉色</Tag>
                        <Tag type="dot" color="'#FF34B3'">玫瑰</Tag>
                        <Tag type="dot" color="'#FF0000'">牡红</Tag>
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
                        <Tag type="dot" color="'#06c1ae'">M</Tag>
                        <Tag type="dot" color="'#06c1ae'">L</Tag>
                        <Tag type="dot" color="'#06c1ae'">XL</Tag>
                        <Tag type="dot" color="'#06c1ae'">XXL</Tag>
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
                        <Tag type="dot" color="'#06c1ae'">M</Tag>
                        <Tag type="dot" color="'#06c1ae'">X</Tag>
                      </div>
                    </div>
                  </div>
                </Panel>
                <Panel name="3">
                  分类
                  <div slot="content">
                    <Tag checkable color="blue">上衣</Tag>
                    <Tag checkable color="blue">裤子</Tag>
                    <Tag checkable color="blue">外衣</Tag>
                    <Tag checkable color="blue">卫衣</Tag>
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
    props: {
      goodsAddOpen: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
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
      };
    },
    methods: {
      addGoodsCallback() {

      },
      closeGoodsDrawer(){
          this.$emit('closeGoodsDrawer')
      }
    },
    components: {
      myDrawer
    }
  };
</script>
<style lang="scss" rel="stylesheet/scss" type="text/scss">
  @import '../../common/css/globalscss';
  .goodsAddDrawer{
    .ui.segment {
      background: #fff;
      padding: .5em 1em;
      border-radius: .28571429rem;
      &.vertical {
        margin: 0;
        padding-left: 0;
        padding-right: 0;
        background: none transparent;
        border-radius: 0;
        box-shadow: none;
        border: none;
        border-bottom: 1px solid #f2f1f2;
      }
    }
    .icon-gantanhao:before,.icon-wenhao:before{
      padding: 0px;
      border-radius: 100%;
    }
    .icon-wenhao:before{
      font-size: 20px;
      color: $menuSelectFontColor;
      background: #fff;
    }
    .icon-gantanhao:before{
      font-size: 16px;
      color: #fff;
      background: $menuSelectFontColor;
      border:1px solid $menuSelectFontColor;
    }
    .ivu-form-item{
      margin:0;
      padding:5px 0;
      border-bottom: 1px solid #f2f1f2;
    }
    .ivu-form .ivu-form-item-label{
      padding:4px 0px 10px 0px;
    }
    .ivu-form-item-content {
      text-align: right;
      .ivu-input-wrapper{
        width:70%;
      }
    }
    .add-goods {
      .add-img {
        width: 76px;
        height: 76px;
        border-radius:3px;
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

  }
</style>
