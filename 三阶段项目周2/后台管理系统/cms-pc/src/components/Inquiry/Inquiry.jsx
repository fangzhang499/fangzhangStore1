import React from 'react';
import { Table } from 'antd';

const columns = [
    {
        title: '开始时间',
        dataIndex: 'title',
        key: 'title',
        render: text => <span>{text}</span>,
    },
    {
        title: '结束时间',
        dataIndex: 'sumofmoney',
        key: 'sumofmoney',
    },
    {
        title: '测评名称',
        dataIndex: 'receipt',
        key: 'receipt',
    },
    {
        title: '讲师',
        dataIndex: 'receiptid',
        key: 'receiptid',
    },
    {
        title: '操作',
        dataIndex: 'operator',
        key: 'operator',
    }
];

const data = [
    // {
    //     key: '1',
    //     title: '',
    //     sumofmoney: '',
    //     receipt: '',
    //     receiptid: '',
    //     type: '',
    //     address: '',
    //     operator: '',
    // },
];

export default class Evalute extends React.Component {
    render() {
        return (
            <div className="Evalute_content">
                <Table columns={columns} dataSource={data} />
            </div>

        )
    }
}
