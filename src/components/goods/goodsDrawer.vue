<template>
  <div class="goodsAddDrawer">

    <my-drawer :open="goodsAddOpen" :btnFont="btnFont" title="商品添加" @close-drawer="closeGoodsDrawer"
               @complate-drawer="addGoodsCallback">
      <div class="add-goods">
        <alienUpload @upload-img-success="uploadImg1" :url="imageUploadUrl" style="padding: 0 1em;margin-top: 5px;" :imageLimit="imageLimit" @count-exceed-limit="countExceedLimit" uploadType="all" :BtnColor="systemColor" :progressColor="systemColor" :compressQuality="compressQuality" showProgress  ref="uploadImg" :showImageList="showImageList1" @delete-show-img="deleteShowImg1"></alienUpload>
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
              </FormItem>
            </Form>
          </div>
          <div class="ui vertical segment">
            <alienUpload ref="uploadImg2" :url="imageUploadUrl" :imageMinLimit="imageMinLimit" @upload-img-success="uploadImg2" multipleClass="sec" class="sec_upload" style="margin-top: 10px;" uploadType="all" :BtnColor="systemColor" :progressColor="systemColor" :compressQuality="compressQuality" showProgress  :showImageList="showImageList2" @delete-show-img="deleteShowImg2"  @count-exceed-limit="countExceedLimit"></alienUpload>
            <span class="explain">上传图片,不要超过1M,否则系统自动压缩,单个商品最少9张图片,点击照片查看大图。</span>
          </div>
          <div class="ui vertical segment">
            <Form :model="formItem" :label-width="80"label-position="left">
              <FormItem class="img-no-padding" >
                <div style="width: 120px" slot="label"><Icon type="information-circled" size="20" ></Icon>图片网店可用</div>
                <i-switch  v-model="formItem.iswebsite">
                  <span slot="open"></span>
                  <span slot="close"></span>
                </i-switch>
              </FormItem>

              <FormItem label="颜色" class="property-content">
                <div class="ivu-input-wrapper" style="text-align: left;">
                  <Tag type="dot" closable :color="item.colorRgb" v-for="item in formItem.colors">{{item.colorName}}</Tag>
                  <Tag type="dot" @click.native="chooseColor">
                      <Icon type="plus-round" ></Icon>
                  </Tag>
                </div>

              </FormItem>
              <FormItem label="尺码" class="property-content">

                <div class="ivu-input-wrapper" style="text-align: left;">
                  <Tag  color="blue" v-for="item in formItem.sizes">{{item.sizeName}}</Tag>
                  <Tag type="dot" @click.native="chooseSize">
                    <Icon type="plus-round" ></Icon>
                  </Tag>
                </div>

              </FormItem>
              <FormItem label="分类" class="property-content">
                <Cascader @on-change="changeType" :data="data" class="clothTypeSelect"  v-model="typeSelectValue"></Cascader>
              </FormItem>
              <FormItem label="初始库存">
                <InputNumber  :min="0" v-model="formItem.productInitAmount"  style="width:70%;"></InputNumber>
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
                <Tag class="my-tag"  color="blue" v-for="item in formItem.sizes" @click.native="activeSize($event,item.sizeName)">{{item.sizeName}}</Tag>
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
                    <InputNumber  :min="0" v-model="item.includeValue"></InputNumber>
                   <!-- <Input v-model="" placeholder="" ></Input>-->
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
                  <Input v-model="formItem.productMemo" placeholder="备注"></Input>
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
    <colorselect ref="colorSelectModel" :selectColorArray="colorSelectArray" @select-color="selectColor"></colorselect>
    <sizeselect ref="sizeSelectModel" :selectSizeArray="sizeSelectArray" @select-size="selectSize"></sizeselect>
  </div>
</template>
<script>
  import myDrawer from '../../common/vue/myDrawer.vue';
  import goodsManageApi from '../../api/goodsManage';
  import sizeInclude from './goodsSizeInclude.vue';
  import './goodsDrawer.scss';
  import colorSelect from '../../common/vue/colorChoose.vue';
  import sizeSelect from '../../common/vue/sizeChoose.vue';
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
        imageUploadUrl:PICSERVICEURL+'/api/17wa-image/upload',
        spinShow:false,
        showSelectSizeBtn:false,
        checkedFlag:false,
        typeSelectValue:[],
        imageLimit:1,
        imageMinLimit:9,
        compressQuality:.6,
        ProgressPercent1:0,
        ProgressPercent2:0,
        showDetail:false,
        systemColor:SYSTEMCOLOR,
        formItem: {},
        data: [],
        sizeIncludeArray:[],
        activeSizeName:null,
        sizeSelectArray:[],
        colorSelectArray:[],
        showImageList1:[],
        showImageList2: [],
      };
    },
    created(){
        this.getAllTypes();
    },
    computed:{
      accountId(){
        return this.$store.getters.getAccountId;
      }
    },
    watch:{
      goodsAddOpen(v1,v2){
        if(v1){
          this.showImageList1 = [];
          this.showImageList2 = [];
          this.typeSelectValue = [];
          this.sizeIncludeArray = [];
          this.$refs.uploadImg.clearUp();
          this.$refs.uploadImg2.clearUp();
          if( this.btnFont === '新增'){
            this.colorSelectArray = [];
            this.sizeSelectArray = [];
            setTimeout(()=>{
              this.$info(opeartorInfo,'图片上传请先点击上传按钮。')
            },500)

            this.showDetail = false;

            this.formItem ={
              productMemo:null,
              productInitAmount:0,
              productFabric:null,
              productName:null,
              productCode2:null,
              productPrice1:1,
              productPrice2:1,
              productFabricin:null,
              productPic:null,
              productType:null,
              iswebsite:false,
              productDesc:'',
              colors:[],
              sizes:[],
            };
          } else if( this.btnFont === '修改'){
            /*this.formItem = this.productInfo;*/
            this.getDetailProductInfo()
            this.showDetail = true;
          }
        }


      }
    },
    methods: {
      //获取商品详情，包含sku数组
      getDetailProductInfo(){
         goodsManageApi.getProductionDetailInfo(this.accountId,this.productInfo.productId).then(response => {
           response.data.product.iswebsite = Boolean(response.data.product.iswebsite);
           this.formItem = response.data.product;
           this.formItem.colors = response.data.colors;
           this.formItem.productMemo =  this.formItem.memo
           this.formItem.sizes = response.data.sizes;
           this.showImageList1 =ISNULL(this.formItem.productPic) ?  [] : this.formItem.productPic.split(',');
           this.showImageList2 = ISNULL(this.formItem.productDesc) ? [] : this.formItem.productDesc.split(',');
           this.colorSelectArray = Array.prototype.map.call( this.formItem.colors,function(item){
             return item.colorName;
           })
           this.sizeSelectArray = Array.prototype.map.call(this.formItem.sizes,function(item){
             return item.sizeName;
           })
           this.typeSelectValue =  this.formItem.productType.split('|');
           this.getIncludeSize();
         }).catch(response =>{
            this.$error(apiError,'获取商品详情出错!');
         })
      },
      //删除之前有的图片
      deleteShowImg1(item,index){
        this.showImageList1.splice(index,1);
        this.formItem.productPic = '';
      },

      deleteShowImg2(item,index){
        if(this.formItem.productDesc.split(',').length <= this.imageMinLimit){
            this.$warning(operatorError,'图片数量不得少于['+this.imageMinLimit+']张');
        }
        let original = this.showImageList2.join(',');
        this.showImageList2.splice(index,1);
        let now = this.showImageList2.join(',');
        this.formItem.productDesc = this.formItem.productDesc.replace(original,now)
      },
      //颜色选择
      chooseColor(){
          this.$refs.colorSelectModel.showModel()
      },
      //尺码选择
      chooseSize(){
        this.$refs.sizeSelectModel.showModel()
      },
      //颜色选择回调
      selectColor(value){
        if(value.isActive === 'add'){
            this.colorSelectArray.push(value.colorName)
            this.formItem.colors.push(value)
        }else{
          this.colorSelectArray = this.colorSelectArray.filter(function(item){
              return item !== value.colorName;
          })
          this.formItem.colors =  this.formItem.colors.filter(function(item){
            return item.colorName !== value.colorName;
          })
        }
      },
      //尺码选择回调
      selectSize(value){
        if(value.isActive === 'add'){
          this.formItem.sizes.push(value)
        }else{
          this.sizeSelectArray = this.sizeSelectArray.filter(function(item){
            return item !== value.sizeName;
          })
          this.formItem.sizes =  this.formItem.sizes.filter(function(item){
            return item.sizeName !== value.sizeName;
          })
          this.sizeIncludeArray = this.sizeIncludeArray.filter(function (item,index,arr) {
            return item.sizeName === value.sizeName;
          })
        }
      },
      changeType(v1,v2){
          this.formItem.productType =  v1.join('|')
      },
      getIncludeSize(){
          goodsManageApi.getProductIncludeSize(this.accountId,this.formItem.productId).then(response =>{
              this.sizeIncludeArray = response.data;
          }).catch(response => {
              this.$error(apiError,'获取商品尺码表信息出错！');
          })
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
      uploadImg1(file,response){
            this.formItem.productPic = response.message
      },

      uploadImg2(file,response){
        this.formItem.productDesc += ISNULL(this.formItem.productDesc) ? response.message : ','+response.message ;
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
      countExceedLimit(info){
          if(info === 'more'){
            this.$warning(operatorWarning,'上传图片超出['+this.imageLimit+']张的数量限制');
          }else if(info === 'less'){
            this.$warning(operatorWarning,'上传图片少于['+this.imageMinLimit+']张的数量限制');
          }

      },
      addGoodsCallback() {
        ISNULL(this.formItem.productPic) ?  this.showNoImageModel() : this.addProducts();
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
        if(ISNULL( this.formItem.productCode2) || ISNULL(this.formItem.productName) || ISNULL(this.formItem.colors) || ISNULL(this.formItem.sizes) || ISNULL(this.formItem.productType)){
          this.$warning(operatorError,'请将[货号、简称、颜色、尺码、分类]信息填写完整')
          return;
        }
        this.spinShow = true;
        let flag = this.btnFont === '新增' ? '新增商品成功!' : '商品信息修改成功!';
          goodsManageApi.addProduct(this.accountId,this.formItem).then(response => {
              goodsManageApi.addProductIncludeSize(this.accountId,response.data.productId,this.sizeIncludeArray).then(response => {
                this.$emit('complate-product');
                this.$success(opeartorSuccess,flag)
                this.spinShow = false;
              }).catch(response => {
                this.$error(operatorError,'商品尺码表详情保存失败')
                this.spinShow = false;
              })

          }).catch(response =>{
              this.$error(operatorError,flag.replace('成功','失败'))
              this.spinShow = false;
          })
      },
      closeGoodsDrawer(){
          this.$emit('closeGoodsDrawer')
      }
    },
    components: {
      myDrawer,
      sizeInclude,
      'colorselect' : colorSelect,
      'sizeselect' : sizeSelect,
    }
  };
</script>
<style lang="scss" rel="stylesheet/scss" type="text/scss">

</style>
