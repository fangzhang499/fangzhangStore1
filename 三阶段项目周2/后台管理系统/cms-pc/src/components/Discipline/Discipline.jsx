import React from 'react';
import { Table } from 'antd';

const columns = [
    {
        title: '姓名',
        dataIndex: 'title',
        key: 'title',
        render: text => <span>{text}</span>,
    },
    {
        title: '类型',
        dataIndex: 'sumofmoney',
        key: 'sumofmoney',
    },
    {
        title: '扣除（分数）',
        dataIndex: 'receipt',
        key: 'receipt',
    },
    {
        title: '剩余（分数）',
        dataIndex: 'receiptid',
        key: 'receiptid',
    },
    {
        title: '理由',
        dataIndex: 'operator',
        key: 'operator',
    },
    {
        title: '操作人',
        dataIndex: 'operat',
        key: 'operat',
    },
    {
        title: '操作时间',
        dataIndex: 'addtime',
        key: 'addtime',
    }
];

const data = [
    {
        key: '1',
        title: '',
        sumofmoney: '',
        receipt: '',
        receiptid: '',
        type: '',
        address: '',
        operator: '',
        operat:'',
        addtime:''
    },
];

export default class Evalute extends React.Component {
    render() {
        return (
            <div className="Disciline_content">
                <Table columns={columns} dataSource={data} />
            </div>

        )
    }
}
