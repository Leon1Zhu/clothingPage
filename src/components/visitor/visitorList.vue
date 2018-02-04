<template>
    <div id="visitList">
      <tool-bar>

        <Input v-model="searchCustomName" placeholder="请输入客户姓名"   style="margin-right: .5%;">></Input>
        <DatePicker v-model="searchTime" type="daterange" placement="bottom-end" placeholder="选择日期"
                     style="margin-right: .5%;" format="yyyy-MM-dd"></DatePicker>
        <Button type="primary" icon="ios-search" @click.native="searchVisitor"  >搜索</Button>
        <!--<Button type="primary" icon="plus-round" @click.native="addNewStaff">添加新店员</Button>-->
      </tool-bar>

      <Table stripe border :columns="columns10" :data="data9"></Table>
      <Page :total="total" style="margin-top: 5px;" :page-size="size"></Page>
    </div>
</template>

<script>
  import visitManageApi from '../../api/visitManage'
  import toolBar from '../../common/vue/toolBar.vue'
    export default{
        data(){
            return {
              searchCustomName:null,
              searchTime:[],
              index:0,
              total:0,
              size:SIZE,
              columns10: [
                {
                  title: '客户姓名',
                  key: 'cusName'
                },
                {
                  title: '客户卡号',
                  key: 'custom_card',
                },
                {
                  title: '交易总额',
                  key: 'orderMoney',
                },
                {
                  title: '账户余额',
                  key: 'custom_remain_money',
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
                          icon:"arrow-right-c"
                        },
                        style: {
                        },
                        on: {
                          click: () => {
                              this.$store.commit('setDetailCustomName',params.row.custom_name)
                             this.$router.push({ path: '/visitorDetail'})
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
            'tool-bar':toolBar
        },
        created(){
            this.$info('操作提示','请选择对应的时间区间查看订单记录。')
        },
        mounted(){
        },
        methods: {
          searchVisitor(){
            if(this.searchTime.length <2){
                this.$warning(operatorWarning,'请选择正确的时间区间进行查询!')
                return ;
            }
            visitManageApi.getOrderList(this.$store.getters.getAccountId,this.$store.getters.getShopId,this.searchTime[0],this.searchTime[1],this.searchCustomName,this.index,this.size).then(response =>{
                this.data9 = response.data.content
                this.total = response.data.totalElements
            }).catch(response =>{
               this.$error(operatorError,response.data.message)
            })
          },
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  #visitList{
    .ivu-page{
      text-align: right;
    }
    .view-visitor-bar{
      display: flex;
      margin-bottom:5px;
    }
  }
</style>
