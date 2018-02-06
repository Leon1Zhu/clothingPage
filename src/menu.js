/**
 * Created by zhuliang on 2018/1/19.
 */
global.MENU = [
  {
    hasChild: true,
    menuName: '商家管理',
    menuIcon: 'icon-shangjia',
    linkHref: '',
    childMenuList: [
      {
        menuName: '门店管理',
        menuIcon: 'icon-mendianguanli',
        linkHref: '/storeManage',
        needPower:true,
      }, {
        menuName: '店员管理',
        menuIcon: 'icon-kehu',
        linkHref: '/staffManage',
        needPower:true,
      }, {
        menuName: '颜色管理',
        menuIcon: 'icon-yanse',
        linkHref: '/colorManage',
      }
      , {
        menuName: '尺码管理',
        menuIcon: 'icon-3changgouchima',
        linkHref: '/sizeManage',
      }
    ]
  }, {
    hasChild: true,
    menuName: '商品管理',
    menuIcon: 'icon-shangpinguanli01',
    linkHref: '',
    childMenuList: [
      {
        menuName: '商品管理',
        menuIcon: 'icon-gouwudai',
        linkHref: '/goodsManage',
        needPower:true,
      }, {
        menuName: '销售开单',
        menuIcon: 'icon-zonghekaidan',
        linkHref: '/salesOrder',
      }
    ]
  }, {
    hasChild: true,
    menuName: '往来管理',
    menuIcon: 'icon-jiaoyijilu',
    linkHref: '',
    childMenuList: [
      {
        menuName: '客户管理',
        menuIcon: 'icon-kehuguanli',
        linkHref: '/customManage',
      }, {
        menuName: '往来列表',
        menuIcon: 'icon-liebiao',
        linkHref: '/visitorList',
      }, {
        menuName: '订单记录',
        menuIcon: 'icon-06',
        linkHref: '/orderList',
      }
    ]
  }, {
    hasChild: true,
    menuName: '库存管理',
    menuIcon: 'icon-05_kucunguanli',
    linkHref: '',
    childMenuList: [
      {
        menuName: '库存记录',
        menuIcon: 'icon-weibiaoti2010101',
        linkHref: '/repertoryShift',
      }, {
        menuName: '库存管理',
        menuIcon: 'icon-kucun',
        linkHref: '/repertoryRecord',
      }, {
        menuName: '盘点记录',
        menuIcon: 'icon-pandian',
        linkHref: '/storeRecord',
      }, {
        menuName: '清单盘点',
        menuIcon: 'icon-pandian',
        linkHref: '/storeChange',
      }, {
        menuName: '手动盘点',
        menuIcon: 'icon-icon-open',
        linkHref: '/handStore',
      }, {
        menuName: '扫码盘点',
        menuIcon: 'icon-saoma',
        linkHref: '/scanStore',
      }, {
        menuName: '货仓调货',
        menuIcon: 'icon-yunshupeisong',
        linkHref: '/seasoningCondiments',
      }, {
        menuName: '调货记录',
        menuIcon: 'icon-icon-test',
        linkHref: '/seasoningRecord',
      }
    ]
  }, {
    hasChild: true,
    menuName: '系统设置',
    menuIcon: 'icon-msnui-sys-set',
    linkHref: '',
    childMenuList: [
      {
        menuName: '系统设置',
        menuIcon: 'icon-25guanli',
        linkHref: '/systemSetting',
      }
    ]
  }
]
