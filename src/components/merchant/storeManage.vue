<template>
    <div id="storeManage">
      <tool-bar>
        <Button type="primary" icon="plus-round" @click.native="addNewStore('');">添加新门店</Button>
      </tool-bar>
      <Table stripe border :columns="columns10" :data="data9"></Table>
      <my-drawer :open="open" title="门店管理" :btnFont="btnFont" @close-drawer="open=false" @complate-drawer="complateDrawer">
        <div class="store-change-content">
          <div class="store-item">
            <div class="left-content">
              <Icon type="information-circled" size="20" ></Icon>
              <div class="store-item-label">请选择是否是默认主店铺</div>
            </div>
            <div class="right-content">
              <i-switch v-model="addSotreItem.defaultStore" >
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
              <Input v-model="addSotreItem.storeName" placeholder="门店名称" ></Input>
            </div>
          </div>

          <div class="store-item no-border-bottom-item store-item-icon-color">
            <div class="left-content">
              <i class="iconfont  icon-10xiangxidizhi" ></i>
              <div class="store-item-label">门店地区<span class="red-star">*</span></div>
            </div>
            <div class="right-content">
              <Cascader :data="data" v-model="addSotreItem.storeAdress"></Cascader>
            </div>
          </div>

          <div class="store-item  ">
            <div class="left-content">
              <div  style="margin-left: 27px;" class="store-item-label">详细地址<span class="red-star">*</span></div>
            </div>
            <div class="right-content">
              <Input v-model="addSotreItem.storeDetailAdress" placeholder="详细地址" ></Input>
            </div>
          </div>

          <div class="store-item  store-item-icon-color">
            <div class="left-content">
              <i class="iconfont  icon-dianhua" ></i>
              <div   class="store-item-label">门店电话<span class="red-star">*</span></div>
            </div>
            <div class="right-content">
              <Input v-model="addSotreItem.storePhone" placeholder="详细地址" ></Input>
            </div>
          </div>


          <div class="store-item  store-item-icon-color">
            <div class="left-content">
              <i class="iconfont  icon-weixin" ></i>
              <div   class="store-item-label">门店微信<span class="red-star">*</span></div>
            </div>
            <div class="right-content">
              <Input v-model="addSotreItem.weixin" placeholder="门店微信" ></Input>
            </div>
          </div>

          <div class="store-item  store-item-icon-color">
            <div class="left-content">
              <i class="iconfont  icon-qq" ></i>
              <div   class="store-item-label">门店QQ&nbsp;&nbsp;<span class="red-star">*</span></div>
            </div>
            <div class="right-content">
              <Input v-model="addSotreItem.weixin" placeholder="门店QQ" ></Input>
            </div>
          </div>


          <div class="store-item  no-border-bottom-item store-item-icon-color">
            <div class="left-content">
              <i class="iconfont  icon-zhifufangshi" ></i>
              <div   class="store-item-label">支付方式<span class="red-star">*</span></div>
            </div>
            <div class="right-content">
              <Input v-model="addSotreItem.weixin" placeholder="选择支付方式" ></Input>
            </div>
          </div>

          <div class="store-item no-border-bottom-item ">
            <div class="left-content">
              <div  style="margin-left: 27px;" class="store-item-label">微信支付&nbsp;&nbsp;</div>
            </div>
            <div class="right-content">
              <Input v-model="addSotreItem.storeDetailAdress" placeholder="微信支付账号" ></Input>
            </div>
          </div>
          <div class="store-item  ">
            <div class="left-content">
              <div  style="margin-left: 27px;" class="store-item-label">支付宝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
            </div>
            <div class="right-content">
              <Input v-model="addSotreItem.zfbAcount" placeholder="支付宝账号" ></Input>
            </div>
          </div>

          <div class="store-item  store-item-icon-color">
            <div class="left-content">
              <i class="iconfont  icon-shoukuan" ></i>
              <div   class="store-item-label">收款名<span class="red-star">*</span>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            </div>
            <div class="right-content">
              <Input v-model="addSotreItem.weixin" placeholder="收款名称" ></Input>
            </div>
          </div>

          <div class="store-item  store-item-icon-color">
            <div class="left-content">
              <i class="iconfont  icon-fuwu" ></i>
              <div   class="store-item-label">店铺服务<span class="red-star">*</span></div>
              <div v-for="item in storeService"   class="service-item"  @click="addService(item.value)">{{item.label}}</div>
            </div>
            <div class="rightT-content">

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
          <p>你确认删除1号仓库么。</p>
        </div>
        <div slot="footer">
          <Button type="error" size="large" long :loading="modal_loading" @click="del">删除</Button>
        </div>
      </Modal>
    </div>
</template>

<script>
  import myDrawer from'../../common/vue/myDrawer.vue'
  import toolBar from'../../common/vue/toolBar.vue'
    export default{
        data(){
            return {
              open:false,
              btnFont:'新增',
              modal2:false,
              modal_loading:false,
              storeClassify:STORECLASSIFY,
              saleType:SALETYPE,
              storeService:STORESERVICE,
              addSotreItem:{
                defaultStore:false,
                storeClassify:null,
                saleType:null,
                storeName:null,
                storeAdress:[],
                storeDetailAdress:null,
                storePhone:null,
                zfbAcount:null,
              },
              columns10: [
                {
                  title: '门店名称',
                  key: 'storeName'
                },
                {
                  title: '门店地区',
                  key: 'storeAdress',
                },
                {
                  title: '门店地址',
                  key: 'storeDetailAdress',
                },

                {
                  title: '门店微信',
                  key: 'storeWeiXin',
                },
                {
                  title: '门店QQ',
                  key: 'storeQQ',
                },
                {
                  title: '门店电话',
                  key: 'storePhone',
                },

                {
                  title: '门店服务',
                  key: 'storeService',
                },
                {
                  title: '操作',
                  key: 'operate',
                  render: (h, params) => {
                    return h('div',{
                        style:{
                            display:'flex'
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
                      h('Button',{
                        props: {
                          type: 'ghost',
                          shape: 'circle',
                          icon:"trash-a"
                        },
                        style: {
                            marginLeft:'3px'
                        },
                        on:{
                            click: () => {
                              this.modal2 = true
                            }
                        }
                      },)
                    ]);
                  }
                }
              ],
              data9: [
                {
                  storeName:'1号仓库',
                  storeIndustry:'批发',
                  storeType:'盛诺服饰工厂',
                  storeAdress:'常熟-外贸村-朱家坝',
                  storeDetailAdress:'朱家坝南村40号',
                  storeWeiXin:'18752002039',
                  storeQQ:'937154020',
                  storePhone:'18752002039',
                  storeService:'一件代发/换款换货',
                },
                {
                  storeName:'1号仓库',
                  storeIndustry:'批发',
                  storeType:'盛诺服饰工厂',
                  storeAdress:'常熟-外贸村-朱家坝',
                  storeDetailAdress:'朱家坝南村40号',
                  storeWeiXin:'18752002039',
                  storeQQ:'937154020',
                  storePhone:'18752002039',
                  storeService:'一件代发/换款换货',
                },
                {
                  storeName:'1号仓库',
                  storeIndustry:'批发',
                  storeType:'盛诺服饰工厂',
                  storeAdress:'常熟-外贸村-朱家坝',
                  storeDetailAdress:'朱家坝南村40号',
                  storeWeiXin:'18752002039',
                  storeQQ:'937154020',
                  storePhone:'18752002039',
                  storeService:'一件代发/换款换货',
                },
                {
                  storeName:'1号仓库',
                  storeIndustry:'批发',
                  storeType:'盛诺服饰工厂',
                  storeAdress:'常熟-外贸村-朱家坝',
                  storeDetailAdress:'朱家坝南村40号',
                  storeWeiXin:'18752002039',
                  storeQQ:'937154020',
                  storePhone:'18752002039',
                  storeService:'一件代发/换款换货',
                }

              ],
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
            }
        },
        components: {
            'my-drawer':myDrawer,
            'tool-bar':toolBar
        },
        created(){
        },
        mounted(){
        },
        methods: {
          complateDrawer(){

          },
          changeDefaultStore(){

          },
          addNewStore(){
              this.open=true;
              this.btnFont = '新增'
          },
          addService(service){

          },
          del () {
            this.modal_loading = true;
            setTimeout(() => {
              this.modal_loading = false;
              this.modal2 = false;
            }, 2000);
          }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import '../../common/css/globalscss';
  #storeManage{
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
  }

</style>
