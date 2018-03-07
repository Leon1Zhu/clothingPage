<template>
  <div class="">
    <Modal
      v-model="sizeOpen"
      title="尺码选择">
      <Card v-for="sizeData in sizeDataS" class="card-size">
        <p slot="title" class="title">
          {{sizeData.sizetypeName}}
        </p>
        <Tag v-for="size in sizeData.sizes" :class="{'active': size.isActive ==='add'}"
             @click.native="selectSize(size)" type="dot" class="size-tag"
             color="#06c1ae">
             {{size.sizeName}}
        </Tag>
      </Card>
      <div slot="footer">
      </div>
    </Modal>
  </div>
</template>
<script>
  import Vue from 'vue';
  import sizeApi from '../../api/sizeManage';

  export default {
    props: {
      sizeOpen: {
        default: false
      },
      selectSizeArray: {
        type: Array
      }
    },
    data() {
      return {
        sizeDataS: []
      };
    },
    created() {
      this.getSysTemSize();
      for (let sizeSelect of this.selectSizeArray) {
        for (let sizes of this.sizeDataS) {
          for (let singleSize of sizes) {
            if (singleSize.sizeId === sizeSelect) {
              Vue.set(singleSize, 'isActive', 'add');
            }
          }
        }
      }
    },
    methods: {
      getSysTemSize() {
        sizeApi.getSysTemSize(this.$store.getters.getAccountId).then((response) => {
          this.sizeDataS = response.data;
        }).catch((error) => {
          this.$error(apiError, '获取错误')
        });
      },
      selectSize(size) {
        if (size.isActive === '' || size.isActive === undefined || size.isActive === 'delete') {
          Vue.set(size, 'isActive', 'add');
        } else {
          Vue.set(size, 'isActive', 'delete');
        }
        this.$emit('select-size', size);
      }
    },
    components: {}
  };
</script>
<style lang="scss" rel="stylesheet/scss" type="text/scss">
  .card-size {
    margin-top: 8px;
    .active {
      border: 1px solid #06b9a5 !important;
    }
    .size-tag {
      width: 95px !important;
      text-align: center;
    }
    .ui-cursor {
      font-weight: 600;
    }
  }
</style>
