<template>
  <div class="goodsAddDrawer">

    <my-drawer :open="goodsAddOpen" :btnFont="btnFont" title="商品添加" @close-drawer="closeGoodsDrawer"
               @complate-drawer="addGoodsCallback">
      <div class="add-goods">
        <alienUpload style="padding: 0 1em;margin-top: 5px;" uploadType="all" :BtnColor="systemColor" :progressColor="systemColor" :compressQuality="compressQuality" showProgress :ProgressPercent="ProgressPercent" ref="uploadImg"></alienUpload>
        <div class="ui segment">
          <div class="ui vertical segment">
            <Form :model="formItem" :label-width="80" label-position="left">
              <FormItem >
                <span slot="label">货号<span class="red-star">*</span></span>
                <Input v-model="formItem.input" placeholder="货号"></Input>
              </FormItem>
              <FormItem >
                <span slot="label">简称<span class="red-star">*</span></span>
                <Input v-model="formItem.input" placeholder="简称"></Input>
              </FormItem>
              <FormItem >
                <span slot="label">售价<span class="red-star">*</span></span>
                <Input v-model="formItem.input" placeholder="售价"></Input>
              </FormItem>
              <FormItem :label-width="120" style="border-bottom: 0px">
                <div style="width: 120px;" slot="label" >
                  自定义售价
                  <span class="red-star" style="margin-left: -3px;">*</span>
                  <Tooltip content="填写自定义售价，系统倍率将失效" placement="top">
                    <i class="iconfont  icon-wenhao" style="left: -3px;position: relative;top: 3px;" ></i>
                  </Tooltip>
                </div>
                <Input v-model="formItem.input" placeholder="自定义售价" style="width: 82.5%;"></Input>
              </FormItem>
            </Form>
          </div>
          <div class="ui vertical segment">
            <alienUpload class="sec_upload" style="margin-top: 10px;" uploadType="all" :BtnColor="systemColor" :progressColor="systemColor" :compressQuality="compressQuality" showProgress :ProgressPercent="ProgressPercent" ref="uploadImg"></alienUpload>
            <span class="explain">上传图片,不要超过1M,否则系统自动压缩,单个商品最少9张图片,点击照片查看大图。</span>
          </div>
          <div class="ui vertical segment">
            <Form :model="formItem" :label-width="80" label-position="left">
              <FormItem >
                <div style="width: 120px;" slot="label"><Icon type="information-circled" size="20" ></Icon>图片网店可用</div>
                <i-switch v-model="formItem.switch" >
                  <span slot="open"></span>
                  <span slot="close"></span>
                </i-switch>
              </FormItem>

              <FormItem label="颜色" class="property-content">
                <div class="ivu-input-wrapper" style="text-align: left;">
                  <Tag type="dot" closable color="blue">蓝色</Tag>
                  <Tag type="dot" closable color="green">绿色</Tag>
                  <Tag type="dot" closable color="red">红色</Tag>
                  <Tag type="dot" >
                      <Icon type="plus-round" ></Icon>
                  </Tag>
                </div>

              </FormItem>
              <FormItem label="尺码" class="property-content">

                <div class="ivu-input-wrapper" style="text-align: left;">
                  <Tag checkable color="blue">S</Tag>
                  <Tag checkable color="blue">M</Tag>
                  <Tag checkable color="blue">XL</Tag>
                  <Tag type="dot" >
                    <Icon type="plus-round" ></Icon>
                  </Tag>
                </div>

              </FormItem>
              <FormItem label="分类" class="property-content">
                <Cascader :data="data"></Cascader>
              </FormItem>
              <FormItem label="初始库存">
                <Input v-model="formItem.input" placeholder="初始库存"></Input>
              </FormItem>
            </Form>
          </div>
          <section class="showDetailItem" v-if="!showDetail" >
            <p @click="showDetail = !showDetail">更多信息</p>
            <Icon type="chevron-down"></Icon>
          </section>
          <section v-if="showDetail">
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
            <div class="ui vertical segment" style="margin-top: 10px;">
              尺码表（CM）
              <div class="size-tag">
                <Tag checkable color="blue">S</Tag>
                <Tag checkable color="blue">M</Tag>
                <Tag checkable color="blue">XL</Tag>
                <Tag checkable color="blue">XXL</Tag>
              </div>
              <Form :model="formItem" class="detail">
                <FormItem>
                  <Row>
                    <Col span="11">
                    <Input v-model="formItem.input" placeholder="腰围"  class="centerInput" disabled></Input>
                    </Col>
                    <Col span="1" style="text-align: center">
                    </Col>
                    <Col span="11">
                    <Input v-model="formItem.input" placeholder="" ></Input>
                    </Col>
                  </Row>
                </FormItem>
                <FormItem>
                  <Row>
                    <Col span="11">
                    <Input v-model="formItem.input" placeholder="腿围" class="centerInput" disabled> </Input>
                    </Col>
                    <Col span="1" style="text-align: center">
                    </Col>
                    <Col span="11">
                    <Input v-model="formItem.input" placeholder="" ></Input>
                    </Col>
                  </Row>
                </FormItem>
                <FormItem>
                  <Row>
                    <Col span="11">
                    <Input v-model="formItem.input" placeholder="大腿围" class="centerInput" disabled></Input>
                    </Col>
                    <Col span="1" style="text-align: center">
                    </Col>
                    <Col span="11">
                    <Input v-model="formItem.input" placeholder=""></Input>
                    </Col>
                  </Row>
                </FormItem>
                <FormItem>
                  <Row>
                    <Col span="11">
                    <Input v-model="formItem.input" placeholder="小腿围" class="centerInput" disabled></Input>
                    </Col>
                    <Col span="1" style="text-align: center">
                    </Col>
                    <Col span="11">
                    <Input v-model="formItem.input" placeholder=""></Input>
                    </Col>
                  </Row>
                </FormItem>
                <FormItem>
                  <Row  class="addSizeBtn">
                    <Col span="22" >
                      <Button  type="ghost" icon="plus-round"></Button>
                    </Col>
                  </Row>
                </FormItem>
                <p class="explain">
                  <Icon type="information-circled" size="20" ></Icon>
                  填写尺码详细可分享给客户
                </p>
              </Form>
            </div>
            <div class="ui vertical segment">
              <Form :model="formItem" :label-width="80" label-position="left">
                <FormItem label="备注" style="border-bottom: 0px;border-top: 1px solid #f2f1f1;">
                  <Input v-model="formItem.input" placeholder="备注"></Input>
                </FormItem>
              </Form>
            </div>
            <section class="showDetailItem" v-if="showDetail" >
              <p @click="showDetail = !showDetail">收起</p>
              <Icon type="chevron-up"></Icon>
            </section>
          </section>
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
      },
      btnFont: {
          type : String,
      }
    },
    data() {
      return {
        compressQuality:.6,
        ProgressPercent:0,
        showDetail:false,
        systemColor:SYSTEMCOLOR,
        formItem: {
          input: '',
          select: '',
          radio: 'male',
          checkbox: [],
          switch: true,
          time: '',
          slider: [20, 50],
          textarea: '',
          value1: '',
          value2: [],
        },
        data: [{
          value: 'beijing',
          label: '北京',
          children: [
            {
              value: 'gugong',
              label: '故宫'
            },
            {
              value: 'tiantan',
              label: '天坛'
            },
            {
              value: 'wangfujing',
              label: '王府井'
            }
          ]
        }, {
          value: 'jiangsu',
          label: '江苏',
          children: [
            {
              value: 'nanjing',
              label: '南京',
              children: [
                {
                  value: 'fuzimiao',
                  label: '夫子庙',
                }
              ]
            },
            {
              value: 'suzhou',
              label: '苏州',
              children: [
                {
                  value: 'zhuozhengyuan',
                  label: '拙政园',
                },
                {
                  value: 'shizilin',
                  label: '狮子林',
                }
              ]
            }
          ],
        }]
      };
    },
    watch:{
      goodsAddOpen(v1,v2){
        (v1 && this.btnFont === '新增') ?    this.showDetail = false : this.showDetail = true;


      }
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
  $borderColorGoodsDrawer:#f2f1f2;
  .goodsAddDrawer{
    .sec_upload{
      margin-top:10px;
    }
    .alien-upload{
      .upload_warp{
        margin:10px;
        height:100px;
        .upload_warp_right{
          line-height:100px;
        }
      }
      .upload_warp_img_div{
        height: 80px;
        width: 97px;
        margin: 0 15px 10px 0;
      }
    }
    .ui.vertical.segment:first-child,.ui.vertical.segment:nth-child(3){
      border-bottom:1px solid $borderColorGoodsDrawer;
    }
    .centerInput input{
      text-align: center;
    }
    .ui.segment {
      background: #fff;
      padding: 0em 1em;
      border-radius: .28571429rem;
      &.vertical {
        margin: 0;
        padding-left: 0;
        padding-right: 0;
        background: none transparent;
        border-radius: 0;
        box-shadow: none;
        border: none;
      }
    }
    .ivu-tooltip-inner{
      background-color: #fff;
      color: rgba(70,76,91,.9);
    }
    .icon-wenhao:before{
      padding: 0px;
      border-radius: 100%;
    }
    .icon-wenhao:before{
      font-size: 20px;
      color: $menuSelectFontColor;
      background: #fff;
    }
    .ivu-icon-information-circled:before{
      padding-right:2px;
      color: $menuSelectFontColor;
      position: relative;
      top:3px;
    }
    .ivu-collapse{
      border-radius:0;
      border:none;
      background: #fff;
    }
    .ivu-collapse>.ivu-collapse-item{
      border-top:0px;
      border-bottom:1px solid $borderColorGoodsDrawer;
      .ivu-collapse-header{
        padding-left:0px;
      }
    }
    .ivu-form-item{
      margin:0;
      padding:5px 0;
      border-bottom: 1px solid $borderColorGoodsDrawer;
    }
    .ivu-form .ivu-form-item-label{
      padding:10px 0px 12px 0px;
    }
    .ivu-form-item-content {
      text-align: right;
      .ivu-input-wrapper{
        width:70%;
      }
    }
    .size-chunk,.color-chunk{
      padding-bottom:5px;
    }
    .ivu-collapse-content>.ivu-collapse-content-box{
      padding-top:8px;
      padding-bottom:8px;
    }

    .ivu-tag.ivu-tag-blue{
      background-color: #fff;
      border:1px solid $menuSelectFontColor;
      color: $menuSelectFontColor;
      &.ivu-tag-checked{
        background: $menuSelectFontColor;
        color: white;
      }
    }
    .ivu-tag:not(.ivu-tag-border):not(.ivu-tag-dot):not(.ivu-tag-checked){
      background-color: #fff;
      border:1px solid $menuSelectFontColor;
      color: $menuSelectFontColor;
    }
    .ivu-tag{
      width:90px;
      text-align: center;
      height:32px;
      line-height:32px;
    }
    .property-content{
      .ivu-tag:last-child{
        .ivu-tag-dot-inner{
          display: none;
        }
        .ivu-icon.ivu-icon-plus-round{
          font-size: 23px;
          line-height: 32px;
          color: #c9c9c9;
        }
      }
    }

    .add-goods {
      .detail, .tag {
        margin-top: 8px;
      }
      .detail .ivu-input-wrapper{
        width:90%;
      }
    }

    .explain {
      margin:5px 0 ;
      color: rgba(0, 0, 0, 0.4);
      font-size: 8px;
      display: block;
      line-height: 1.5;
      padding-bottom: 6px;
    }
    .property-content .ivu-tag-dot{
      padding:0 10px;
    }

    .ui.vertical.segment .size-tag{
      margin-top:10px;
      margin-left:5%;
      .ivu-tag{
        background: $menuSelectFontColor;
        .ivu-tag-text{
          color: #fff;
        }
      }
      .ivu-tag-checked{
        border-color: $menuSelectFontColor;
        background: white;
        .ivu-tag-color-white{
          color: $menuSelectFontColor!important;
        }
      }
      .ivu-tag:not(:first-child):not(:nth-child(4n)){
        margin-left:10px;
      }
    }

    .showDetailItem{
      position: relative;
      background: #f7f7f9;
      margin: 0px -19px;
      height: 50px;
      line-height: 30px;
      text-align: center;
      color: #20b8a5;
      p{
        padding:10px 0  10px;
        display: inline-block;

      }
      p:hover{
        cursor: pointer;
      }
      i{
        color: rgba(32,184,165,.6);
        position: relative;
        top:-3px;
        opacity:0;

      }
      .ivu-icon.ivu-icon-chevron-down{
        animation: moveDown 1.3s ease-in infinite ;
      }
      .ivu-icon.ivu-icon-chevron-up{
        top:1px;
        animation: moveUp 1.3s ease-in infinite ;
      }
    }
    .addSizeBtn{
      margin-left: 4.5%;
      .ivu-col{
        left:0;
        .ivu-btn{
          width:100%;
          border-color: #dddee1!important;
          color: #cdcdcd!important;
        }
        .ivu-btn:hover{
          border-color: $menuSelectFontColor!important;
          color: $menuSelectFontColor!important;
        }
      }
    }
  }
</style>
