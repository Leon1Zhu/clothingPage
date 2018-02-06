<template>
    <div id="storeManage">
      <tool-bar>
        <Button type="primary" icon="plus-round" @click.native="addNewStore('');">添加新门店</Button>
      </tool-bar>
      <Table stripe border :columns="columns10" :data="data9"></Table>
      <my-drawer :open="open" title="门店管理" :btnFont="btnFont" @close-drawer="open = false" @complate-drawer="complateDrawer">
        <div class="store-change-content">
          <div class="store-item">
            <div class="left-content">
              <Icon type="information-circled" size="20" ></Icon>
              <div class="store-item-label">请选择是否是默认主店铺</div>
            </div>
            <div class="right-content">
              <i-switch v-model="addSotreItem.shopIsdefault === '1' " @on-change="changeDefault" >
                <span slot="open"></span>
                <span slot="close"></span>
              </i-switch>
            </div>
          </div>


          <div class="store-item store-item-icon-color">
            <div class="left-content">
              <i class="iconfont  icon-shangjia" ></i>
              <div class="store-item-label">门店名称<span class="red-star">*</span></div>
            </div>
            <div class="right-content">
              <Input v-model="addSotreItem.shopName" placeholder="门店名称" ></Input>
            </div>
          </div>

          <div class="store-item no-border-bottom-item store-item-icon-color">
            <div class="left-content">
              <i class="iconfont  icon-10xiangxidizhi" ></i>
              <div class="store-item-label">门店地区<span class="red-star">*</span></div>
            </div>
            <div class="right-content">
              <Cascader :data="data" v-model="marketNameArr"></Cascader>
            </div>
          </div>

          <div class="store-item  ">
            <div class="left-content">
              <div  style="margin-left: 27px;" class="store-item-label">详细地址<span class="red-star">*</span></div>
            </div>
            <div class="right-content">
              <Input v-model="addSotreItem.shopAddr" placeholder="详细地址" ></Input>
            </div>
          </div>

          <div class="store-item  store-item-icon-color">
            <div class="left-content">
              <i class="iconfont  icon-dianhua" ></i>
              <div   class="store-item-label">门店电话1<span class="red-star">*</span></div>
            </div>
            <div class="right-content">
              <Input v-model="addSotreItem.shopPhone1" placeholder="门店电话1" style="width: 72%;"></Input>
            </div>
          </div>

          <div class="store-item  ">
            <div class="left-content">
              <div  style="margin-left: 27px;" class="store-item-label">门店电话2<span class="red-star">*</span></div>
            </div>
            <div class="right-content">
              <Input v-model="addSotreItem.shopPhone2" placeholder="门店电话2" style="width: 72%;"></Input>
            </div>
          </div>


          <div class="store-item  store-item-icon-color">
            <div class="left-content">
              <i class="iconfont  icon-weixin" ></i>
              <div   class="store-item-label">门店微信<span class="red-star">*</span></div>
            </div>
            <div class="right-content">
              <Input v-model="addSotreItem.shopWechat" placeholder="门店微信" ></Input>
            </div>
          </div>

          <div class="store-item  store-item-icon-color">
            <div class="left-content">
              <i class="iconfont  icon-qq" ></i>
              <div   class="store-item-label">门店QQ&nbsp;&nbsp;<span class="red-star">*</span></div>
            </div>
            <div class="right-content">
              <Input v-model="addSotreItem.shopQq" placeholder="门店QQ" ></Input>
            </div>
          </div>


          <div class="store-item  no-border-bottom-item store-item-icon-color">
            <div class="left-content">
              <i class="iconfont  icon-zhifufangshi" ></i>
              <div   class="store-item-label">支付方式<span class="red-star">*</span></div>
            </div>
            <div class="right-content" style="display: flex;justify-content: flex-end;">
              <div class="btn-content">
                <div v-for="item in storePayType" style="margin-left: 3px;"   class="service-item" :class="{ active : payTypeActiveClass(item.label)}"  @click="managepType(item.label)">{{item.label}}</div>
              </div>
            </div>
          </div>

          <div class="store-item no-border-bottom-item ">
            <div class="left-content">
              <div  style="margin-left: 27px;" class="store-item-label">微信支付&nbsp;&nbsp;</div>
            </div>
            <div class="right-content">
              <Input v-model="addSotreItem.shopWechatpay" placeholder="微信支付账号" ></Input>
            </div>
          </div>
          <div class="store-item  ">
            <div class="left-content">
              <div  style="margin-left: 27px;" class="store-item-label">支付宝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
            </div>
            <div class="right-content">
              <Input v-model="addSotreItem.shopAlipay" placeholder="支付宝账号" ></Input>
            </div>
          </div>

          <div class="store-item  store-item-icon-color">
            <div class="left-content">
              <i class="iconfont  icon-shoukuan" ></i>
              <div   class="store-item-label">收款名<span class="red-star">*</span>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            </div>
            <div class="right-content">
              <Input v-model="addSotreItem.shopAlipayName" placeholder="收款名称" ></Input>
            </div>
          </div>

          <div class="store-item  store-item-icon-color">
            <div class="left-content">
              <i class="iconfont  icon-fuwu" ></i>
              <div   class="store-item-label">店铺服务<span class="red-star">*</span></div>

            </div>
            <div class="right-content" style="display: flex; justify-content: flex-end">
              <div class="btn-content">
                <div v-for="item in storeService"   class="service-item" :class="{ active : serviceActiveClass(item.label)}"  @click="manageService(item.label)">{{item.label}}</div>
              </div>

            </div>
          </div>



        </div>

      </my-drawer>


      <Modal v-model="modal2" width="360">
        <p slot="header" style="color:#f60;text-align:center">
          <Icon type="information-circled"></Icon>
          <span>门店删除确认</span>
        </p>
        <div style="text-align:center">
          <p>你确认删除[{{addSotreItem.shopName}}]么。</p>
        </div>
        <div slot="footer">
          <Button type="error" size="large" class="delete_store" long :loading="modal_loading" @click="del">删除</Button>
        </div>
      </Modal>
    </div>
</template>

<script>
  import myDrawer from'../../common/vue/myDrawer.vue'
  import toolBar from'../../common/vue/toolBar.vue'
  import storeManageApi from '../../api/storeManageApi'
    export default{
        data(){
            return {
              open:false,
              btnFont:'新增',
              modal2:false,
              modal_loading:false,
              storeService:STORESERVICE,
              storePayType:PAYTYPE,
              addSotreItem:{
                shopIsdefault:null,
                shopName:null,
                marketName:null,
                shopAddr:null,
                shopWechat:null,
                shopWechatpay:null,
                shopPhone1:null,
                shopPhone2:null,
                shopAlipay:null,
                shopAlipayName:null,
                shopTags:null,
                shopQq:null,
              },
              marketNameArr:null,
              shopTagsArr:[],
              payTypeArr:[],
              columns10: [
                {
                  title: '门店名称',
                  key: 'shopName'
                },
                {
                  title: '门店地区',
                  key: 'marketName',
                  render: (h, params) => {
                      if(!ISNULL(params.row.marketName)){
                        let market = params.row.marketName.split('|')
                        let innerHtml = '';
                        innerHtml+= '<div class="ivu-tag ivu-tag-blue ivu-tag-checked"><span class="ivu-tag-text ivu-tag-color-white">'+market[market.length-1]+'</span> </div>'
                        return h('div', {
                          domProps: {
                            innerHTML: innerHtml
                          }
                        },);
                      }else{
                        return h('div', {},params.row.marketName);
                      }

                  }

                },
                {
                  title: '门店地址',
                  key: 'shopAddr',
                },

                {
                  title: '门店微信',
                  key: 'shopWechat',
                },
                {
                  title: '门店QQ',
                  key: 'shopQq',
                },
                {
                  title: '门店电话',
                  key: 'shopPhone1',
                },
                {
                  title: '门店服务',
                  width:'18%',
                  key: 'shopTags',
                  render: (h, params) => {
                    if(!ISNULL(params.row.marketName)){
                      let shopTags = params.row.shopTags.split('|')
                      let innerHtml = '';
                      for(let i=0,len = shopTags.length;i<len;i++){
                        innerHtml+= '<div class="ivu-tag ivu-tag-blue ivu-tag-checked"><span class="ivu-tag-text ivu-tag-color-white">'+shopTags[i]+'</span> </div>'
                      }
                      return h('div', {
                        domProps: {
                          innerHTML: innerHtml
                        }
                      },);
                    }else{
                      return h('div', {},params.row.shopTags);
                    }

                  }
                },
                {
                  title: '操作',
                  key: 'operate',
                  width:'9%',
                  render: (h, params) => {
                    return h('div',{
                        style:{
                        }
                    }, [
                     /* h('Tooltip', {
                        props: {
                          content: '修改信息',
                          placement: 'top',
                        },
                      }, [
                        h('Button', {
                          props: {
                            type: 'ghost',
                            shape: 'circle',
                            icon:"ios-compose-outline"
                          },
                          style: {
                          },
                          on: {
                            click: () => {
                              this.open=true
                              this.btnFont = '修改'
                            }
                          }
                        }, ),
                      ]),*/
                      h('i', {
                        'class':{
                          iconfont:true,
                          'icon-bi':true,
                        },
                        style: {
                          color:SYSTEMCOLOR
                        },
                        on: {
                          click: () => {
                              this.open=true
                              this.addSotreItem.shopId =  params.row.shopId
                              this.addSotreItem.shopIsdefault =  params.row.shopIsdefault
                              this.addSotreItem.shopName =  params.row.shopName
                              this.addSotreItem.marketName =  params.row.marketName
                              this.addSotreItem.shopAddr =  params.row.shopAddr
                              this.addSotreItem.shopWechat =  params.row.shopWechat
                              this.addSotreItem.shopWechatpay =  params.row.shopWechatpay
                              this.addSotreItem.shopPhone1 =  params.row.shopPhone1
                              this.addSotreItem.shopPhone2 =  params.row.shopPhone2
                              this.addSotreItem.shopAlipay =  params.row.shopAlipay
                              this.addSotreItem.shopAlipayName =  params.row.shopAlipayName
                              this.addSotreItem.shopTags =  params.row.shopTags
                              this.addSotreItem.shopQq =  params.row.shopQq
                              this.addSotreItem.payType = params.row.payType
                              this.marketNameArr = this.addSotreItem.marketName === undefined ? []:this.addSotreItem.marketName.split('|');
                              this.shopTagsArr = this.addSotreItem.shopTags ===undefined ? [] : this.addSotreItem.shopTags.split('|');
                              this.payTypeArr = this.addSotreItem.payType === undefined ? []: this.addSotreItem.payType.split('|');
                              this.btnFont = '修改'
                          }
                        }
                      }, ),
                      h('i',{
                        'class':{
                          iconfont:true,
                          'icon-shanchu4':true,
                        },
                        style: {
                            marginLeft:'20%',
                            color:SYSTEMCOLOR
                        },
                        on:{
                            click: () => {
                              this.addSotreItem =  params.row
                              this.addSotreItem.shopId =  params.row.shopId
                              this.modal2 = true
                            }
                        }
                      },)
                    ]);
                  }
                }
              ],
              data9: [],
              data: []
            }
        },
        components: {
            'my-drawer':myDrawer,
            'tool-bar':toolBar
        },
        created(){
            this.getMarket();
            this.getAllStore()
        },
        mounted(){
        },
        methods: {
          changeDefault(boolean){
                this.addSotreItem.shopIsdefault  = boolean ? '1' :'0';
          },
          getAllStore(){
            storeManageApi.getAllStoreByAccountId(this.$store.getters.getAccountId).then((response)=>{
                this.data9 = response.data
            }).catch((response)=>{
                this.$error(apiError,'获取店铺列表出错')
            })
          },
          complateDrawer(){
            this.addSotreItem.shopTags =  this.shopTagsArr.join('|');
            this.addSotreItem.payType =  this.payTypeArr.join('|');
            this.addSotreItem.marketName =  this.marketNameArr.join('|');
            if(ISNULL(this.addSotreItem.shopName)){
                this.$error(operatorError,'门店名称不能为空!');
                return;
            }
            storeManageApi.manageShop(this.$store.getters.getAccountId,this.addSotreItem).then((response) =>{
                let flag = '门店新增成功！';
                if(this.btnFont === '修改'){
                  flag = '门店修改成功！';
                }
                this.$success(opeartorSuccess,flag)
                this.getAllStore();
                this.open = false;
            }).catch((response) =>{
              this.$error(operatorError,'门店信息修改出错！');
            })
          },
          addNewStore(){
            this.addSotreItem={
              shopIsdefault:'0',
                shopName:null,
                marketName:null,
                shopAddr:null,
                shopWechat:null,
                shopWechatpay:null,
                shopPhone1:null,
                shopPhone2:null,
                shopAlipay:null,
                shopAlipayName:null,
                shopTags:null,
                shopQq:null,
            };
            this.shopTagsArr = [];
            this.payTypeArr = [];
            this.marketNameArr = [];
              this.open=true;

              this.btnFont = '新增'
          },
          manageService(service){
            for(let item in this.shopTagsArr){
              if(this.shopTagsArr[item] === ""){this.shopTagsArr = [];break}
              if(this.shopTagsArr[item] === service){
                this.shopTagsArr.splice(item,1);
                return;
              }
            }
            this.shopTagsArr.push(service)
          },
          managepType(payType){
              for(let item in this.payTypeArr){
                  if(this.payTypeArr[item] === ""){this.payTypeArr = [];break}
                  if(this.payTypeArr[item] === payType){
                     this.payTypeArr.splice(item,1);
                    return;
                  }
              }
                this.payTypeArr.push(payType)

          },
          del () {
            this.modal_loading = true;
            storeManageApi.deleteStore(this.$store.getters.getAccountId, this.addSotreItem.shopId ).then((response) =>{
                this.$success(opeartorSuccess,'门店删除成功');
                this.getAllStore();
                this.modal_loading = false;
                this.modal2 = false;
            }).catch((response) =>{
                this.$error(operatorError,response.data.message)
            })
          },
          getMarket(){
              storeManageApi.getMarket().then((response) =>{
                  let marketArr = response.data
                for(let item in marketArr){
                  marketArr[item] = this.changeMaeket(marketArr[item])
                }
                  this.data = marketArr
              }).catch((response) => {
                  this.$error(apiError,'获取地区列表出错')
              })
          },
          changeMaeket(marketArr){
              let marketItem = marketArr;
              marketItem['value'] = marketItem['label'] = marketItem['mkName']
              marketItem['children'] =  marketItem['subMarkets']
              if(marketItem['subMarkets'] && marketItem['subMarkets'].length>0){
                marketItem = marketItem['subMarkets'];
                for(let itemT=0;itemT< marketItem.length;itemT++){
                      marketItem[itemT] = this.changeMaeket(marketItem[itemT])
                }
              }
            return marketArr;
          },
          serviceActiveClass(value){
              for(let item=0;item< this.shopTagsArr.length;item++){
                  if(value === this.shopTagsArr[item]){
                    return true;
                  }
              }
              return false;
          },
          payTypeActiveClass(value){
            for(let item=0;item< this.payTypeArr.length;item++){
              if(value === this.payTypeArr[item]){
                return true;
              }
            }
            return false;
          },
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import '../../common/css/globalscss';
  #storeManage{
    .iconfont:hover{
      cursor: pointer;
    }
    .ivu-select,.ivu-input-type{
      width: 70%;
    }
    .ivu-select-single .ivu-select-selection,.ivu-select-dropdown-list,.ivu-cascader-menu{
      text-align: left;
    }

    .content{
        .store-change-content{
          padding:0px 5px;
      }
    }

    .ivu-icon-information-circled:before{
      color: $menuSelectFontColor;
      position: relative;
      top:4px;
    }
    .ivu-tag-blue{
      background: $menuSelectFontColor;
    }

  }

</style>
