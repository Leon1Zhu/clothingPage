<template>
  <mu-drawer :docked="docked" right :open="open">
    <div class="drawer-content">
      <h1 class="drawer-title">{{title}}<Icon @click.native="closeDrawer" type="close"></Icon></h1>
      <div class="content">
        <slot></slot>
      </div>
      <Button type="primary" long style="margin-top: 2%;" @click.native="complate">{{btnFont}}</Button>
    </div>
  </mu-drawer>
</template>

<script>

    export default{
        props:{
            'open':{
                type:Boolean,
                default:false,
            },
            title:{
                type:String,
                default:'这里是标题'
            },
            btnFont:{
                type:String,
                default:'完成',
            }
        },
        data(){
            return {
              docked:false,
            }
        },
        components: {},
        created(){
        },
        mounted(){
        },
        methods: {
          closeDrawer(){
              this.$emit('close-drawer')
          },
          complate(){
              this.$emit('complate-drawer')
          }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
</style>
