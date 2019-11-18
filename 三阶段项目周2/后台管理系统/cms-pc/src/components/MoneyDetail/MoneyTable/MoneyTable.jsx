import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
    render: text => <span>{text}</span>,
  },
  {
    title: '金额',
    dataIndex: 'sumofmoney',
    key: 'sumofmoney',
  },
  {
    title: '收据号/订单号',
    dataIndex: 'receipt',
    key: 'receipt',
  },
  {
    title: '收据编号',
    dataIndex: 'receiptid',
    key: 'receiptid',
  },
  {
    title: '入账地点',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '操作人',
    dataIndex: 'operator',
    key: 'operator',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '添加时间',
    key: 'addtime',
    dataIndex: 'addtime',
  },
  {
    title: '操作',
    key: 'handle',
    dataIndex: 'handle',
  }
];

const data = [
  {
    key: '1',
    title: '方丈 学费',
    sumofmoney:'20790',
    receipt:'',
    receiptid:'',
    type:'无羁贷款',
    address: '云深不知处',
    operator:'夷陵老祖',
    status:'审核成功',
    addtime:'2019-1-20 14:23:54',
    handle:''
  },
  {
    key: '2',
    title: '方丈 占座费',
    sumofmoney:'200',
    receipt:'',
    receiptid:'',
    type:'魔道可爱多',
    address: '云深不知处',
    operator:'含光君',
    status:'审核成功',
    addtime:'2019-8-20 14:23:54',
    handle:''
  }
];

export default class MoneyTable extends React.Component{
    render(){
        return(
            <Table columns={columns} dataSource={data} />
        )
    }
}
