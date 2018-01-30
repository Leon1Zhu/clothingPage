<template>
    <div id="visitList">
      <tool-bar>
        <Input v-model="searchCustomName" placeholder="请输入客户姓名" style="margin-right: .5%;" ></Input>
        <Button type="primary" icon="ios-search" @click.native="searchVisitor"  >搜索</Button>
        <!--<Button type="primary" icon="plus-round" @click.native="addNewStaff">添加新店员</Button>-->
      </tool-bar>

      <Table stripe border :columns="columns10" :data="data9"></Table>
      <Page :total="100" style="margin-top: 5px;"></Page>
    </div>
</template>

<script>
  import toolBar from '../../common/vue/toolBar.vue'
    export default{
        data(){
            return {
              searchCustomName:null,
              columns10: [
                {
                  title: '客户姓名',
                  key: 'custom_name'
                },
                {
                  title: '客户卡号',
                  key: 'custom_card',
                },
                {
                  title: '交易总额',
                  key: 'custom_total_money',
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
              data9: [
                {
                  custom_name:'张三',
                  custom_card:'13001414944',
                  custom_total_money:'1245784',
                  custom_remain_money:'-23456',
                },
                {
                  custom_name:'张三',
                  custom_card:'13001414944',
                  custom_total_money:'1245784',
                  custom_remain_money:'-23455',
                }, {
                  custom_name:'张三',
                  custom_card:'13001414944',
                  custom_total_money:'1245784',
                  custom_remain_money:'-23454',
                }, {
                  custom_name:'张三',
                  custom_card:'13001414944',
                  custom_total_money:'1245784',
                  custom_remain_money:'-23453',
                }, {
                  custom_name:'张三',
                  custom_card:'13001414944',
                  custom_total_money:'1245784',
                  custom_remain_money:'-23452',
                }, {
                  custom_name:'张三',
                  custom_card:'13001414944',
                  custom_total_money:'1245784',
                  custom_remain_money:'-23451',
                }, {
                  custom_name:'张三',
                  custom_card:'13001414944',
                  custom_total_money:'1245784',
                  custom_remain_money:'-23450',
                },

              ],
            }
        },
        components: {
            'tool-bar':toolBar
        },
        created(){
        },
        mounted(){
        },
        methods: {
          searchVisitor(){

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
