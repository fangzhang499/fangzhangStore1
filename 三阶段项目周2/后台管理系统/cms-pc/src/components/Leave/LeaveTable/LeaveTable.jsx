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
        title: '请假理由',
        dataIndex: 'sumofmoney',
        key: 'sumofmoney',
    },
    {
        title: '班主任审批',
        dataIndex: 'receipt',
        key: 'receipt',
    },
    {
        title: '讲师审批',
        dataIndex: 'receiptid',
        key: 'receiptid',
    },
    {
        title: '请假时间',
        dataIndex: 'operator',
        key: 'operator',
    },
    {
        title: '创建时间',
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
        addtime:''
    },
];

export default class Evalute extends React.Component {
    render() {
        return (
            <div className="LeaveTable_content">
                <Table columns={columns} dataSource={data} />
            </div>

        )
    }
}
