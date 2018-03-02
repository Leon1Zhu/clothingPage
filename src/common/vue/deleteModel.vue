<template>
  <Modal v-model="open" width="360"  @on-cancel="cancel">
    <p slot="header" style="color:#f60;text-align:center">
      <Icon type="information-circled"></Icon>
      <span>{{title}}</span>
    </p>
    <div style="text-align:center">
      <p>{{deleteInfo}}</p>
    </div>
    <div slot="footer">
      <Button type="error" size="large" class="delete_store" long :loading="modalLoading" @click="delInfo">删除</Button>
    </div>
  </Modal>
</template>

<script>

    export default{
        name:'deleteModel',
        props:{
            open:{
                type:Boolean,
                default:false
            },
            title:{
                type:String,
                default:'删除确认'
            },
            deleteInfo:{
                type:String,
                default:'确认删除该信息么？'
            },
            modalLoading:{
                type:Boolean,
                default:false,
            }
        },
        data(){
            return {}
        },
        components: {},
        created(){
        },
        mounted(){
        },
        methods: {
          delInfo(){
              this.$emit('delInfo');
          },
          cancel(){
              this.$emit('cancle')
          }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
</style>
