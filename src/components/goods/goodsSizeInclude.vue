<template>
      <Modal
        class="size-include"
        title="尺码表选择"
        v-model="modalOpenFlag"
        :mask-closable="maskClosable"
        @on-cancel="onCancle"
        class-name="vertical-center-modal">
        <Tag @click.native="chooseSizeTag($event,item.includeName)" :checked="activeSize.indexOf(item.includeName) > -1"  checkable  v-for=" item in sizeIncludeS">
          {{item.includeName}}
        </Tag>
        <div slot="footer">
        </div>
      </Modal>
</template>

<script>
import goodsManageApi from '../../api/goodsManage';
    export default{
        name:'sizeInclude',
        props:{
        },
        data(){
            return {
              modalOpenFlag:false,
              maskClosable:false,
              sizeIncludeS:[],
              activeSize:null,
            }
        },
        components: {},
        created(){
        },
        mounted(){
        },
        methods: {
          onCancle(){
              this.sizeIncludeS = [],
              this.$emit('on-cancle');
          },
          showModel(type,activeArr){
              console.log(type)
            console.log(activeArr)
              this.modalOpenFlag = true;
              this.activeSize = activeArr;
              this.getGoodsType(type)

          },
          getGoodsType(type){
              goodsManageApi.getSizeIncludes().then(response => {
                this.sizeIncludeS = this.filterType(response.data.result,type)
              }).catch(response => {
                 this.$error(apiError,'获取尺码标签出错！');
              })
          },
          filterType(data,type){
              return Array.prototype.map.call(data,function(item,index,arr){
                if(item.includeType === type){
                  return item;
                 }
              })
          },
          chooseSizeTag(e,name){
            let type = e.target.className.indexOf('ivu-tag-checked') > -1 ? 'delete' : 'add'
              this.$emit('choose-size-tag',name,type)
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
      width:93px;
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
