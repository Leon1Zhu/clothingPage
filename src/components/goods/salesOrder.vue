<template>
    <div id="salesOrder">
      <div class="salesOrder-content">
        <Form  :label-width="70">
          <Row >
            <Col span="12">
            <FormItem label="客户信息"  >
              <Input  placeholder="Enter something..."></Input>
              <Button type="ghost" >清除</Button>
              <Button type="ghost" >新增</Button>
            </FormItem>
            </Col>

            <Col span="12">
            <FormItem label="开单店员" >
              <Input  placeholder="Enter something..."></Input>
              <Button type="ghost" >核销</Button>
              <Button type="ghost" >抹零</Button>
            </FormItem>
            </Col>
          </Row>

          <Row >
            <Col span="12">
              <div class="pay-way" style="display: flex;">
                <FormItem label="应付"  >
                  <span class="disable-input">{{orderInfo.payable}}</span>
                </FormItem>
                <FormItem label="实付" :label-width="50">
                  <Input  placeholder="Enter something..."></Input>
                </FormItem>
                <FormItem label="余款" :label-width="50">
                  <Input  placeholder="Enter something..."></Input>
                </FormItem>
              </div>
            </Col>

            <Col span="12">
              <FormItem label="付款方式"  >
                <Select v-model="orderInfo.payWay">
                  <Option v-for="item in paymentWay" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>

                <Select  v-model="orderInfo.integral" style="margin-left: 5px;">
                  <Option  value="0" >不使用积分</Option>
                  <Option  value="1" >使用积分抵扣</Option>
                </Select>
              </FormItem>
            </Col>

          </Row>

          <Row >
            <Col span="12">
              <FormItem label="日期" >
                <DatePicker :options="options3" type="date" format="yyyy/MM/dd"  placeholder="请选择开单日期。。。" style="width: 100%;"></DatePicker>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="总件数" >
                <span class="disable-input">{{orderInfo.allCount}}</span>
              <!--  <Input  v-model="orderInfo.allCount" disabled></Input>-->
              </FormItem>
              </FormItem>
            </Col>
          </Row>

          <Row >
            <Col span="24">
            <FormItem label="备注" >
              <Input  placeholder="请输入开单备注..."></Input>
              <Button type="ghost" >清空从填</Button>
              <Button type="ghost" >退换入库</Button>
            </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
      <div class="order-table">
        <v-table
          is-horizontal-resize
          style="width:100%;"
          :columns="columns"
          :table-data="tableData"
          row-hover-color="#eee"
          row-click-color="#edf7ff"
          :cell-edit-done="cellEditDone"
        ></v-table>
      </div>
    </div>
</template>

<script>
  import 'vue-easytable/libs/themes-base/index.css'
  import {VTable} from 'vue-easytable'
    export default{
        data(){
            return {
              paymentWay:PAYMENTWAY,
              options3: {
                disabledDate (date) {
                    console.log()
                  return new Date().Format('yyyy/MM/dd') <  new Date(date).Format('yyyy/MM/dd');
                }
              },
              columns:  [
                {field: 'id', title:'序号', width: 80, titleAlign: 'center',columnAlign:'center', isResize:true},
                {field: 'goodName', title: '货品',width: 80,  titleAlign: 'center',columnAlign:'center',isResize:true},
                {field: 'color', title: '颜色',width: 50,  titleAlign: 'center',columnAlign:'center',isResize:true},
                {field: 'size', title: '尺码', width: 50, titleAlign: 'center',columnAlign:'center',isResize:true},
                {field: 'count', title: '数量', width: 50, titleAlign: 'center',columnAlign:'center',isEdit:true,isResize:true},
                {field: 'prince', title: '单价', width: 50, titleAlign: 'center',columnAlign:'center',isEdit:true,isResize:true},
                {field: 'sum', title: '合计', width: 50, titleAlign: 'center',columnAlign:'center', formatter: function (rowData,rowIndex,pagingIndex,field) {
                  return `<span >${rowData['count'] * rowData['prince']}</span>`;
                },isResize:true}



              ],
              tableData: [
                {"id":"1","goodName":"01016下口袋","color":"浅蓝","size":"L",count:10,prince:14,sum:140},
                {"id":"2","goodName":"01016下口袋","color":"浅蓝","size":"L",count:10,prince:24,sum:240},
                {"id":"3","goodName":"01016下口袋","color":"浅蓝","size":"L",count:10,prince:34,sum:340},
                {"id":"4","goodName":"01016下口袋","color":"浅蓝","size":"L",count:10,prince:44,sum:440},
                {"id":"5","goodName":"01016下口袋","color":"浅蓝","size":"L",count:10,prince:54,sum:540},
                {"id":"6","goodName":"01016下口袋","color":"浅蓝","size":"L",count:10,prince:64,sum:640},
                {"id":"7","goodName":"01016下口袋","color":"浅蓝","size":"L",count:10,prince:74,sum:740}
              ],
              orderInfo:{
                payWay:0,
                integral:'0',
                allCount:0,
                payable:0,
              },
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
            var sum=0
            for(let item in this.tableData){
              sum+= this.tableData[item].sum
            }
            this.orderInfo.payable = sum
          }
        },
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import '../../common/css/globalscss.scss';
  #salesOrder{
    .ivu-form-item-content{
      display: flex;
      .ivu-btn.ivu-btn-ghost{
        margin-left:5px;
      }
    }
    .v-table-views{
      border: 1px solid #dddee1;
      color: #495060;
      font-size: 12px;
      background-color: #fff;
      border-radius: 3px;
    }
    .v-table-header-row{
      background-color: $menuSelectFontColor;
      color: white;
      font-size: 14px;
    }
    .cell-edit-input{
      border:1px solid $menuSelectFontColor;
      outline:none;
      border-radius:2px;
    }
  }
</style>

