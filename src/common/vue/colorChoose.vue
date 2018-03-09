<template>
  <div class="">
    <Modal
      v-model="colorOpen"
      title="颜色选择"
      :mask-closable="maskClosable"
      @on-cancel="onCancle">
      <Card v-for="colorData in colorDataS" class="card-color">
        <p slot="title" class="title">
          {{colorData.seriesName}}
        </p>
        <Tag :class="{'active': color.isActive ==='add'}" v-for="color in colorData.colors" type="dot"
             :color="color.colorRgb" @click.native="selectColor(color)">
          {{color.colorName}}
        </Tag>
      </Card>
      <div slot="footer">
      </div>
    </Modal>
  </div>
</template>
<script>
  import Vue from 'vue';
  import colorApi from '../../api/colorManage';

  export default {
    props: {
      selectColorArray: {
        type: Array
      }
    },
    data() {
      return {
        maskClosable: false,
        colorOpen: false,
        colorDataS: []
      };
    },
    methods: {
      showModel() {
        this.colorOpen = true;
        this.getSysTemColor();
      },
      onCancle() {
        this.$emit('on-cancle');
      },
      getSysTemColor() {
        colorApi.getSysTemColor(this.$store.getters.getAccountId).then((response) => {
          this.colorDataS = response.data;
          for (let colorSelect of this.selectColorArray) {
            for (let colors of this.colorDataS) {
              for (let singleColor of colors.colors) {
                if (singleColor.colorName === colorSelect) {
                  Vue.set(singleColor, 'isActive', 'add');
                }
              }
            }
          }
        }).catch((error) => {
          this.$error(apiError, '获取错误')
        });
      },
      selectColor(color) {
        if (color.isActive === '' || color.isActive === undefined || color.isActive === 'delete') {
          Vue.set(color, 'isActive', 'add');
        } else {
          Vue.set(color, 'isActive', 'delete');
        }
        this.$emit('select-color', color);
      }
    },
    components: {}
  };
</script>
<style lang="scss" rel="stylesheet/scss" type="text/scss">
  .card-color {
    margin-top: 8px;
    .active {
      border: 1px solid #06b9a5 !important;
    }
    .ui-cursor {
      font-weight: 600;
    }
  }
</style>
