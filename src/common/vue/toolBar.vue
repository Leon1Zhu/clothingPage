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
    margin-bottom:10px;
    height:46px;
    .ivu-icon-ios-search{
      font-weight:700;
    }
    .page-tag-lable{
      line-height:46px;
      font-size: 20px;
      border-left:4px solid $menuSelectFontColor;
      padding-left:8px;
      height:46px;
    }
    .right-content{
      flex:1;
      height:46px;
      display: flex;
      justify-content: flex-end;
      .ivu-btn,.ivu-input,.ivu-select{
        height:40px!important;
        margin-top:5px!important;
        font-size:14px!important;

      }
      .ivu-input-wrapper{
        .ivu-icon{
          line-height:50px;
          font-size:20px;
        }
      }
      .ivu-select {
        .ivu-select-selection {
          height: 40px !important;
          .ivu-select-placeholder,.ivu-select-selected-value{
            height:100%;
            line-height:40px;
            font-size:14px;
          }
        }
      }
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
   /* @media (max-width: 720px) {
      .page-tag-lable{
        display: none;
      }
    }*/
  }
</style>
