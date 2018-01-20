<template>
  <div class="system-setting-html">
    <Form :model="formItem" :label-width="100">
      <FormItem label="库存预警数量">
        <Input v-model="formItem.input" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem label="系统价格赔率">
        <Input v-model="formItem.input" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem label="价格尾数">
        <i-switch v-model="formItem.switch" size="large">
          <span slot="open">是</span>
          <span slot="close">否</span>
        </i-switch>
      </FormItem>
      <FormItem label="Select">
        <Select v-model="formItem.select">
          <Option value="0">0</Option>
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">4</Option>
          <Option value="5">5</Option>
          <Option value="6">6</Option>
          <Option value="7">7</Option>
          <Option value="8">8</Option>
          <Option value="9">9</Option>
        </Select>
      </FormItem>
      <FormItem label="DatePicker">
        <Row>
          <Col span="11">
          <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
          </Col>
          <Col span="2" style="text-align: center">
          -</Col>
          <Col span="11">
          <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="是否抹零">
        <i-switch v-model="formItem.switch" size="large">
          <span slot="open">是</span>
          <span slot="close">否</span>
        </i-switch>
      </FormItem>
      <FormItem label="Slider">
        <Slider v-model="formItem.slider" range></Slider>
      </FormItem>
      <FormItem label="Text">
        <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
               placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem>
        <Button type="primary">保存</Button>
        <Button type="ghost" style="margin-left: 8px">Cancel</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
  export default {
    props: {},
    data() {
      return {
        formItem: {
          input: '',
          select: '',
          radio: 'male',
          checkbox: [],
          switch: true,
          date: '',
          time: '',
          slider: [20, 50],
          textarea: ''
        }
      };
    },
    methods: {},
    components: {}
  };
</script>
<style lang="scss" rel="stylesheet/scss" type="text/scss">
  .system-setting-html {
    width: 100%;
  }
</style>
