<template>
  <div  id="mainpage"  class="layout" :class="{'layout-hide-text': spanLeft < 5}">
  <Row type="flex">
    <Col :span="spanLeft" class="layout-menu-left">
    <Menu active-name="1" themem="dark" width="auto" :accordion="accordion">
      <div class="layout-logo-left">
        <img class="fire-cow" src="../../assets/logo.png">
      </div>
      <div class="fire-cow-menu" v-for="(menuItem,index) in menu">
        <Submenu :name="index" v-if="menuItem.hasChild">
          <template slot="title">
            <i  v-if="!ISNULL(menuItem.menuIcon)" class="iconfont " :class=" menuItem.menuIcon"></i>
             {{menuItem.menuName}}
          </template>
          <MenuItem   v-for="(childrenItem,indexChildrenT) in menuItem.childMenuList" :name="index+'-'+indexChildrenT">
            <i  v-if="!ISNULL(menuItem.menuIcon)" class="iconfont " :class=" childrenItem.menuIcon"></i>
            <span>{{childrenItem.menuName}}</span>
          </MenuItem>
        </Submenu>
        <MenuItem :name="index" v-else>
          <i  v-if="!ISNULL(menuItem.menuIcon)" class="iconfont " :class=" menuItem.menuIcon"></i>
          <span>{{menuItem.menuName}}</span>
        </MenuItem>
      </div>
      <!--<Submenu name="1">
        <template slot="title">
          <Icon type="ios-navigate"></Icon>
          Item 1
        </template>
        <MenuItem name="1-1">Option 1</MenuItem>
        <MenuItem name="1-2">Option 2</MenuItem>
        <MenuItem name="1-3">Option 3</MenuItem>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
          <Icon type="ios-keypad"></Icon>
          Item 2
        </template>
        <MenuItem name="2-1">Option 1</MenuItem>
        <MenuItem name="2-2">Option 2</MenuItem>
      </Submenu>
      <Submenu name="3">
        <template slot="title">
          <Icon type="ios-analytics"></Icon>
          Item 3
        </template>
        <MenuItem name="3-1">Option 1</MenuItem>
        <MenuItem name="3-2">Option 2</MenuItem>
      </Submenu>-->
    </Menu>
    </Col>
    <Col :span="spanRight">
    <div class="layout-header">
      <Button type="text" @click="toggleClick">
        <Icon type="navicon" size="32"></Icon>
      </Button>
    </div>
    <div class="layout-content">
      <div class="layout-content-main">
        <router-view></router-view>
      </div>
    </div>
    <!--<div class="layout-copy">
      2011-2016 &copy; TalkingData
    </div>-->
    </Col>
  </Row>
  </div>
</template>

<script>
  import '../../menu'
    export default{
      data () {
        return {
          spanLeft: 4,
          spanRight: 20,
          accordion:true,
          menu:MENU
        }
      },
      computed: {
        iconSize () {
          return this.spanLeft === 4 ? 14 : 24;
        }
      },
      methods: {
        toggleClick () {
          if (this.spanLeft === 4) {
            this.spanLeft = 2;
            this.spanRight = 22;
          } else {
            this.spanLeft = 4;
            this.spanRight = 20;
          }
        },
        ISNULL : ISNULL
      }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import '../../common/css/globalscss.scss';
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height:100%;
  }
  .ivu-row-flex{
    height:100%;
  }
  .layout-content{
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 10px;
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  .layout-menu-left{
    background: #464c5b;
  }
  .layout-header{
    height: 60px;
   /*background: radial-gradient(at 50% 50%,#509e95,#487772);*/
    background: #fff;
  }
  .layout-logo-left{
    width: 90%;
    height: 40px;
    border-radius: 3px;
    margin:5px 5% 15px 5%;
  }
  .layout-ceiling-main a{
    color: #9ba7b5;
  }
  .layout-hide-text .layout-text{
    display: none;
  }
  .ivu-col{
    transition: width .2s ease;
  }
 /* .ivu-btn.ivu-btn-text{
    color:$menuFontColor;
  }*/
  .fire-cow{
    height:40px;
    width:100%;
  }
</style>
