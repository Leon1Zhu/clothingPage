<template>
    <div id="salesReturn">
      <AutoComplete
        v-model="customInfo"
        :data="autoData"
        icon="ios-search"
        :filter-method="filterMethod"
        placeholder="请输入搜索客户信息"
        style="width:100%">
      </AutoComplete>
      <Table stripe border :columns="columns10" :data="data9"></Table>
    </div>
</template>

<script>
  import expandRow from './salesReturnExpandRow/expand.vue';
    export default{
        data(){
            return {
              autoData: ['张三，12000', '李四，13000', '王五，140000'],
              customInfo:'',
              columns10: [
                {
                  type: 'expand',
                  width: 50,
                  render: (h, params) => {
                    return h(expandRow, {
                      props: {
                        row: params.row
                      }
                    })
                  }
                },
                {
                  title: '序号',
                  key: 'index'
                },
                {
                  title: '付款方式',
                  key: 'payway'
                },
                {
                  title: '总额',
                  key: 'rental',
                  sortable: true
                },
                {
                  title: '实付金额',
                  key: 'paymoney',
                  sortable: true
                },
                {
                  title: '核销',
                  key: 'recharge',
                  sortable: true
                },
                {
                  title: '交易时间',
                  key: 'dealtime',
                  sortable: true
                },
                {
                  title: '备注',
                  key: 'remark',
                }
              ],
              data9: [
                {
                  index:1,
                  payway:'支付宝',
                  rental:10121,
                  paymoney:10120,
                  recharge:0,
                  dealtime:'2018/1/20',
                  remark:'无'
                },
                {
                  index:2,
                  payway:'支付宝',
                  rental:10121,
                  paymoney:10120,
                  recharge:0,
                  dealtime:'2018/1/20',
                  remark:'无'
                },
                {
                  index:3,
                  payway:'支付宝',
                  rental:10121,
                  paymoney:10120,
                  recharge:0,
                  dealtime:'2018/1/20',
                  remark:'无'
                },
                {
                  index:4,
                  payway:'支付宝',
                  rental:10121,
                  paymoney:10120,
                  recharge:0,
                  dealtime:'2018/1/20',
                  remark:'无'
                },
                {
                  index:5,
                  payway:'支付宝',
                  rental:10121,
                  paymoney:10120,
                  recharge:0,
                  dealtime:'2018/1/20',
                  remark:'无'
                },
                {
                  index:6,
                  payway:'支付宝',
                  rental:10121,
                  paymoney:10120,
                  recharge:0,
                  dealtime:'2018/1/20',
                  remark:'无'
                },

              ]
            }
        },
        components: {expandRow},
        created(){
        },
        mounted(){
        },
        methods: {
          filterMethod (value, option) {
            return option.toLowerCase().indexOf(value.toLowerCase()) !== -1;
          },
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  #salesReturn{
      .ivu-table-wrapper{
        margin-top:1.5%;
      }
  }
</style>
