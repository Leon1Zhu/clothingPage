<template>
  <div>
    <tool-bar></tool-bar>
    <div class="color-size-manage-html">
      <!--尺码管理-->
      <div class="size-manage">
        <!--尺码块-->
        <div v-for="sizeData in sizeDataS" class="size-chunk">
          <!--尺码的名称-->
          <div class="size-name">
            <div class="title">
              {{sizeData.sizetypeName}}&nbsp;&nbsp;
              <span @click="addSize(sizeData)"><Icon class="ui-cursor" type="plus-circled"
                                                     color="#06c1ae"></Icon></span>
            </div>
          </div>
          <!--尺码的细节-->
          <div class="detail">
            <Tag v-for="size in sizeData.sizes" type="dot" closable
                 @on-close="deleteSize(size.sizeId, size.sizeType)" color="#06c1ae">{{size.sizeName}}
            </Tag>
          </div>
        </div>
      </div>
      <my-drawer :open="sizeOpen" title="尺码添加" @close-drawer="sizeOpen=false" @complate-drawer="addSizeData()">
        <div class="add-size-drawer">
          <div class="store-item">
            <div class="left-content">
              <div class="store-item-label">尺码的名称<span class="red-star">*</span></div>
            </div>
            <div class="right-content">
              <Input v-model="sizeName" class="input-width" placeholder="XXL"></Input>
            </div>
          </div>
        </div>
      </my-drawer>
    </div>
  </div>
</template>
<script>
  import myDrawer from '../../common/vue/myDrawer.vue';
  import toolBar from '../../common/vue/toolBar.vue';
  import sizeApi from '../../api/sizeManage';

  export default {
    props: {},
    data() {
      return {
        sizeOpen: false,
        show: true,
        sizeDataS: [],
        sizeName: '',
        sizeObject: {
          sizeName: '',
          sizeType: '自定义',
          sizeTypeId: 0,
          sizeTypeName: ''
        }
      };
    },
    created() {
      this.getSysTemSize();
    },
    methods: {
      getSysTemSize() {
        sizeApi.getSysTemSize(this.$store.getters.getAccountId).then((response) => {
          this.sizeDataS = response.data;
          console.log(this.sizeDataS);
        }).catch((error) => {
          this.$error(apiError, '获取错误')
        });
      },
      addSize(sizeData) {
        this.sizeOpen = true;
        this.sizeObject.sizeTypeId = sizeData.sizetypeId;
        this.sizeObject.sizeTypeName = sizeData.sizetypeName;
      },
      addSizeData() {
        this.sizeObject.sizeName = this.sizeName;
        sizeApi.addStoreSizeBySysTem(this.$store.getters.getAccountId, this.sizeObject).then((response) => {
          this.getSysTemSize();
          this.sizeOpen = false;
        }).catch((error) => {
          this.$error(apiError, '获取错误')
        });
      },
      deleteSize(sizeId, sizeType) {
        if (sizeType === '系统') {
          this.$Notice.error({
            title: '系统尺码，不允许删除！',
          });
        } else {
          sizeApi.deleteStoreSizeBySysTemUrl(this.$store.getters.getAccountId, sizeId).then((response) => {
            this.getSysTemSize();
          }).catch((error) => {
            this.$error(apiError, '获取错误')
          });
        }
      }
    },
    components: {
      myDrawer,
      toolBar
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
        padding: 8px 8px 8px 0px;
        margin: {
          top: 15px;
        }
        .size-name {
          padding: 8px 8px 8px 0px;
          border-bottom: 1px solid #f8f6f2;
        }
        .detail {
          padding: 8px 8px 8px 0px;
        }
      }
    }
  }

  .add-size-drawer {
    margin-top: 8px;
  }

  .store-item {
    padding: 5px 0px;
    border-bottom: 1px solid $formLabelBorderBottomColor;
    display: flex;
    .left-content {
      display: flex;
      flex: 1;
      line-height: 200%;
    }
    .right-content {
      text-align: right;
    }
  }
</style>
