<template>
    <div id="visitList">
      <tool-bar>

        <Input v-model="searchCustomName" placeholder="请输入客户姓名"   style="margin-right: .5%;">></Input>
        <Button type="primary" icon="ios-search" @click.native="searchVisitor"  >搜索</Button>
        <!--<Button type="primary" icon="plus-round" @click.native="addNewStaff">添加新店员</Button>-->
      </tool-bar>

      <Table stripe border :columns="columns10" :data="data9"></Table>
      <Page :total="total" style="margin-top: 5px;" :page-size="size"  @on-change="changePage"></Page>
    </div>
</template>

<script>
  import customManageApi from '../../api/customManage'
  import toolBar from '../../common/vue/toolBar.vue'
    export default{
        data(){
            return {
              index:0,
              total:0,
              size:SIZE,
              searchCustomName:null,
              columns10: [
                {
                  title: '客户姓名',
                  key: 'customName'
                },
                {
                  title: '客户卡号',
                  key: 'customCard',
                },
                {
                  title: '交易总额',
                  key: 'customTotalMoney',
                },
                {
                  title: '账户余额',
                  key: 'customRemainMoney',
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
                              this.$store.commit('setDetailCustomId',params.row.customId)
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
            this.searchVisitor()
        },
        mounted(){
        },
        methods: {
          searchVisitor(){
            let searchInfo = null;
            if(ISNULL(this.searchCustomName)){
              searchInfo = 'all'
            }else{
              searchInfo = this.searchCustomName
            }
            customManageApi.getCustomList(this.$store.getters.getAccountId,searchInfo,this.index,this.size).then(response =>{
              this.data9 = response.data.content
              this.total = response.data.totalElements
            }).catch(response =>{
              this.$error(apiError.response.data.response)
            })
          },
          changePage(pageIndex){
            this.index = pageIndex-1;
            this.searchVisitor()
          }
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
