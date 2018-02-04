<template>
  <div id="customManage">
    <tool-bar>
      <Input v-model="searchStaffName" placeholder="请输入客户姓名" style="margin-right: .5%;" ></Input>
      <Button type="primary" icon="ios-search" @click.native="getManageList"  style="margin-right: .5%;">搜索</Button>
      <div class="add-store-btn"><Button type="primary" icon="plus-round" @click.native="customManage('')">添加客户</Button></div>
    </tool-bar>

    <Table stripe border :columns="columns10" :data="data9"></Table>

    <my-drawer :open="open" :btnFont="btnFont" :customInfoProp="customInfoProp" @complateDrawer="complateDrawer" @close-drawer="open=false"></my-drawer>


  </div>
</template>

<script>
  import myDrawer from'./addCustomDrawer.vue'
  import toolBar from'../../common/vue/toolBar.vue'
  import customManageApi from '../../api/customManage'
  export default{

    data(){
      return {
        open:false,
        searchStaffName:null,
        btnFont:'新增',
        customInfoProp:null,
        columns10: [
          {
            title: '客户名称',
            key: 'customName'
          },
          {
            title: '联系方式',
            key: 'customPhone'
          },
          {
            title: '客户积分',
            key: 'customGrade',
          },
          {
            title: '客户卡号',
            key: 'customCard',
          },
          {
            title: '消费总额',
            key: 'customTotalMoney',
          },
          {
            title: '账户余额',
            key: 'customRemainMoney',
          }, {
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
                      this.customInfoProp = params.row
                      this.customManage(params.row)
                    }
                  }
                }, ),
              ]);
            }
          }
        ],
        data9: [],
      }
    },
    components: {
      'my-drawer':myDrawer,
      'tool-bar':toolBar
    },
    created(){
       this.getManageList();
       this.btnFont = '新增'
    },
    mounted(){
    },
    methods: {
      complateDrawer(customInfo){
          console.log(customInfo)
        customManageApi.addCusstom(this.$store.getters.getAccountId,customInfo).then(response =>{
            let flag = '添加客户成功!';
            if(this.btnFont === '修改'){
                flag = '修改客户信息成功!'
            }
            this.$success(opeartorSuccess,flag)
            this.getManageList()
            this.open=false;
        }).catch(response =>{
            this.$error(operatorError,response.data.message)
        })
        this.open=false;
      },
      customManage(value){
          if(ISNULL(value)){
              this.btnFont = '新增'
          }else{
              this.btnFont = '修改'
          }

        this.open=true;
      },
      getManageList(){
          let searchInfo = null;
          if(ISNULL(this.searchStaffName)){
              searchInfo = 'all'
          }else{
              searchInfo = this.searchStaffName
          }
          customManageApi.getCustomList(this.$store.getters.getAccountId,searchInfo).then(response =>{
              this.data9 = response.data
          }).catch(response =>{
             this.$error(apiError.response.data.response)
        })
      },
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../common/css/globalscss";
  #customManage{
    .custom-info-content{
      padding:0 5px;
      .ivu-input-wrapper{
        width:70%;
      }

    }
    .ivu-page{
      text-align: right;
    }

  }
</style>
