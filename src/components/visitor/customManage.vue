<template>
  <div id="customManage">
    <tool-bar>
      <Input v-model="searchStaffName" placeholder="请输入客户姓名" style="margin-right: .5%;" ></Input>
      <Button type="primary" icon="ios-search" @click.native="searchCustom"  style="margin-right: .5%;">搜索</Button>
      <div class="add-store-btn"><Button type="primary" icon="plus-round" @click.native="customManage('')">添加客户</Button></div>
    </tool-bar>

    <Table stripe border :columns="columns10" :data="data9"></Table>

    <my-drawer :open="open" :btnFont="btnFont" @complateDrawer="complateDrawer"></my-drawer>


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
            title: '客户等级',
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
                      this.customManage(params.row)
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
        data9: []
      }
    },
    components: {
      'my-drawer':myDrawer,
      'tool-bar':toolBar
    },
    created(){
       this.getManageList();
    },
    mounted(){
    },
    methods: {
      complateDrawer(customInfo){
        customManageApi.addCusstom(this.$store.getters.getAccountId,customInfo).then(response =>{
            this.$success(opeartorSuccess,'客户添加成功!')
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
          customManageApi.getCustomList(this.$store.getters.getAccountId,this.searchStaffName).then(response =>{

          }).catch(response =>{

        })
      },
      searchCustom(){

      }
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
