<template>
  <div id="storeManage">
    <div class="add-store-btn"> <Button type="primary" icon="plus-round" @click.native="addNewStore">添加新店员</Button></div>
    <Table stripe border :columns="columns10" :data="data9"></Table>
    <my-drawer :open="open" title="店员管理" @close-drawer="open=false" @complate-drawer="complateDrawer">
      <div class="store-change-content">
        <

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
        staffItem:{

        },

        columns10: [
          {
            title: '用户名',
            key: 'storeName'
          },
          {
            title: '注册时间',
            key: 'storeIndustry'
          },
          {
            title: '数据库分配',
            key: 'storeType',
          },
          {
            title: '数据库状态',
            key: 'storeAdress',
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
          this.open = false;
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import '../../common/css/globalscss';
  #storeManage{

  }

</style>
