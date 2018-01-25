<template>
  <div id="staffManage">
    <div class="add-store-btn">
      <Input v-model="searchStaffName" placeholder="请输入店员姓名" style="margin-right: .5%;" ></Input>
      <Button type="primary" icon="ios-search" @click.native="searchStaff"  style="margin-right: .5%;">搜索</Button>
      <Button type="primary" icon="plus-round" @click.native="addNewStaff">添加新店员</Button>
    </div>
    <Table stripe border :columns="columns10" :data="data9"></Table>
    <Page :total="100" style="margin-top: 5px;"></Page>
    <my-drawer :open="open" title="店员管理"  :btnFont="btnFont"  @close-drawer="open=false" @complate-drawer="complateDrawer">
      <div class="store-change-content">

        <div class="store-item store-item-icon-color">
          <div class="left-content">
            <i class="iconfont  icon-kehu" ></i>
            <div class="store-item-label">店员名称<span class="red-star">*</span></div>
          </div>
          <div class="right-content">
            <Input v-model="staffItem.account_name" placeholder="店员名称" ></Input>
          </div>
        </div>

        <div class="store-item store-item-icon-color">
          <div class="left-content">
            <i class="iconfont  icon-iconfontcaidan" ></i>
            <div class="store-item-label">店员类别<span class="red-star">*</span></div>
          </div>
          <div class="right-content">
            <Input v-model="staffItem.account_type" placeholder="店员类别" ></Input>
          </div>
        </div>

        <div class="store-item store-item-icon-color">
          <div class="left-content">
            <i class="iconfont  icon-ERP_gongzuodangqianzhuangtai" ></i>
            <div class="store-item-label">店员状态<span class="red-star">*</span></div>
          </div>
          <div class="right-content">
            <Input v-model="staffItem.account_status" placeholder="店员状态" ></Input>
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
        btnFont:'新增',
        searchStaffName:null,
        staffItem:{
          account_name:'',
          account_type:'',
          account_status:'',
        },

        columns10: [
          {
            title: '店员名称',
            key: 'account_name'
          },
          {
            title: '店员类别',
            key: 'account_type',
            render: (h, params) => {
              return h('p', {
              },parseInt(params.row.account_type,10) === 1 ? '管理员' : '店员');
            }
          },
          {
            title: '店员状态',
            key: 'account_status',
            render: (h, params) => {
              return h('p', {
              },parseInt(params.row.account_status,10) === 1 ? '启用' : '停用');
            }
          },
          {
            title: '注册时间',
            key: 'account_time',
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
                      this.btnFont = '修改'
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
            account_name:'张三',
            account_type:'1',
            account_status:'1',
            account_time:'2018/01/22',
          },
          {
            account_name:'张三',
            account_type:'0',
            account_status:'1',
            account_time:'2018/01/22',
          }, {
            account_name:'张三',
            account_type:'0',
            account_status:'1',
            account_time:'2018/01/22',
          }, {
            account_name:'张三',
            account_type:'0',
            account_status:'1',
            account_time:'2018/01/22',
          }, {
            account_name:'张三',
            account_type:'0',
            account_status:'0',
            account_time:'2018/01/22',
          }, {
            account_name:'张三',
            account_type:'0',
            account_status:'1',
            account_time:'2018/01/22',
          },

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
      },
      addNewStaff(){
        this.btnFont = '新增'
        this.open = true;
      },
      searchStaff(){

      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import '../../common/css/globalscss';
  #staffManage{
    .add-store-btn{
      display: flex;
      text-align: right;
      margin-bottom:3px;
    }

    .store-change-content{
      .ivu-select,.ivu-input-type{
        width: 70%;
      }
      padding:0px 5px;
    }
    .ivu-page{
      text-align: right;
    }

  }

</style>
