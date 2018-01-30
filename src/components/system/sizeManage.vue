<template>
  <div class="color-size-manage-html">
    <!--尺码管理-->
    <div class="size-manage">
      <!--尺码块-->
      <div class="size-chunk">
        <!--尺码的名称-->
        <div class="size-name">
          <div class="title">
            均码&nbsp;&nbsp;
            <span @click="addSize"><Icon class="ui-cursor" type="plus-circled" color="#06c1ae"></Icon></span>
          </div>
        </div>
        <!--尺码的细节-->
        <div class="detail">
          <Tag type="dot" closable color="#06c1ae">M</Tag>
          <Tag type="dot" closable color="#06c1ae">S</Tag>
          <Tag type="dot" closable color="#06c1ae">L</Tag>
          <Tag type="dot" closable color="#06c1ae">XL</Tag>
          <Tag type="dot" closable color="#06c1ae">XXL</Tag>
        </div>
      </div>
      <div class="size-chunk">
        <!--尺码的名称-->
        <div class="size-name">
          <div class="title">
            中国码&nbsp;&nbsp;
            <span @click="addSize"><Icon class="ui-cursor" type="plus-circled" color="#06c1ae"></Icon></span>
          </div>
        </div>
        <!--尺码的细节-->
        <div class="detail">
          <Tag type="dot" closable color="#06c1ae">L</Tag>
          <Tag type="dot" closable color="#06c1ae">M</Tag>
          <Tag type="dot" closable color="#06c1ae">X</Tag>
        </div>
      </div>
    </div>
    <my-drawer :open="sizeOpen" title="尺码添加" @close-drawer="sizeOpen=false" @complate-drawer="complateDrawer">
      <div>
        <Form :model="formItem" :label-width="80">
          <FormItem label="尺码名称">
            <Input v-model="sizeName" placeholder="XXL"></Input>
          </FormItem>
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
        sizeOpen: false,
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
      addSize() {
        this.sizeOpen = true;
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
    .size-manage {
      flex: 1;
      .size-chunk {
        padding: 8px;
        margin: {
          top: 15px;
        }
        .size-name {
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
