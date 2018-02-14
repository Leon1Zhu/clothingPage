/**
 * Created by zhuliang on 2018/2/14.
 */
export default{
  columns1: [
    {
      title: '客户姓名',
      key: 'cusName'
    },
    {
      title: '联系方式',
      key: 'cusPhone'
    },
    {
      title: '消费总额',
      key: 'cusTotalMoney'
    },
    {
      title: '当前余额',
      key: 'cusRemainMoney'
    }
  ],

  data1:[
    {
      cusName:'网店王伟',
      cusPhone:'15366515552',
      cusTotalMoney:'1640.0',
      cusRemainMoney:'0.0',
    }
  ],

  columns2: [
    {
      title: '订单数量',
      key: 'cusName'
    },
    {
      title: '购买件数',
      key: 'cusPhone'
    },
    {
      title: '抹零总额',
      key: 'cusTotalMoney'
    },
    {
      title: '核销总额',
      key: 'hxCount'
    },
    {
      title: '消费总额',
      key: 'consumeMonety'
    }
  ],



  data2:[
    {
      cusName:'1',
      cusPhone:'31',
      cusTotalMoney:'9',
      hxCount:'300',
      consumeMonety:'1640',
    }
  ],

  columns10: [
    {
      type: 'expand',
      width: 50,
      render: (h, params) => {
        return h(expandRow, {
          props: {
            row: params.row
          },
          on:{
            returnItem: this.returnGoods
          },
        })
      }
    },
    {
      title: '客户姓名',
      key: 'cusName'
    },
    {
      title: '付款方式',
      key: 'orderPaytype'
    },
    {
      title: '总额',
      key: 'orderMoney',
      sortable: true
    },
    {
      title: '获得积分',
      key: 'orderMoney',
      sortable: true
    },
    {
      title: '交易时间',
      key: 'orderTime',
      sortable: true,
      render: (h, params) => {
        return h('p', {
        },new Date(params.row.orderTime).Format(dateFormatType) );
      }
    },
    {
      title: '备注',
      key: 'orderMemo',
    }
  ],
}
