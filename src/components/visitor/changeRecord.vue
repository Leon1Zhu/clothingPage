<template>
    <div id="changeRecord">
      <myD-drawer btnFont="关闭" title="客户信息变更记录"></myD-drawer>
    </div>
</template>

<script>
import  myDrawer from '../../common/vue/myDrawer.vue'
    export default{
        props:{
          'open':{
            type:Boolean,
            default:false,
          },
        },
        data(){
            return {}
        },
        components: {
            'myD-drawer' :myDrawer,
        },
        created(){
        },
        mounted(){
        },
        methods: {}
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  #changeRecord{

  }
</style>
