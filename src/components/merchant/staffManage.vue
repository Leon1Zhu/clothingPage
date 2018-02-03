<template>
  <div id="staffManage">
    <tool-bar>
      <Input v-model="searchStaffName" placeholder="请输入店员姓名" style="margin-right: .5%;" ></Input>
      <Button type="primary" icon="ios-search" @click.native="searchStaff"  style="margin-right: .5%;">搜索</Button>
      <Button type="primary" icon="plus-round" @click.native="addNewStaff">添加新店员</Button>
    </tool-bar>
    <Table stripe border :columns="columns10" :data="data9"></Table>
   <!-- <Page :total="100" style="margin-top: 5px;"></Page>-->
    <my-drawer :open="open" title="店员管理"  :btnFont="btnFont"  @close-drawer="open=false" @complate-drawer="complateDrawer">
      <div class="store-change-content">
        <div class="store-item store-item-icon-color">
          <div class="left-content">
            <i class="iconfont  icon-kehu" ></i>
            <div class="store-item-label">店员名称<span class="red-star">*</span></div>
          </div>
          <div class="right-content">
            <Input v-model="staffItem.accountName" placeholder="店员名称" ></Input>
          </div>
        </div>



        <div class="store-item store-item-icon-color">
          <div class="left-content">
            <i class="iconfont  icon-xiugaimima" ></i>
            <div class="store-item-label">店员密码<span class="red-star">*</span></div>
          </div>
          <div class="right-content">
            <Input v-model="staffItem.accountPwd" placeholder="店员名称" ></Input>
          </div>
        </div>

        <div class="store-item store-item-icon-color">
          <div class="left-content">
            <i class="iconfont  icon-guanlian" ></i>
            <div class="store-item-label">关联门店<span class="red-star">*</span></div>
          </div>
          <div class="right-content">
            <Select v-model="staffItem.shopId"  label-in-value  @on-change="selectStore">
              <Option v-for="item in storeSelectData"  :value="item.shopId" >{{item.shopName}}</Option>
            </Select>
          </div>
        </div>

        <div class="store-item store-item-icon-color">
          <div class="left-content">
            <i class="iconfont  icon-iconfontcaidan" ></i>
            <div class="store-item-label">店员类别<span class="red-star">*</span></div>
          </div>
          <div class="right-content">
            <Select v-model="staffItem.accountType" >
              <Option  value="管理员" >管理员</Option>
              <Option  value="店员" >店员</Option>
            </Select>
          </div>
        </div>

        <div class="store-item store-item-icon-color">
          <div class="left-content">
            <i class="iconfont  icon-ERP_gongzuodangqianzhuangtai" ></i>
            <div class="store-item-label">店员状态<span class="red-star">*</span></div>
          </div>
          <div class="right-content">
            <Select v-model="staffItem.accountStatus" >
              <Option  value="1" >启用</Option>
              <Option  value="2" >停用</Option>
            </Select>
          </div>
        </div>


      </div>
    </my-drawer>

  </div>
</template>





<script>
  import myDrawer from'../../common/vue/myDrawer.vue'
  import toolBar from '../../common/vue/toolBar.vue'
  import staffManageApi from '../../api/staffManage'
  import storeManageApi from '../../api/storeManageApi'
  export default{
    data(){
      return {
        open:false,
        btnFont:'新增',
        searchStaffName:null,
        staffItem:{
          accountName:null,
          accountPwd:null,
          accountType:'店员',
          accountStatus:'1',
          shopId:null,
          shopName:null,
        },
        columns10: [
          {
            title: '店员名称',
            key: 'accountName'
          },
          {
            title: '关联门店',
            key: 'shopName',
          },
          {
            title: '店员类别',
            key: 'accountType',
          },
          {
            title: '店员状态',
            key: 'accountStatus',
            render: (h, params) => {
              return h('p', {
              },parseInt(params.row.account_status,10) === 1 ? '正常' : '停用');
            }
          },
          {
            title: '注册时间',
            key: 'accountTime',
            render: (h, params) => {
              return h('p', {
              },new Date(params.row.accountTime).Format('yyyy/MM/dd') );
            }
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
        data9: [],
        storeSelectData:[],
      }
    },
    components: {
      'my-drawer':myDrawer,
      'tool-bar':toolBar
    },
    created(){
        this.getAllStore();
        this.getAllAccount();
    },
    methods: {
      complateDrawer(){
          if(ISNULL(this.staffItem.accountName) || ISNULL(this.staffItem.accountPwd)){
              this.$error(operatorError,'店员名称或密码字段不能为空！')
              return;
          }
        staffManageApi.manageAccount(this.$store.getters.getAccountId,this.staffItem).then(response =>{
            let flag = '新增店员成功';
            if(this.btnFont=='修改'){
                flag = '店员信息修改成功'
            }
            this.$success(operatorError,flag)
            this.getAllAccount();
          this.open = false;
        }).catch(response =>{
            let flag = '新增店员失败';
            if(this.btnFont=='修改'){
              flag = '店员信息修改是失败'
            }
            this.$error(operatorError,flag)
        })
      },
      addNewStaff(){
        this.btnFont = '新增'
        this.open = true;
      },
      searchStaff(){
      },
      getAllAccount(){
          staffManageApi.getAllStaffAccount(this.$store.getters.getAccountId).then(response =>{
              this.data9 = response.data
          }).catch(response =>{
              this.$error(apiError,response.data.message)
          })
      },
      getAllStore(){
          storeManageApi.getAllStoreByAccountId(this.$store.getters.getAccountId).then(response =>{
              this.storeSelectData = response.data
          }).catch( response =>{
              this.$error(apiError,response.data.message)
          })
      },
      selectStore(v1){
        this.staffItem.shopId = v1.value;
        this.staffItem.shopName = v1.label;
      }
    }


  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import '../../common/css/globalscss';
  #staffManage{
    .store-change-content{
      .ivu-select,.ivu-input-type{
        width: 70%;
      }
      padding:0px 5px;
    }
    .ivu-page{
      text-align: right;
    }
    .ivu-select.ivu-select-single{
      text-align: left;
    }
    .store-item:first-child .iconfont{
      font-size:18px;
    }

  }

</style>
