/**
 * Created by zhuliang on 2018/1/19.
 */
global.MENU=[
  {
    hasChild : true,
    menuName: '商家管理',
    menuIcon: 'icon-shangjia',
    linkHref: '',
    childMenuList:[
      {
        menuName: '门店管理',
        menuIcon: 'icon-mendianguanli',
        linkHref: '/storeManage',
      },{
        menuName: '店员管理',
        menuIcon: 'icon-kehu',
        linkHref: '/staffManage',
      },{
        menuName: '颜色管理',
        menuIcon: '',
        linkHref: '',
      },{
        menuName: '尺码管理',
        menuIcon: '',
        linkHref: '/colorSizeManage',
      }
    ]
  },{
    hasChild : true,
    menuName: '商品管理',
    menuIcon: 'icon-shangpinguanli01',
    linkHref: '',
    childMenuList:[
      {
        menuName: '商品管理',
        menuIcon: 'icon-gouwudai',
        linkHref: '',
      },{
        menuName: '商品状态设置',
        menuIcon: '',
        linkHref: '',
      },{
        menuName: '销售开单',
        menuIcon: 'icon-zonghekaidan',
        linkHref: '/salesOrder',
      },{
        menuName: '退换入库',
        menuIcon: 'icon-tuihuochuli',
        linkHref: '/salesReturn',
      }
    ]
  },{
    hasChild : true,
    menuName: '往来管理',
    menuIcon: 'icon-jiaoyijilu',
    linkHref: '',
    childMenuList:[
      {
        menuName: '客户管理',
        menuIcon: 'icon-kehuguanli',
        linkHref: '/customManage',
      },{
        menuName: '往来详细',
        menuIcon: '',
        linkHref: '',
      }
    ]
  },{
    hasChild : true,
    menuName: '库存管理',
    menuIcon: 'icon-05_kucunguanli',
    linkHref: '',
    childMenuList:[
      {
        menuName: '库存列表',
        menuIcon: '',
        linkHref: '',
      },{
        menuName: '库存管理',
        menuIcon: '',
        linkHref: '/repertoryRecord',
      },{
        menuName: '货仓调货',
        menuIcon: '',
        linkHref: '',
      }
    ]
  },{
    hasChild : true,
    menuName: '系统设置',
    menuIcon: 'icon-msnui-sys-set',
    linkHref: '',
    childMenuList:[
      {
        menuName: '订单记录',
        menuIcon: '',
        linkHref: '',
      },{
        menuName: '系统设置',
        menuIcon: '',
        linkHref: '/systemSetting',
      }
    ]
  }
]
