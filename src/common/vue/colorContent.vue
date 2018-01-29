<template>
  <div class="color-content">
      <div class="colordiamonds"  :style="{background:color}"></div>
      <div class="colorName">{{colorName}}</div>
  </div>
</template>

<script>

    export default{
      props:['colorName','color'],
        data(){
            return {}
        },
        components: {},
        created(){
        },
        mounted(){
        },
        methods: {}
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../common/css/globalscss";
  .color-content{
    display: flex;
    color: $menuSelectFontColor;
    width: 61px;
    height:25px;
    padding: 3px;
    border: 1px solid $menuSelectFontColor;
    font-size:12px;
    margin-top:3px;
    border-radius:3px;
    .colordiamonds{
      margin-top:2.5px;
      width: 12px;
      height:12px;
      margin-right:3px;
      margin-left:2px;
    }
    .colorName{
      line-height:150%;
    }
  }
</style>
