<template>
  <div>
    <tool-bar></tool-bar>
    <div class="color-size-manage-html">
      <!--尺码管理-->
      <div class="size-manage">
        <!--尺码块-->
        <Card v-for="sizeData in sizeDataS" class="card-size">
          <p slot="title" class="title">
            {{sizeData.sizetypeName}}&nbsp;<span @click="addSize(sizeData)">&nbsp;<Icon class="ui-cursor"
                                                                                        type="ios-plus-outline"
                                                                                        color="#06c1ae"></Icon></span>
          </p>
          <Tag v-for="size in sizeData.sizes" closable
               @on-close="deleteSize(size.sizeId, size.sizeType)" type="dot" class="size-tag" color="#06c1ae">
            {{size.sizeName}}
          </Tag>
        </Card>
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
      margin-top: -8px;
      flex: 1;
      .title span {
        float: right;
        margin-right: 8px;
      }
      .card-size {
        margin-top: 8px;
        .size-tag {
          width: 95px !important;
          text-align: center;
        }
        .ivu-tag-dot-inner {
          display: none;
        }
        .ui-cursor {
          font-weight: 600;
        }
      }
      .size-chunk {
        padding: 8px 8px 8px 0px;
        margin: {
          top: 15px;
        }
        border: 1px solid #dddee1;
        &:hover {

        }
        .size-name {
          padding: 8px 8px 8px 0px;
          border-bottom: 1px solid #f8f6f2;
        }
        .detail {
          padding: 8px 8px 8px 0px;
          .size-tag {
            height: 32px;
            line-height: 32px;
            border: 1px solid #e9eaec !important;
            padding: 0 12px;
            width: 95px !important;
            text-align: center;
          }
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
