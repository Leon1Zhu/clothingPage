<template>
    <div id="storeManage">
      <div class="add-store-btn"> <Button type="primary" icon="plus-round" @click.native="addNewStore">添加新门店</Button></div>
      <Table stripe border :columns="columns10" :data="data9"></Table>
      <my-drawer :open="open" title="门店管理" @close-drawer="open=false" @complate-drawer="complateDrawer">
        <div class="store-change-content">
          <div class="store-item">
            <div class="left-content">
              <i class="iconfont  icon-gantanhao" ></i>
              <div class="store-item-label">请选择是否是默认主店铺</div>
            </div>
            <div class="right-content">
              <i-switch v-model="addSotreItem.defaultStore" >
                <span slot="open"></span>
                <span slot="close"></span>
              </i-switch>
            </div>
          </div>

          <div class="store-item">
            <div class="left-content">
              <i class="iconfont  icon-iconfontcaidan" ></i>
              <div class="store-item-label">行业分类<span class="red-star">*</span></div>
            </div>
            <div class="right-content">
              <Select v-model="addSotreItem.storeClassify" >
                <Option v-for="item in storeClassify" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </div>
          </div>

          <div class="store-item">
            <div class="left-content">
              <i class="iconfont  icon-gouwudai" ></i>
              <div class="store-item-label">行业分类<span class="red-star">*</span></div>
            </div>
            <div class="right-content">
              <Select v-model="addSotreItem.saleType" >
                <Option v-for="item in saleType" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </div>
          </div>

          <div class="store-item">
            <div class="left-content">
              <i class="iconfont  icon-shangjia" ></i>
              <div class="store-item-label">门店名称<span class="red-star">*</span></div>
            </div>
            <div class="right-content">
              <Input v-model="addSotreItem.storeName" placeholder="门店名称" ></Input>
            </div>
          </div>

          <div class="store-item no-border-bottom-item">
            <div class="left-content">
              <i class="iconfont  icon-10xiangxidizhi" ></i>
              <div class="store-item-label">门店地区<span class="red-star">*</span></div>
            </div>
            <div class="right-content">
              <Cascader :data="data" v-model="value1"></Cascader>
            </div>
          </div>

          <div class="store-item ">
            <div class="left-content">
              <div  style="margin-left: 27px;" class="store-item-label">详细地址<span class="red-star">*</span></div>
            </div>
            <div class="right-content">
              <Input v-model="addSotreItem.storeDetailAdress" placeholder="详细地址" ></Input>
            </div>
          </div>

          <div class="store-item ">
            <div class="left-content">
              <i class="iconfont  icon-dianhua" ></i>
              <div   class="store-item-label">门店电话<span class="red-star">*</span></div>
            </div>
            <div class="right-content">
              <Input v-model="addSotreItem.storePhone" placeholder="详细地址" ></Input>
            </div>
          </div>


          <div class="store-item ">
            <div class="left-content">
              <i class="iconfont  icon-weixin" ></i>
              <div   class="store-item-label">门店微信<span class="red-star">*</span></div>
            </div>
            <div class="right-content">
              <Input v-model="addSotreItem.weixin" placeholder="门店微信" ></Input>
            </div>
          </div>

          <div class="store-item ">
            <div class="left-content">
              <i class="iconfont  icon-qq" ></i>
              <div   class="store-item-label">门店QQ&nbsp;&nbsp;<span class="red-star">*</span></div>
            </div>
            <div class="right-content">
              <Input v-model="addSotreItem.weixin" placeholder="门店QQ" ></Input>
            </div>
          </div>


          <div class="store-item  no-border-bottom-item">
            <div class="left-content">
              <i class="iconfont  icon-zhifufangshi" ></i>
              <div   class="store-item-label">支付方式<span class="red-star">*</span></div>
            </div>
            <div class="right-content">
              <Input v-model="addSotreItem.weixin" placeholder="选择支付方式" ></Input>
            </div>
          </div>

          <div class="store-item no-border-bottom-item">
            <div class="left-content">
              <div  style="margin-left: 27px;" class="store-item-label">微信支付&nbsp;&nbsp;</div>
            </div>
            <div class="right-content">
              <Input v-model="addSotreItem.storeDetailAdress" placeholder="微信支付账号" ></Input>
            </div>
          </div>
          <div class="store-item ">
            <div class="left-content">
              <div  style="margin-left: 27px;" class="store-item-label">支付宝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
            </div>
            <div class="right-content">
              <Input v-model="addSotreItem.zfbAcount" placeholder="支付宝账号" ></Input>
            </div>
          </div>

          <div class="store-item ">
            <div class="left-content">
              <i class="iconfont  icon-shoukuan" ></i>
              <div   class="store-item-label">收款名<span class="red-star">*</span>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            </div>
            <div class="right-content">
              <Input v-model="addSotreItem.weixin" placeholder="收款名称" ></Input>
            </div>
          </div>

          <div class="store-item ">
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
    </div>
</template>

<script>
  import myDrawer from'../../common/vue/myDrawer.vue'
    export default{
        data(){
            return {
              open:false,
              storeClassify:STORECLASSIFY,
              saleType:SALETYPE,
              storeService:STORESERVICE,
              addSotreItem:{
                defaultStore:false,
                storeClassify:null,
                saleType:null,
                storeName:null,
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
                  title: '行业分类',
                  key: 'storeIndustry'
                },
                {
                  title: '销售类型',
                  key: 'storeType',
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
                    return h('div', [
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
            'my-drawer':myDrawer
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
          },
          addService(service){

          }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import '../../common/css/globalscss';
  #storeManage{
    .add-store-btn{
      text-align: right;
      margin-bottom:3px;
    }
    .ivu-select,.ivu-input-type{
      width: 70%;
    }
    .ivu-select-single .ivu-select-selection,.ivu-select-dropdown-list,.ivu-cascader-menu{
      text-align: left;
    }
    .store-item .iconfont{
      font-size:18px;
    }
    .store-item:first-child .iconfont{
      padding:0px;
      font-size:16px;
    }
    .content{
      background: #fff;
        .store-change-content{
          padding:0px 5px;
          .store-item{
            padding:5px 0px;
            border-bottom:1px solid $formLabelBorderBottomColor;
            display: flex;
            .left-content{
              display: flex;
              line-height:200%;
              flex-wrap:wrap;
              .store-item-label{
                margin-left:2px;
                color: $formInputLableFontColor;
              }
              .service-item{
                color: $menuSelectFontColor;
                border: 1px dotted $menuSelectFontColor;
                border-radius:30px;
                padding:0px 6px;
                font-size:12px;
                margin-left:5px;
                margin-top:5px;
                height: 25px;
                line-height: 190%;
                transition: all .1s;
              }
              .service-item:hover{
                background: $menuSelectFontColor;
                color: #fff;
                border: 1px solid $menuSelectFontColor!important;
                cursor: pointer;
              }
            }
            .right-content{
              flex:1 1 30%;
              text-align: right;
              line-height:200%;
            }
        }
          .no-border-bottom-item{
            position: relative;
            border-bottom:0px;
          }
          .no-border-bottom-item:after{
            content: ' ';
            position: absolute;
            bottom:0px;
            right:0px;
            width:92%;
            width:calc(100% - 27px);
            height:1px;
            background: $formLabelBorderBottomColor;
          }
      }
    }


    .iconfont:before{
      border-radius:100%;
      color: #fff;
    }

    .iconfont::before{

    }
    .icon-gantanhao:before{
      background: $menuSelectFontColor;
      border:1px solid $menuSelectFontColor;
    }
    .icon-iconfontcaidan:before{
      padding: 4px;
      background: #808dc4;
    }
    .icon-gouwudai:before{
      padding:4px;
      background: #a2ce8d;
    }
    .icon-shangjia:before{
      padding:4px;
      background: #71c8f2;
    }
    .icon-10xiangxidizhi:before{
      padding:4px;
      background: #17aca8;
    }
    .icon-dianhua:before{
      padding:4px;
      background: #f08e03;
    }
    .icon-weixin:before{
      padding:4px;
      background: #22c06b;
    }
    .icon-qq:before{
      padding:4px;
      background: #13bdff;
    }
    .icon-zhifufangshi:before{
      padding:4px;
      background: #fd818c;
    }
    .icon-shoukuan:before{
      padding:4px;
      background: #19bdff;
    }
    .icon-fuwu:before{
      padding:4px;
      background: #fe808c;
    }
  }

</style>
