<template>
    <div id="salesOrder">
      <div class="salesOrder-content">
        <Form  :label-width="70">
          <Row >
              <Col span="12" class="flexStyle">
              <FormItem label="客户信息"  >
                <AutoComplete
                  v-model="orderInfo.CustomInfo"
                  :data="autoData"
                  icon="ios-search"
                  :filter-method="filterMethod"
                  placeholder="请选择客户信息"
                  style="width:100%">
                </AutoComplete>
                <Button type="ghost" @click="orderInfo.CustomInfo=''">清除</Button>
                <Button type="ghost" >新增</Button>
              </FormItem>
              <FormItem label="余款" :label-width="50" class="flexStyle" style="flex: 1;">
                <span class="disable-input">{{orderInfo.balanceMoney}}</span>
              </FormItem>
              </Col>

            <Col span="12" >
            <FormItem label="开单店员" class="orderStaff">
              <AutoComplete
                v-model="orderInfo.waiter"
                :data="waiterData"
                icon="ios-search"
                :filter-method="filterMethod"
                placeholder="请选择客户信息"
                >
              </AutoComplete>
              <FormItem label="开单日期"  style="flex: 1;">
                <DatePicker :options="options3" type="date" format="yyyy/MM/dd"  placeholder="请选择开单日期" v-model="orderInfo.payDate" style="width: 100%;"></DatePicker>
                <Button type="ghost" >核销</Button>
                <Button type="ghost" >抹零</Button>
              </FormItem>

            </FormItem>
            </Col>


          </Row>

          <Row >
            <Col span="12">
              <div class="pay-way flexStyle" >
                <FormItem label="订单件数"   :label-width="70" style="flex: 1 1 33%;">
                  <span class="disable-input">{{orderInfo.allCount}}</span>
                  <!--  <Input  v-model="orderInfo.allCount" disabled></Input>-->
                </FormItem>
                <FormItem label="应付"  :label-width="50" style="flex: 1 1 33%;">
                  <span class="disable-input">{{orderInfo.payable}}</span>
                </FormItem>
                <FormItem label="实付"   :label-width="50"  style="flex: 1 1 33%;">
                  <InputNumber   v-model="orderInfo.payMoney" style="width: 100%"></InputNumber>
                </FormItem>
              </div>
            </Col>

            <Col span="12">
              <FormItem label="付款方式"  class="payWayClass">
                <Select v-model="orderInfo.payWay">
                  <Option v-for="item in paymentWay" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>

                <Select  v-model="orderInfo.integral" style="margin-left: 5px;">
                  <Option  value="0" >不使用积分</Option>
                  <Option  value="1" >使用500积分抵扣5元</Option>
                  <Option  value="1" >使用5000积分抵扣50元</Option>
                  <Option  value="1" >使用50000积分抵扣500元</Option>
                </Select>
                <FormItem label="备注"  :label-width="45" style="flex: 1;">
                  <Input  placeholder="请输入开单备注" v-model="orderInfo.remark"></Input>
                  <Button type="ghost" @click="emptyOrderInfo">重新开单</Button>
                  <Button type="ghost" @click="goodReturn">退换入库</Button>
                </FormItem>

              </FormItem>

            </Col>

          </Row>

        </Form>
      </div>
      <div class="order-table">
        <Card>
          <div slot="title" style="display: flex;">
            <div style="line-height: 2;">购买商品列表</div>
            <div class="flexStyle" style="flex: 1;text-align: right;justify-content: flex-end">
             <!-- <AutoComplete
                v-model="addGoodsInfo"
                :data="goodData"
                icon="ios-search"
                :filter-method="filterMethod"
                placeholder="请输入搜索商品序号"
                style="margin-right: 1%;">
              </AutoComplete>-->
              <Button type="ghost" @click="saveOrder">保存订单</Button>
            </div>
          </div>
          <v-table
            :height="tableHeight"
            is-horizontal-resize
            style="width:100%;"
            :columns="columns"
            :table-data="tableData"
            row-hover-color="#eee"
            row-click-color="#edf7ff"
            :cell-edit-done="cellEditDone"
            @on-custom-comp="customCompFunc"
          ></v-table>
        </Card>
      </div>

    </div>
</template>

<script>
  import 'vue-easytable/libs/themes-base/index.css'
  import {VTable} from 'vue-easytable'
    export default{
        data(){
            return {
              modal10: false,
              paymentWay:PAYMENTWAY,
              addGoodsInfo:'',
              tableHeight:100,
              options3: {
                disabledDate (date) {
                  return new Date().Format(dateFormatType) <  new Date(date).Format(dateFormatType);
                }
              },
              columns:  [
                {field: 'sum', title: '', width: 150, titleAlign: 'center',columnAlign:'center',componentName:'table-addOperate'},
                {field: 'id', title:'序号', width: 180, titleAlign: 'center',columnAlign:'center', isResize:true},
                {field: 'systemCode', title: '商品货号',width: 180,  titleAlign: 'center',columnAlign:'center',isResize:true,componentName:'goodsCodeComponent'},
                {field: 'goodName', title: '商品简称',width: 180,  titleAlign: 'center',columnAlign:'center',isResize:true,componentName:'goodsTypeComponent'},
                {field: 'color', title: '颜色',width: 150,  titleAlign: 'center',columnAlign:'center',isResize:true,componentName:'table-ColorSelect'},
                {field: 'size', title: '尺码', width: 150, titleAlign: 'center',columnAlign:'center',isResize:true,componentName: 'table-SizeSelect'},
                {field: 'count', title: '数量', width: 150, titleAlign: 'center',columnAlign:'center',isEdit:true,isResize:true},
                {field: 'prince', title: '单价', width: 150, titleAlign: 'center',columnAlign:'center',isEdit:true,isResize:true},
                {field: 'sum', title: '合计', width: 150, titleAlign: 'center',columnAlign:'center', formatter: function (rowData,rowIndex,pagingIndex,field) {
                  return `<span >${rowData['count'] * rowData['prince']}</span>`;
                },isResize:true},
                {field: 'sum', title: '', width: 150, titleAlign: 'center',columnAlign:'center',componentName:'table-operation'}
              ],
              tableData: [
                {"id":"1","systemCode":"x125","goodName":"01016下口袋","color":"浅蓝","size":"L",count:10,prince:14,sum:140},
                {"id":"2","systemCode":"x125","goodName":"01016下口袋","color":"浅蓝","size":"L",count:10,prince:24,sum:240},
                {"id":"3","systemCode":"x125","goodName":"01016下口袋","color":"浅蓝","size":"L",count:10,prince:34,sum:340},
                {"id":"4","systemCode":"x125","goodName":"01016下口袋","color":"浅蓝","size":"L",count:10,prince:44,sum:440},
                {"id":"5","systemCode":"x125","goodName":"01016下口袋","color":"浅蓝","size":"L",count:10,prince:54,sum:540},
                {"id":"6","systemCode":"x125","goodName":"01016下口袋","color":"浅蓝","size":"L",count:10,prince:64,sum:640},
                {"id":"7","systemCode":"x125","goodName":"01016下口袋","color":"浅蓝","size":"L",count:10,prince:74,sum:740}
              ],
              orderInfo:{
                payWay:0,
                integral:'0',
                allCount:0,
                payable:0,
                CustomInfo:'',
                balanceMoney:10000,
                payDate:new Date().Format(dateFormatType),
                waiter:'',
                remark:null,
                payMoney:0,
              },
              goodData: ['123/01016下口袋/浅蓝/L', '123456/01016下口袋/浅//L', '123456789/01016下口袋/浅蓝/L'],
              autoData: ['张三，18752002039', '李四，18752002039', '王五，18752002039'],
              waiterData: ['张三', '李四', '王五']
            }
        },
        components: {
          'v-table': VTable,
        },
        created(){
        },
        computed:{
        },
        mounted(){
            this.countMoney()
        },
        methods: {
          // 单元格编辑回调
          cellEditDone(newValue,oldValue,rowIndex,rowData,field){
            this.tableData[rowIndex][field] = newValue
            this.tableData[rowIndex].sum =   this.tableData[rowIndex].count * this.tableData[rowIndex].prince
            this.countMoney()
            // 接下来处理你的业务逻辑，数据持久化等...
          },
          //计算总价
          countMoney(){
            let sum = 0;
            let countSum = 0;
            for(let item in this.tableData){
              sum += this.tableData[item].sum
              countSum += parseInt(this.tableData[item].count,10)
            }
            this.orderInfo.payable = sum;
            this.orderInfo.payMoney = sum;
            this.orderInfo.allCount = countSum;
          },
          filterMethod (value, option) {
            return option.toLowerCase().indexOf(value.toLowerCase()) !== -1;
          },
          emptyOrderInfo(){
              let OrderInfoTemp={
                payWay:0,
                integral:'0',
                payable:this.orderInfo.payable,
                allCount:this.orderInfo.allCount,
                CustomInfo:'',
                balanceMoney:this.orderInfo.balanceMoney,
                payDate:new Date().Format(dateFormatType),
                waiter:'',
                remark:null,
                payMoney:0,
              }
            this.orderInfo=OrderInfoTemp;
          },
          //表格点击事件
          customCompFunc(params){

            if (params.type === 'delete'){ // do delete operation

              this.$delete(this.tableData,params.index);
              this.countMoney()

            }else if (params.type === 'add'){ // do edit operation
              this.addColum(params.index)
            }
          },
          goodReturn(){
              this.$router.push({ path: '/salesReturn'})
          },
          saveOrder(){
              this.$warning('操作错误','请将信息填写完整！')
          },
          addColum(index){
              this.tableData.splice(index+1,0, {"id":index+2,"systemCode":"","goodName":"","color":"","size":"",count:0,prince:0,sum:0})
              for(let  i=index+2,len=this.tableData.length;i<len;i++){
                this.tableData[i].id = parseInt(this.tableData[i].id,10)+1;
              }
          }
        },
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import '../../common/css/globalscss.scss';

  #salesOrder{
    .ivu-row{
      width:100%;
      transition: all .2s;
    }
    .ivu-row:first-child{
      .ivu-col-span-12:nth-child(1){
        .ivu-form-item:nth-child(2){
          .ivu-form-item-content{
            margin-left:0!important;
            width:100%;
          }
        }
      }
    }

    .ivu-select-dropdown.ivu-auto-complete{
      text-align: left;
    }
    .ivu-form-item-content{
      display: flex;
      .ivu-btn.ivu-btn-ghost{
        margin-left:5px;
      }
    }



    .v-table-rightview{
      width:100%!important;
      position: relative;
    }
    .v-table-views{
      border: 1px solid #dddee1;
      color: #495060;
      font-size: 12px;
      background-color: #fff;
      border-radius: 3px;
      height:auto!important;
      td{
        width:11.4%;
      }

      .v-table-header-row{
        td:nth-child(2){
          width: 8%;
        }
        td:first-child,td:last-child{
          width: 6%;
        }

      }
      .v-table-btable{
        .v-table-row{
          td:nth-child(2){
            width: 8%;
          }
          td:first-child,td:last-child{
            width:6%;
          }
        }
      }
    }
    .v-table-header-row{
      background-color: $menuSelectFontColor;
      color: white;
      font-size: $fontSize;

    }
    .v-table-body{
      height:auto!important;
      position: relative;
    }
    .v-table-title-cell,.v-table-body-cell{
      width:initial!important;
      .ivu-auto-complete{
        .ivu-input{
          text-align:center;
        }
      }
    }
    .v-table-row{
    }
    .v-table-header,.v-table-header-inner,.v-table-body,.v-table-htable,.v-table-btable{
      width:100%!important;
    }
    .cell-edit-input{
      border:1px solid $menuSelectFontColor;
      outline:none;
      border-radius:2px;
    }
    .v-table-body{
      overflow-x: hidden!important;
      .v-table-row:nth-child(2n){
        background: #f8f8f9!important;
      }
    }
    .order-table{
      transition: transform .2s;
      /*.ivu-auto-complete{
        .ivu-select-dropdown.ivu-auto-complete{
          right:110px!important;
          left:auto!important;
          width:300px!important;
        }
      }*/
    }

    .orderStaff .ivu-auto-complete,.payWayClass .ivu-select{
      width:auto;
    }
    .payWayClass{
      .ivu-select-selection{
        border-color: #20b8a5!important;
        color: #20b8a5;
        .ivu-icon{
          color: #20b8a5;
        }
      }
    }
  }
</style>

