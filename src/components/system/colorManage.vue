<template>
  <div class="color-size-manage-html">
    <!--颜色管理-->
    <div class="color-manage">
      <!--颜色块-->
      <div class="color-chunk">
        <!--颜色的名称-->
        <div class="color-name">
          <div class="title">
            单色系&nbsp;&nbsp;
            <span @click="addColor"><Icon class="ui-cursor" type="plus-circled" color="#06c1ae"></Icon></span>
          </div>
        </div>
        <!--颜色的细节-->
        <div class="detail">
          <Tag type="dot" v-if="show" closable @on-close="handleClose" color="blue">蓝色</Tag>
          <Tag type="dot" v-if="show" closable @on-close="handleClose" color="green">绿色</Tag>
          <Tag type="dot" v-if="show" closable @on-close="handleClose" color="red">红色</Tag>
          <Tag type="dot" v-if="show" closable @on-close="handleClose" color="yellow">黄色</Tag>
        </div>
      </div>
      <div class="color-chunk">
        <!--颜色的名称-->
        <div class="color-name">
          <div class="title">
            红色系&nbsp;&nbsp;
            <span @click="addColor">
              <Icon class="ui-cursor" type="plus-circled" color="#06c1ae"></Icon>
            </span>
          </div>
        </div>
        <!--颜色的细节-->
        <div class="detail">
          <Tag type="dot" closable @on-close="handleClose" color="#FF8C69">红色</Tag>
          <Tag type="dot" closable @on-close="handleClose" color="#FF8247">粉红色</Tag>
          <Tag type="dot" closable @on-close="handleClose" color="#FF34B3">玫瑰红</Tag>
          <Tag type="dot" closable @on-close="handleClose" color="#FF0000">牡丹红</Tag>
        </div>
      </div>
      <div class="color-chunk">
        <!--颜色的名称-->
        <div class="color-name">
          <div class="title">
            蓝色系&nbsp;&nbsp;
            <span @click="addColor">
              <Icon class="ui-cursor" type="plus-circled" color="#06c1ae"></Icon>
            </span>
          </div>
        </div>
        <!--颜色的细节-->
        <div class="detail">
          <Tag type="dot" closable @on-close="handleClose" color="#00EEEE">淡蓝</Tag>
          <Tag type="dot" closable @on-close="handleClose" color="#00C5CD">天蓝</Tag>
          <Tag type="dot" closable @on-close="handleClose" color="#00688B">蔚蓝</Tag>
          <Tag type="dot" closable @on-close="handleClose" color="#0000CD">海蓝</Tag>
        </div>
      </div>
      <div class="color-chunk">
        <!--颜色的名称-->
        <div class="color-name">
          <div class="title">
            蓝色系&nbsp;&nbsp;
            <span @click="addColor">
              <Icon class="ui-cursor" type="plus-circled" color="#06c1ae"></Icon>
            </span>
          </div>
        </div>
        <!--颜色的细节-->
        <div class="detail">
          <Tag type="dot" closable @on-close="handleClose" color="#00EEEE">淡蓝</Tag>
          <Tag type="dot" closable @on-close="handleClose" color="#00C5CD">天蓝</Tag>
          <Tag type="dot" closable @on-close="handleClose" color="#00688B">蔚蓝</Tag>
          <Tag type="dot" closable @on-close="handleClose" color="#0000CD">海蓝</Tag>
        </div>
      </div>
    </div>
    <my-drawer :open="colorOpen" title="颜色添加" @close-drawer="colorOpen=false" @complate-drawer="complateDrawer">
      <div>
        <Form :model="formItem" :label-width="80">
          <FormItem label="颜色的名称">
            <Input v-model="formItem.name" placeholder="颜色的名称"></Input>
          </FormItem>
          <FormItem label="16进制颜色">
            <Input v-model="formItem.sixteenColor" placeholder="#665424"></Input>
          </FormItem>
          <FormItem label="RGB颜色">
            <Input v-model="formItem.rgbColor" placeholder="rgb(255,231,200)"></Input>
          </FormItem>
          <Alert>两个值都填时，默认取16进制</Alert>
        </Form>
      </div>
    </my-drawer>
  </div>
</template>
<script>
  import myDrawer from '../../common/vue/myDrawer.vue';

  export default {
    props: {},
    data() {
      return {
        colorOpen: false,
        show: true,
        formItem: {
          name: '粉红色',
          sixteenColor: '#fff000',
          rgbColor: 'rgb(255,186,123)'
        },
        sizeName: 'XXL',
      };
    },
    methods: {
      handleClose() {
        this.show = false;
      },
      addColor() {
        this.colorOpen = true;
      }
    },
    components: {
      myDrawer
    }
  };
</script>
<style lang="scss" rel="stylesheet/scss" type="text/scss">
  @import '../../common/css/globalscss.scss';

  .color-size-manage-html {
    display: flex;
    width: 100%;
    .color-manage {
      flex: 1;
      border-right: 2px solid #f8f6f2;
      .color-chunk {
        padding: 8px;
        margin: {
          top: 15px;
        }
        .color-name {
          padding: 8px;
          border-bottom: 1px solid #f8f6f2;
        }
        .detail {
          padding: 8px;
        }
      }
    }
  }
</style>
