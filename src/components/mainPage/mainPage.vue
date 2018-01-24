<template>
  <div  id="mainpage"  class="mainLayout" :class="{'layout-hide-text': spanLeft < 5}">
  <Row type="flex">
    <Col :span="spanLeft" class="layout-menu-left">
    <Menu   themem="dark" width="auto" :accordion="accordion" >
      <div class="layout-logo-left">
        <img class="fire-cow" src="../../assets/logo.png">
      </div>
      <div class="big-menu" v-show="spanLeft === spanleftValue">
        <div class="fire-cow-menu" v-for="(menuItem,index) in menu">
          <Submenu :name="index" v-if="menuItem.hasChild" >
            <template slot="title">
              <i  v-if="!ISNULL(menuItem.menuIcon)" class="iconfont " :class=" menuItem.menuIcon"></i>
              {{menuItem.menuName}}
            </template>
            <MenuItem   v-for="(childrenItem,indexChildrenT) in menuItem.childMenuList" :name="index+'-'+indexChildrenT" @click.native="goPage(childrenItem.linkHref)" >
              <i  v-if="!ISNULL(menuItem.menuIcon)" class="iconfont " :class=" childrenItem.menuIcon"></i>
              <span >{{childrenItem.menuName}}</span>
            </MenuItem>
          </Submenu>
          <MenuItem :name="index" v-else>
            <i  v-if="!ISNULL(menuItem.menuIcon)" class="iconfont " :class=" menuItem.menuIcon"></i>
            <span>{{menuItem.menuName}}</span>
          </MenuItem>
        </div>
      </div>

      <div class="small-menu" v-show="spanLeft === spanLeftSmallValue">
        <Dropdown  v-for="(menuItem,index) in menu" placement="right">
          <div >
            <i  v-if="!ISNULL(menuItem.menuIcon)" class="iconfont " :class=" menuItem.menuIcon"></i>
          </div>
          <DropdownMenu slot="list">
            <DropdownItem  v-for="(childrenItem,indexChildrenT) in menuItem.childMenuList" @click.native="goPage(childrenItem.linkHref)" >
              <i  v-if="!ISNULL(childrenItem.menuIcon)" class="iconfont " :class=" childrenItem.menuIcon"></i>
              <span>{{childrenItem.menuName}}</span>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

    </Menu>
    </Col>
    <Col :span="spanRight">
    <div class="layout-header">
      <Button type="text" @click="toggleClick">
        <Icon type="navicon" size="32"></Icon>
      </Button>
    </div>
    <div class="menu-list-content">
      <Tag v-for="(item,index) in menuList" :class="{ activeTag : item.isActive }" @on-close="closePage(index)"  @click.native="changePgae(index,item.link)" type="dot" :closable="index > 0 "  checkable>{{item.name}}</Tag>
    </div>

    <div class="layout-content">
      <div class="layout-content-main">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive" >
            <!-- 这里是会被缓存的视图组件！ -->
          </router-view>
        </keep-alive>

        <router-view v-if="!$route.meta.keepAlive"  >
          <!-- 这里是不被缓存的视图组件 -->
        </router-view>
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
          spanLeftSmallValue:2,
          spanRightBigValue:22,
          spanleftValue:4,
          spanRightValue: 20,
          spanLeft: 4,
          spanRight: 20,
          accordion:true,
          menu:MENU,
        }
      },
      computed: {
        iconSize () {
          return this.spanLeft === this.spanleftValue ? 14 : 24;
        },
        menuList(){
            return this.$store.getters.getMenuList;
        }
      },
      mounted(){
          for(let item in this.$store.getters.getMenuList){
              if(this.$store.getters.getMenuList[item].isActive){
                this.$router.push({ path:this.$store.getters.getMenuList[this.$store.getters.getMenuList.length-1].link })
                break;
              }
          }

      },
      methods: {
        toggleClick () {
          if (this.spanLeft === this.spanleftValue) {
            this.spanLeft = this.spanLeftSmallValue;
            this.spanRight = this.spanRightBigValue;
          } else {
            this.spanLeft = this.spanleftValue;
            this.spanRight = this.spanRightValue;
          }
        },
        ISNULL : ISNULL,
        goPage(path){
          if(this.$store.getters.getMenuList.length>8){
            this.$warning('操作错误', '标签页最多存在8个，请关闭之前的标签页再重复此操作！');
            return;
          }
          this.$router.push({ path:path })
        },
        changePgae(index,path){
            this.$store.commit('changeActivePage',index)
            this.$router.push({ path:path })
        },
        closePage(index){
            let flag = false;
            if(this.$store.getters.getMenuList[index].isActive){
                flag = true
            }
            this.$store.dispatch('deletePageAction',index)
            if(flag){
              let length = this.$store.getters.getMenuList.length
              let activelink = this.$store.getters.getMenuList[length-1].link
              this.$router.push({ path:activelink })
            }


        }
      }
    }
</script>

<style lang="scss" rel="stylesheet/scss" >
  @import '../../common/css/globalscss.scss';
    .mainLayout{
      border: 1px solid #d7dde4;
      background: #f5f7f9;
      position: relative;
      border-radius: 4px;
      overflow: hidden;
      height:100%;
      .menu-list-content{
        margin-top:2px;
      }
      .ivu-col-span-2{
        width:60px;
      }
      .ivu-col-span-22{
        width:calc(100% - 60px);
      }
      .ivu-row-flex{
        height:100%;
      }
      .layout-content{
        min-height: 200px;
        height: calc(100% - 92px );
        margin: 2px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
      }
      .layout-content-main{
        width:96%;
        margin-left:2%;
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
      .ivu-btn.ivu-btn-text:hover{
        color:$menuSelectFontColor;
      }
      .fire-cow{
        height:40px;
        width:100%;
      }
      .small-menu{
        display: block;
        .ivu-dropdown{
          display: block;
          text-align: center;
          padding:10px 0px;
          .iconfont{
            font-size:20px;
          }
        }
        .ivu-dropdown:hover{
          cursor: pointer;
          background: $menuHoverBackgroundColor;
          color: $menuSelectFontColor;
        }
      }
      .activeTag .ivu-tag-dot-inner{
        background: $menuSelectFontColor;
      }
    }

</style>
