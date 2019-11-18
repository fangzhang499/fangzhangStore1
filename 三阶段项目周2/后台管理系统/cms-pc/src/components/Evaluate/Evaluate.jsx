import React from 'react';
import { Table } from 'antd';

const columns = [
    {
        title: '测评开始时间',
        dataIndex: 'title',
        key: 'title',
        render: text => <span>{text}</span>,
    },
    {
        title: '测评结束时间',
        dataIndex: 'sumofmoney',
        key: 'sumofmoney',
    },
    {
        title: '评价对象',
        dataIndex: 'receipt',
        key: 'receipt',
    },
    {
        title: '讲师',
        dataIndex: 'receiptid',
        key: 'receiptid',
    },
    {
        title: '班主任',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '就业老师',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: '操作',
        dataIndex: 'operator',
        key: 'operator',
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
    },
];

export default class Evalute extends React.Component {
    render() {
        return (
            <div className="Evalute_content">
                <div className="tips">
                    <span className="iconfont icon-dagou"></span>
                    <span> 您的满意是对我们最好的评价，您的批评是给我们最大的改进动力，欢迎同学对千锋提出宝贵的批评和建议。</span>
                </div>
                <Table columns={columns} dataSource={data} />
            </div>

        )
    }
}
