<template>
    <div id="salesOrder">
      <div class="salesOrder-content">
        <Form  :label-width="70">
         <!-- <div class="content-line">
            <FormItem label="客户信息" style="width: 60%;">
              <Input  placeholder="Enter something..."></Input>
              <Button type="ghost" >清除</Button>
              <Button type="ghost" >新增</Button>
            </FormItem>
            <FormItem label="余款"style="width: 38%;">
              <Input  placeholder="Enter something..."></Input>
            </FormItem>
          </div>

          <div class="content-line">
            <FormItem label="店员信息" style="width: 50%;">
              <Input  placeholder="Enter something..."></Input>
              <Button type="ghost" >清除</Button>
              <Button type="ghost" >新增</Button>
            </FormItem>
            <FormItem label="应付"style="width: 24%;">
              <Input  placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="实付"style="width: 24%;">
              <Input  placeholder="Enter something..."></Input>
            </FormItem>
          </div>

          <div class="content-line">
            <FormItem label="店员信息" style="width: 50%;">
              <Input  placeholder="Enter something..."></Input>
              <Button type="ghost" >清除</Button>
              <Button type="ghost" >新增</Button>
            </FormItem>
            <FormItem label="应付"style="width: 24%;">
              <Input  placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="实付"style="width: 24%;">
              <Input  placeholder="Enter something..."></Input>
            </FormItem>
          </div>-->
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
                  <Input  placeholder="Enter something..."></Input>
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
                <Input  v-model="orderInfo.allCount" disabled></Input>
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
    </div>
</template>

<script>

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
              orderInfo:{
                payWay:0,
                integral:'0',
                allCount:0,
              }
            }
        },
        components: {},
        created(){
        },
        mounted(){
        },
        methods: {},
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  #salesOrder{
    .ivu-form-item-content{
      display: flex;
      .ivu-btn.ivu-btn-ghost{
        margin-left:5px;
      }
    }
  }
</style>

