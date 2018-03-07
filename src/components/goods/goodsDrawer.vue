<template>
  <div class="goodsAddDrawer">

    <my-drawer :open="goodsAddOpen" :btnFont="btnFont" title="商品添加" @close-drawer="closeGoodsDrawer"
               @complate-drawer="addGoodsCallback">
      <div class="add-goods">
        <alienUpload @upload-img="uploadImg1" style="padding: 0 1em;margin-top: 5px;" :imageLimit="imageLimit" @count-exceed-limit="countExceedLimit" uploadType="all" :BtnColor="systemColor" :progressColor="systemColor" :compressQuality="compressQuality" showProgress :ProgressPercent="ProgressPercent1" ref="uploadImg"></alienUpload>
        <div class="ui segment">
          <div class="ui vertical segment">
            <Form :model="formItem" :label-width="80" label-position="left">
              <FormItem >
                <span slot="label">货号<span class="red-star">*</span></span>
                <Input v-model="formItem.productCode2" placeholder="货号"></Input>
              </FormItem>
              <FormItem >
                <span slot="label">简称<span class="red-star">*</span></span>
                <Input v-model="formItem.productName" placeholder="简称"></Input>
              </FormItem>
              <FormItem >
                <span slot="label">售价<span class="red-star">*</span></span>
                <InputNumber  :min="1" v-model="formItem.productPrice1"  style="width:70%;"></InputNumber>
              </FormItem>
              <FormItem :label-width="120" style="border-bottom: 0px">
                <div style="width: 120px;" slot="label" >
                  自定义售价
                  <span class="red-star" style="margin-left: -3px;">*</span>
                  <Tooltip content="填写自定义售价，系统倍率将失效" placement="top">
                    <i class="iconfont  icon-wenhao" style="left: -3px;position: relative;top: 3px;" ></i>
                  </Tooltip>
                </div>
                <InputNumber  :min="1" v-model="formItem.productPrice2" placeholder="自定义售价" style="width: 82.5%;"></InputNumber>
               <!-- <Input v-model="formItem.productPrice2" placeholder="自定义售价" style="width: 82.5%;"></Input>-->
              </FormItem>
            </Form>
          </div>
          <div class="ui vertical segment">
            <alienUpload @upload-img="uploadImg2" multipleClass="sec" class="sec_upload" style="margin-top: 10px;" uploadType="all" :BtnColor="systemColor" :progressColor="systemColor" :compressQuality="compressQuality" showProgress :ProgressPercent="ProgressPercent2"></alienUpload>
            <span class="explain">上传图片,不要超过1M,否则系统自动压缩,单个商品最少9张图片,点击照片查看大图。</span>
          </div>
          <div class="ui vertical segment">
            <Form :model="formItem" :label-width="80"label-position="left">
              <FormItem class="img-no-padding" >
                <div style="width: 120px" slot="label"><Icon type="information-circled" size="20" ></Icon>图片网店可用</div>
                <i-switch v-model="formItem.onlineStoreUse" >
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
                  <Tag  color="blue">S</Tag>
                  <Tag  color="blue">M</Tag>
                  <Tag  color="blue">XL</Tag>
                  <Tag type="dot" >
                    <Icon type="plus-round" ></Icon>
                  </Tag>
                </div>

              </FormItem>
              <FormItem label="分类" class="property-content">
                <Cascader :data="data" class="clothTypeSelect" :render-format="format" v-model="typeSelectValue"></Cascader>
              </FormItem>
              <FormItem label="初始库存">
                <InputNumber  :min="1" v-model="formItem.amount"  style="width:70%;"></InputNumber>
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
                  <Input v-model="formItem.productFabric" placeholder="面料"></Input>
                </FormItem>
                <FormItem label="成份">
                  <Input v-model="formItem.productFabricin" placeholder="成份"></Input>
                </FormItem>
              </Form>
            </div>
            <div class="ui vertical segment" style="margin-top: 10px;">
              尺码表（CM）
              <div class="size-tag">
                <Tag class="my-tag"  color="blue" @click.native="activeSize($event,'S')">S</Tag>
                <Tag class="my-tag" color="blue" @click.native="activeSize($event,'M')">M</Tag>
                <Tag class="my-tag" color="blue" @click.native="activeSize($event,'XL')">XL</Tag>
                <Tag class="my-tag" color="blue" @click.native="activeSize($event,'XXL')">XXL</Tag>
              </div>
              <Form :model="formItem" class="detail">
                <FormItem v-for="item in sizeIncludeArray" v-show="item.sizeName === activeSizeName ">
                  <Row>
                    <Col span="11">
                    <Input  :placeholder="item.includeName"  class="centerInput" disabled></Input>
                    </Col>
                    <Col span="1" style="text-align: center">
                    </Col>
                    <Col span="11">
                    <Input v-model="item.includeValue" placeholder="" ></Input>
                    </Col>
                  </Row>
                </FormItem>

                <FormItem>
                  <Row  class="addSizeBtn"  v-show="showSelectSizeBtn">
                    <Col span="22" >
                      <Button  type="ghost" icon="plus-round" @click="chooseSizeInclude"></Button>
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
                  <Input v-model="formItem.memo" placeholder="备注"></Input>
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
      <Spin size="large" fix v-if="spinShow"></Spin>
    </my-drawer>
    <sizeInclude @choose-size-tag="chooseSizeTag" ref="sizeIncludeModel" @on-cancle="onCancle" ></sizeInclude>

  </div>
</template>
<script>
  import myDrawer from '../../common/vue/myDrawer.vue';
  import goodsManageApi from '../../api/goodsManage';
  import sizeInclude from './goodsSizeInclude.vue'
  export default {
    props: {
      goodsAddOpen: {
        type: Boolean,
        default: false
      },
      btnFont: {
          type : String,
      },
      productInfo:{
          type : Object,
          default :null,
      }
    },
    data() {
      return {
        spinShow:false,
        showSelectSizeBtn:false,
        checkedFlag:false,
        typeSelectValue:[],
        imageLimit:1,
        compressQuality:.6,
        ProgressPercent1:0,
        ProgressPercent2:0,
        showDetail:false,
        systemColor:SYSTEMCOLOR,
        formItem: {},
        data: [],
        sizeIncludeArray:[],
        includeActive:[],
        activeSizeName:null,
      };
    },
    created(){

        console.log(this.productInfo)
        this.getAllTypes();
    },
    watch:{
      goodsAddOpen(v1,v2){
          if(v1 && this.btnFont === '新增'){
            this.showDetail = false;
            this.formItem ={
                memo:null,
                onlineStoreUse:false,
                amount:0,
                productFabric:null,
                productName:null,
                productCode2:null,
                productPrice1:1,
                productPrice2:1,
                productFabricin:null,
              };
          } else if(v1 && this.btnFont === '修改'){
            this.formItem = this.productInfo;
            this.showDetail = true;
            this.getIncludeSize()
          }

      }
    },
    methods: {
      getIncludeSize(){

      },
      activeSize(e,size){
        this.showSelectSizeBtn = true;
        this.activeSizeName = size;
        this.$nextTick(function(){
          let dom = null;
          dom = e.target;
          if( dom.className.indexOf('ivu-tag-checked') === -1){
            return;
          }
          Array.prototype.forEach.call(document.querySelectorAll('.my-tag'),function(item){
            item.className = 'my-tag  ivu-tag ivu-tag-blue ivu-tag-checked';
          })
          dom.className = 'my-tag ivu-tag ivu-tag-blue';
        })
      },
      chooseSizeInclude(){
          let that = this;
        if(this.typeSelectValue.length === 0){
          this.$warning(operatorWarning,'请先选择服装分类再进行该操作！');
          return;
        }
        let activeSizeArr = this.sizeIncludeArray.filter(function (item,index,arr) {
          return item.sizeName === that.activeSizeName;
        }).map(function(item){
          return item.includeName
        })
        console.log(activeSizeArr)
        this.$refs.sizeIncludeModel.showModel(this.typeSelectValue[this.typeSelectValue.length-1],activeSizeArr.join(','))
      },
      chooseSizeTag(name,type){
        type === 'add' ? this.addSizeInclude(name) : this.deleteSizeInclude(name)
      },
      addSizeInclude(name){
          let includeObj = {
            sizeName : this.activeSizeName,
            includeName : name,
            includeValue : null,
          }
          if(this.btnFont === '修改'){
              includeObj.productId = this.formItem.productId;
          }
        this.sizeIncludeArray.push(includeObj);
      },
      deleteSizeInclude(name){
          let that = this;
        this.sizeIncludeArray.forEach(function(item,index,arr){
            if(item.sizeName === that.activeSizeName && item.includeName === name){
              that.sizeIncludeArray.splice(index,1);
            }
        })
      },
      onCancle(){
        this.modalOpenFlag = false;
      },
      uploadImg1(value){
          let len = value.length,
              that = this,
              onrProgress = (1/len).toFixed(2)*100;
          value.map(function(item,index){
              goodsManageApi.picUplaod(item).then(response=>{
                  index === len-1 ? that.ProgressPercent1=100 :that.ProgressPercent1 += onrProgress;
              })
          })
      },
      uploadImg2(value){
        let len = value.length,
          that = this,
          onrProgress = (1/len).toFixed(2)*100;
        value.map(function(item,index){

          goodsManageApi.picUplaod(item).then(response=>{
            index === len-1 ? that.ProgressPercent2=100 :that.ProgressPercent2 += onrProgress;
          })
        })
      },
      format (labels, selectedData) {
          return labels.join('|')
      },
      getAllTypes(){
        goodsManageApi.getProductsTypes().then(response =>{
            let result = response.data;
            this.addTypeLableAndValue(result);
            this.data = result;

        }).catch(response =>{
            this.$error(apiError,'服装分类列表获取出错!')
        })
      },
      addTypeLableAndValue(value){
          let that = this;
          if(value.length>0){
            Array.prototype.forEach.call(value,function(item){
              item.label =  item.value = item.producttypeName;
              if(item.subTypes.length>0){
                  item.children = item.subTypes
                 delete item.subTypes
                that.addTypeLableAndValue(item.children)
              }
            })
          }
      },
      countExceedLimit(){
          this.$warning(operatorWarning,'上传图片超出['+this.imageLimit+']张的数量限制');
      },
      addGoodsCallback() {
        ISNULL(this.formItem.productPic) ?  this.showNoImageModel() : this.showNoImageModel();

         /* this.$emit('complate-product')*/
      },
      showNoImageModel(){
        this.$Modal.confirm({
          title: operatorWarning,
          content: '当前产品未选择展示图片，是否继续提交？',
          okText: '确认提交',
          cancelText: '取消',
          onOk: () => {
            this.addProducts();
          },
        });
      },
      addProducts(){
          console.log(1111)
       /* this.spinShow = true*/
      },
      closeGoodsDrawer(){
          this.$emit('closeGoodsDrawer')
      }
    },
    components: {
      myDrawer,
      sizeInclude
    }
  };
</script>
<style lang="scss" rel="stylesheet/scss" type="text/scss">
  @import '../../common/css/globalscss';
  $borderColorGoodsDrawer:#f2f1f2;
  .goodsAddDrawer{
    .clothTypeSelect{
      .ivu-select-dropdown{
        right:0;
      }
    }
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
  /*  .ui.vertical.segment:first-child,.ui.vertical.segment:nth-child(3){
      border-bottom:1px solid $borderColorGoodsDrawer;
    }*/
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
    .img-no-padding{
      .ivu-form-item-label{
        padding:0px;
      }
    }
  }
</style>
