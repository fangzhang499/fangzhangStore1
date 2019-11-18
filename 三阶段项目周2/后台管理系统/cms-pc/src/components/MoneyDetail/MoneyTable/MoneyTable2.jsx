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
    title: '收据号',
    dataIndex: 'receipt',
    key: 'receipt',
  },
  {
    title: '收据编号',
    dataIndex: 'receiptid',
    key: 'receiptid',
  },
  {
    title: '退费地点',
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
    title: '添加时间',
    key: 'addtime',
    dataIndex: 'addtime',
  }
];

const data = [
  {
    key: '1',
    title: '',
    sumofmoney:'',
    receipt:'',
    receiptid:'',
    type:'',
    address: '',
    operator:'',
    addtime:'',
  },
];

export default class MoneyTable extends React.Component{
    render(){
        return(
            <Table columns={columns} dataSource={data} />
        )
    }
}
