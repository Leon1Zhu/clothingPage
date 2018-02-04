<template>
  <div>
    <tool-bar></tool-bar>
    <div class="color-size-manage-html">
      <!--颜色管理-->
      <div class="color-manage">
        <!--颜色块-->
        <div v-for=" colorData in colorDataS" class="color-chunk">
          <!--颜色的名称-->
          <div class="color-name">
            <div class="title">
              {{colorData.seriesName}}&nbsp;&nbsp;
              <span @click="addColor(colorData)"><Icon class="ui-cursor" type="plus-circled"
                                                       color="#06c1ae"></Icon></span>
            </div>
          </div>
          <!--颜色的细节-->
          <div class="detail">
            <Tag v-for="color in colorData.colors" type="dot" closable
                 @on-close="deleteColor(color.colorId, color.colorType)"
                 :color="color.colorRgb">
              {{color.colorName}}
            </Tag>
          </div>
        </div>
      </div>
      <my-drawer :open="colorOpen" title="颜色添加" @close-drawer="colorOpen=false" @complate-drawer="addColorData()">
        <div>
          <Form :model="formItem" :label-width="80">
            <FormItem label="颜色的名称">
              <Input v-model="formItem.name" placeholder="颜色的名称"></Input>
            </FormItem>
            <FormItem label="16进制颜色">
              <Input v-model="formItem.sixteenColor" placeholder="#665424"></Input>
            </FormItem>
            <!--<FormItem label="RGB颜色">
              <Input v-model="formItem.rgbColor" placeholder="rgb(255,231,200)"></Input>
            </FormItem>-->
          </Form>
        </div>
      </my-drawer>
    </div>
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
      border-right: 2px solid #f8f6f2;
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
</style>
