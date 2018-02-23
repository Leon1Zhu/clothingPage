<template>
  <my-drawer class="changeCustomInfo" :open="open" title="客户信息变更记录" btnFont="关闭" @close-drawer="closeDrawer" @complate-drawer="closeDrawer">
    <Timeline >
      <TimelineItem :color="color">
        <div>客户名称:<span class="chang-info">朱亮</span><Icon  type="arrow-right-a"></Icon><span>张三</span></div>
        <div>客户卡号:<span class="chang-info">123456</span><Icon  type="arrow-right-a"></Icon><span>234567</span></div>
        <div>修改时间:<span class="chang-info">2018-01-02</span></div>
        <section class="chang-user-info">
          <div class="change-staff-info">员工:<span>张三</span></div>
          <div class="changed-custom-info">客户:<span>朱亮</span></div>
        </section>

      </TimelineItem>
      <TimelineItem :color="color">
        <div>客户名称:<span class="chang-info">朱亮</span><Icon  type="arrow-right-a"></Icon><span>张三</span></div>
        <div>客户卡号:<span class="chang-info">123456</span><Icon  type="arrow-right-a"></Icon><span>234567</span></div>
        <div>修改时间:<span class="chang-info">2018-01-02</span></div>
        <section class="chang-user-info">
          <div class="change-staff-info">员工:<span>张三</span></div>
          <div class="changed-custom-info">客户:<span>朱亮</span></div>
        </section>

      </TimelineItem> <TimelineItem :color="color">
      <div>客户名称:<span class="chang-info">朱亮</span><Icon  type="arrow-right-a"></Icon><span>张三</span></div>
      <div>客户卡号:<span class="chang-info">123456</span><Icon  type="arrow-right-a"></Icon><span>234567</span></div>
      <section class="chang-user-info">
        <div class="change-staff-info">员工:<span>张三</span></div>
        <div class="changed-custom-info">客户:<span>朱亮</span></div>
      </section>

    </TimelineItem> <TimelineItem :color="color">
      <div>客户名称:<span class="chang-info">朱亮</span><Icon  type="arrow-right-a"></Icon><span>张三</span></div>
      <div>客户卡号:<span class="chang-info">123456</span><Icon  type="arrow-right-a"></Icon><span>234567</span></div>
      <div>修改时间:<span class="chang-info">2018-01-02</span></div>
      <section class="chang-user-info">
        <div class="change-staff-info">员工:<span>张三</span></div>
        <div class="changed-custom-info">客户:<span>朱亮</span></div>
      </section>

    </TimelineItem> <TimelineItem :color="color">
      <div>客户名称:<span class="chang-info">朱亮</span><Icon  type="arrow-right-a"></Icon><span>张三</span></div>
      <div>客户卡号:<span class="chang-info">123456</span><Icon  type="arrow-right-a"></Icon><span>234567</span></div>
      <div>修改时间:<span class="chang-info">2018-01-02</span></div>
      <section class="chang-user-info">
        <div class="change-staff-info">员工:<span>张三</span></div>
        <div class="changed-custom-info">客户:<span>朱亮</span></div>
      </section>

    </TimelineItem> <TimelineItem :color="color">
      <div>客户名称:<span class="chang-info">朱亮</span><Icon  type="arrow-right-a"></Icon><span>张三</span></div>
      <div>客户卡号:<span class="chang-info">123456</span><Icon  type="arrow-right-a"></Icon><span>234567</span></div>
      <section class="chang-user-info">
        <div class="change-staff-info">员工:<span>张三</span></div>
        <div class="changed-custom-info">客户:<span>朱亮</span></div>
      </section>

    </TimelineItem> <TimelineItem :color="color">
      <div>客户名称:<span class="chang-info">朱亮</span><Icon  type="arrow-right-a"></Icon><span>张三</span></div>
      <div>客户卡号:<span class="chang-info">123456</span><Icon  type="arrow-right-a"></Icon><span>234567</span></div>
      <div>修改时间:<span class="chang-info">2018-01-02</span></div>
      <section class="chang-user-info">
        <div class="change-staff-info">员工:<span>张三</span></div>
        <div class="changed-custom-info">客户:<span>朱亮</span></div>
      </section>

    </TimelineItem> <TimelineItem :color="color">
      <div>客户名称:<span class="chang-info">朱亮</span><Icon  type="arrow-right-a"></Icon><span>张三</span></div>
      <div>客户卡号:<span class="chang-info">123456</span><Icon  type="arrow-right-a"></Icon><span>234567</span></div>
      <div>修改时间:<span class="chang-info">2018-01-02</span></div>
      <section class="chang-user-info">
        <div class="change-staff-info">员工:<span>张三</span></div>
        <div class="changed-custom-info">客户:<span>朱亮</span></div>
      </section>

    </TimelineItem>

      <TimelineItem :color="color"><a href="#">查看更多</a></TimelineItem>
    </Timeline>
  </my-drawer>

</template>

<script>
  import myDrawer from'../../common/vue/myDrawer.vue'
    export default{
      props:{
          open:{
              type:Boolean,
              default:false
          }
      },
        data(){
            return {
                color:SYSTEMCOLOR
            }
        },
        components: {
            'my-drawer': myDrawer
        },
        created(){
        },
        mounted(){
        },
        methods: {
          closeDrawer(){
              this.$emit('closeDrawer')
          },
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import '../../common/css/globalscss';
  .changeCustomInfo{
    a{
      color: grey;
    }
    .ivu-timeline{
      width: 290px;
      margin-left: 100px;
      line-height: 1.2;
      .ivu-timeline-item-tail{
        border-left-width: 4px;
        left:4px;
      }
      .ivu-timeline-item-head{
        border-color: transparent;
        background: $menuSelectFontColor;
      }
      .ivu-timeline-item-content{
        top:5px;
        padding:5px;
        line-height:1.5;
        margin-left:24px;
        background: #e9eaec;
        border-radius:3px;
        font-size:14px;
        .ivu-icon{
          color: $menuSelectFontColor;
          padding:0 5px;
        }
        .chang-user-info{
          position: absolute;
          top: 0px;
          left: -124px;
          padding:5px;
          border-radius:3px;
          .change-staff-info,.changed-custom-info{
            line-height:1.7;
            span{
              font-weight: 700;
              padding-left:3px;
            }
          }
          .change-staff-info{
            span{
              color: grey;
            }
          }
          .changed-custom-info{
            span{
              color:  #f8ab48;;
            }
          }
        }
      }

    }
    .content{
      padding-top:8px!important;
    }
  }
</style>
