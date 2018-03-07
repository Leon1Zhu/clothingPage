<template>
  <div>
    <tool-bar></tool-bar>
    <div class="color-size-manage-html">
      <!--颜色管理-->
      <div class="color-manage">
        <!--颜色块-->
        <Card v-for="colorData in colorDataS" class="card-color">
          <p slot="title" class="title">
            {{colorData.seriesName}}&nbsp;&nbsp;
            <span @click="addColor(colorData)"><Icon class="ui-cursor add-icon" type="ios-plus-outline"
                                                     color="#06c1ae"></Icon></span>
          </p>
          <Tag v-for="color in colorData.colors" type="dot" closable
               @on-close="deleteColor(color.colorId, color.colorType)"
               :color="color.colorRgb">
            {{color.colorName}}
          </Tag>
        </Card>
      </div>
      <my-drawer :open="colorOpen" title="颜色添加" @close-drawer="colorOpen=false" @complate-drawer="addColorData()">
        <div>
          <div class="store-item">
            <div class="left-content">
              <div class="store-item-label">颜色的名称<span class="red-star">*</span><span class="p-explain">(蓝色系)</span>
              </div>
            </div>
            <div class="right-content">
              <Input v-model="formItem.name" class="input-width" placeholder="颜色的名称"></Input>
            </div>
          </div>
          <div class="store-item">
            <div class="left-content">
              <div class="store-item-label">16进制颜色<span class="red-star">*</span></div>
            </div>
            <div class="right-content">
              <Input v-model="formItem.sixteenColor" class="input-width" placeholder="16进制颜色"></Input>
            </div>
          </div>
        </div>
      </my-drawer>
    </div>
    <color-choose :sizeOpen="colorChooseOpen" :selectColorArray="selectArray" @select-size="updateColor"></color-choose>
  </div>
</template>
<script>
  import myDrawer from '../../common/vue/myDrawer.vue';
  import toolBar from '../../common/vue/toolBar.vue';

  import colorApi from '../../api/colorManage';

  export default {
    props: {},
    data() {
      return {
        colorChooseOpen: true,
        colorOpen: false,
        colorDataS: [],
        formItem: {
          name: '',
          sixteenColor: ''
        },
        colorData: {
          colorName: '',
          colorRgb: '',
          colorSeries: '',
          colorType: '自定义'
        },
      };
    },
    created() {
      this.getSysTemColor();
    },
    methods: {
      getSysTemColor() {
        colorApi.getSysTemColor(this.$store.getters.getAccountId).then((response) => {
          this.colorDataS = response.data;
        }).catch((error) => {
          this.$error(apiError, '获取错误')
        });
      },

      handleClose() {
        this.show = false;
      },
      addColor(color) {
        this.colorOpen = true;
        this.colorData.colorSeries = color.seriesName;
      },
      addColorData() {
        this.colorData.colorName = this.formItem.name;
        this.colorData.colorRgb = this.formItem.sixteenColor;
        colorApi.addStoreColorBySysTem(this.$store.getters.getAccountId, this.colorData).then((response) => {
          this.colorOpen = false;
          this.getSysTemColor();
        }).catch((error) => {
          this.$error(apiError, '获取错误')
        });
      },
      deleteColor(colorId, colorType) {
        if (colorType === '系统') {
          this.$Notice.error({
            title: '系统颜色，不允许删除！',
          });
        } else {
          colorApi.deleteStoreColorBySysTemUrl(this.$store.getters.getAccountId, colorId).then((response) => {
            this.getSysTemColor();
          }).catch((error) => {
            this.$error(apiError, '获取错误')
          });
        }
      },
      updateColor(color) {
        console.log("更新到了");
        console.log(color);
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
    .color-manage {
      flex: 1;
      margin-top: -8px;
      .add-icon {
        font-size: 18px;
      }
      .title span {
        float: right;
        margin-right: 8px;
      }
      .card-color {
        margin-top: 8px;
        .ui-cursor {
          font-weight: 600;
        }
      }
      .color-chunk {
        padding: 8px 8px 8px 0px;
        margin: {
          top: 15px;
        }
        .color-name {
          padding: 8px 8px 8px 0px;
          border-bottom: 1px solid #f8f6f2;
        }
        .detail {
          padding: 8px 8px 8px 0px;
        }
      }
    }
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
      .input-width {
        width: 82%;
      }
    }
  }

  .p-explain {
    padding: 5px;
    color: rgba(0, 0, 0, 0.4);
  }
</style>
