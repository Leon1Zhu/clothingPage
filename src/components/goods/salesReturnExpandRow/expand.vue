<template>
  <div class="good-table-expand">
   <!-- <Table class="my-table" :show-header="!showHeader"  :columns="columns1" :data="data1"></Table>-->
    <Card  v-for="item in data1" @click.native="returnItem(item)">
      <div class="good-card">
        <div class="left-content">
            <img class="good-img" :src="item.img">
        </div>
        <div class="center-content">
            <div class="top-content">
              <div>商品货号:{{item.id}}</div>
              <div>商品名称:{{item.name}}</div>
            </div>
            <div class="bottom-content">
              <div class="center-color-size">
              <color-content :colorName="item.color" :color="item.colorName"></color-content>

              <div class="size-content">
                {{item.size}}
              </div>
              </div>
            </div>
        </div>
        <div class="right-content">
          <div class="top-content">
             <p class="prince-content">{{'+'+item.prince}}</p>
          </div>
          <div classs="right-center-content">
            <p class="count-content">{{'x'+item.count}}</p>
          </div>
          <div class="bottom-content">
              <p class="returnCount">{{item.returnCount > 0 ? '-'+item.returnCount : ''}}</p>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import colorContent from '../../../common/vue/colorContent.vue'
    export default{
        props: {
          row: Object
        },
        data(){
            return {
              showHeader:false,
              /*columns1: [
                {
                  align:'center',
                  title: '图片',
                  key: 'img',
                  render: (h, params) => {
                    return h('img', {
                      style: {
                        maxWidth: '80px',
                        maxHeight:'80px'

                      },
                      domProps: {
                         src: params.row.img
                      },
                  });
                  }
                },{
                  title: '货号',
                  key: 'id'
                },{
                  title: '颜色',
                  key: 'color',
                  render: (h, params) => {
                    return h('div', [
                      h('div', {
                        style: {
                          background: params.row.colorName,
                          height:'1em',
                          width:'1em',
                          display:'inline-block',
                        },
                      }, ''),
                      h('div',{
                        style: {
                          color: params.row.colorName,
                          display:'inline-block',
                          position: 'relative',
                          top: '-2px',
                          marginLeft: '5px',
                        },
                      },params.row.color)
                    ]);
                  }

                },{
                  title: '尺码',
                  key: 'size'
                },{
                  title: '单价',
                  key: 'prince'
                },{
                  title: '数量',
                  key: 'count',
                  render: (h, params) => {
                    return h('div', [
                      h('p', {
                        style: {
                          color: '#c1c2c3'
                        },
                      }, 'x'+params.row.count),
                      h('p',{
                        style: {
                          color: '#fc934f'
                        },
                      },parseInt(params.row.returnCount,10) > 0 ? '-'+params.row.returnCount : '')
                    ]);
                  }
                },
              ],*/
              data1:[
                {
                  img:'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
                  id:'892726252525/0905',
                  color:'浅蓝色',
                  colorName:'#65cefa',
                  size:'L',
                  prince:152.00,
                  count:10000,
                  returnCount:1,
                  name:'01016下口袋'
                },
                {
                  img:'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
                  id:'892726252525/0905',
                  color:'浅绿色',
                  colorName:'#5ac79d',
                  size:'L',
                  prince:152.00,
                  count:10,
                  returnCount:1,
                  name:'01016下口袋'
                },
                {
                  img:'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
                  id:'892726252525/0905',
                  color:'黑色',
                  colorName:'black',
                  size:'均码',
                  prince:152.00,
                  count:10,
                  returnCount:1,
                  name:'01016下口袋'
                },
                {
                  img:'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
                  id:'892726252525/0905',
                  color:'黑色',
                  colorName:'black',
                  size:'均码',
                  prince:152.00,
                  count:10,
                  returnCount:1,
                  name:'01016下口袋'
                },
                {
                  img:'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
                  id:'892726252525/0905',
                  color:'黑色',
                  colorName:'black',
                  size:'均码',
                  prince:152.00,
                  count:10,
                  returnCount:1,
                  name:'01016下口袋'
                },
                {
                  img:'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
                  id:'892726252525/0905',
                  color:'黑色',
                  colorName:'black',
                  size:'均码',
                  prince:152.00,
                  count:10,
                  returnCount:1,
                  name:'01016下口袋'
                },
                {
                  img:'https://img.alicdn.com/bao/uploaded/i2/1811379809/TB1qpkvlh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg_430x430q90.jpg',
                  id:'892726252525/0905',
                  color:'黑色',
                  colorName:'black',
                  size:'均码',
                  prince:152.00,
                  count:10,
                  returnCount:1,
                  name:'01016下口袋'
                }
              ]
            }
        },
        components: {
            'color-content':colorContent
        },
        created(){
        },
        mounted(){
        },
        methods: {
          returnItem(item){
              this.$emit('returnItem',item)
          }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../../common/css/globalscss";
  .good-table-expand{
    margin-left:-1%;
    display: flex;
    width:100%;
    position: relative;
    flex-wrap: wrap;
    .expand-row{
      margin-bottom: 16px;

    }
    .ivu-card{
      overflow: hidden;
      margin-top:1%;
      max-width:100%;
      flex:1 1 100%;
      position: relative;
    }
    .good-card{
      position: relative;
      display: flex;
      .left-content,.center-content{
        flex:1 1 48%;
      }
      .right-content{
        flex:1 1 20%;
      }
      .good-img{
        width:85px;
        height:85px;
      }
      .center-content{
        font-size:14px;
        .top-content {
          line-height:1.6;
          div{
            word-break: keep-all;
          }
        }
        .bottom-content{
          display: flex;
          .center-color-size{
            display: flex;
            margin:0 auto;
          }
          .size-content{
            width: 65px;
            height:25px;
            padding: 3px;
            border: 1px solid $menuSelectFontColor;
            font-size:12px;
            margin-top:3px;
            border-radius:3px;
            margin-left:2px;
            background: $menuSelectFontColor;
            color: #fff;
            text-align: center;
          }
        }
      }
      .center-content,.right-content{
        line-height:140%;
      }
      .right-content{
        font-size:16px;
        text-align: right;
        .count-content{
          color: #c1c2c3;
        }
        .returnCount{
          color: #ff7300;
        }
      }
    }








    @media (min-width: 820px) {
        .ivu-card {
          flex:1 1 49%;
          max-width:49%;
          margin-left:1%;
          position: relative;
        }
    }

    @media (min-width: 1360px) {
      .ivu-card {
        position: relative;
        flex:1 1 32%;
        max-width:32%;
        margin-left:1%;
      }
    }


    @media (min-width: 1920px) {
      .ivu-card {
        position: relative;
        flex:1 1 24%;
        max-width:24%;
        margin-left:1%;
      }
    }

    @media (min-width: 2560px) {
      .ivu-card {
        position: relative;
        flex:1 1 19%;
        max-width:19%;
        margin-left:1%;
      }
    }
    @media (min-width: 3440px) {
      .ivu-card {
        position: relative;
        flex:1 1 15.5%;
        max-width:15.5%;
        margin-left:1%;
      }
    }






  }




</style>
