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
            <Icon type="plus-circled" color="#06c1ae"></Icon>
          </div>
        </div>
        <!--颜色的细节-->
        <div class="detail">
          <Tag type="dot" v-if="show" closable @on-close="handleClose" color="blue">红色</Tag>
          <Tag type="dot" v-if="show" closable @on-close="handleClose" color="green">蓝色</Tag>
          <Tag type="dot" v-if="show" closable @on-close="handleClose" color="red">黑色</Tag>
          <Tag type="dot" v-if="show" closable @on-close="handleClose" color="yellow">白色</Tag>
        </div>
      </div>
      <div class="color-chunk">
        <!--颜色的名称-->
        <div class="color-name">
          <div class="title">
            红色系&nbsp;&nbsp;
            <Icon type="plus-circled" color="#06c1ae"></Icon>
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
            <Icon type="plus-circled" color="#06c1ae"></Icon>
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
    <!--尺码管理-->
    <div class="size-manage">
      <!--尺码块-->
      <div class="size-chunk">
        <!--尺码的名称-->
        <div class="size-name">
          <div class="title">
            均码&nbsp;&nbsp;
            <Icon type="plus-circled" color="#06c1ae"></Icon>
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
            均码&nbsp;&nbsp;
            <Icon type="plus-circled" color="#06c1ae"></Icon>
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

  </div>
</template>
<script>
  export default {
    props: {},
    data() {
      return {
        show: true
      };
    },
    methods: {
      handleClose() {
        this.show = false;
      }
    },
    components: {}
  };
</script>
<style lang="scss" rel="stylesheet/scss" type="text/scss">
  .color-size-manage-html {
    display: flex;
    width: 100%;
    .color-manage {
      flex: 0 0 50%;
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
    .size-manage {
      flex: 0 0 50%;
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
