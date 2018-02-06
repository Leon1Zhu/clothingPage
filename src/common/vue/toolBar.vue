<template>
      <section class="tool-bar">
        <div class="page-tag-lable">{{$route.name}}</div>
        <div class="right-content">
          <slot></slot>
        </div>
      </section>
</template>

<script>

    export default{
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
  @import "../css/globalscss";
  .tool-bar{
    display: flex;
    text-align: right;
    margin-bottom:18px;
    .ivu-icon-ios-search{
      font-weight:700;
    }
    .page-tag-lable{
      line-height: 2;
      font-size: 20px;
      border-left:4px solid $menuSelectFontColor;
      padding-left:8px;
    }
    .right-content{
      flex:1;
      margin-top:4px;
      height:32px;
      display: flex;
      justify-content: flex-end;
      .ivu-input{
        width:200px;
        transition: width .5s;
      }
      .ivu-input:hover,.ivu-input:focus{
        width:300px;
      }
      .ivu-select-dropdown.ivu-auto-complete{
        text-align: left;
        width:300px!important;
        right:36px!important;
        left:auto!important;
      }
    }
    @media (max-width: 720px) {
      .page-tag-lable{
        display: none;
      }
    }
  }
</style>
