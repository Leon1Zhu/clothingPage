<template>
      <Modal
        class="size-include"
        title="尺码表选择"
        v-model="modalOpenFlag"
        :mask-closable="maskClosable"
        @on-cancel="onCancle"
        class-name="vertical-center-modal">
        <Tag   checkable >
          XXX
        </Tag>
        <Tag   checkable
        >
          XXX
        </Tag>
        <Tag   checkable
        >
          XXX
        </Tag>
        <div slot="footer">
        </div>
      </Modal>
</template>

<script>

    export default{
        name:'sizeInclude',
        props:{
        },
        data(){
            return {
              modalOpenFlag:false,
              maskClosable:false,
            }
        },
        components: {},
        created(){
        },
        mounted(){
        },
        methods: {
          onCancle(){
              this.$emit('on-cancle');
              return
          },
          showModel(type,){
              this.modalOpenFlag = true;
          }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import '../../common/css/globalscss';
  .size-include{
    .vertical-center-modal{
      display: flex;
      align-items: center;
      justify-content: center;

      .ivu-modal{
        top: 0;
      }
    }
    .ivu-tag{
      width:95px;
      text-align: center;
      height: 32px;
      line-height: 32px;
      border: 1px solid #e9eaec!important;
      color: #495060!important;
      background: #fff!important;
      padding: 0 12px;
    }
    .ivu-tag-text.ivu-tag-color-white{
      color: black!important;
    }
    .ivu-tag-checked{
      background: $menuSelectFontColor!important;
      border-color: $menuSelectFontColor!important;
      .ivu-tag-text{
        color:  #fff!important;
      }
    }
  }
</style>
