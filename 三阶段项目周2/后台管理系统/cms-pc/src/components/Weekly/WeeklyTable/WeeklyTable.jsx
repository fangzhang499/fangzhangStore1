import React from 'react';
export default class WeeklyTable extends React.Component {
    render() {
        return (
            <div className="Table">
                <table>
                    <thead>
                        <tr>
                            <th width="3%" >姓名</th>
                            <th width="4%">周报标题</th>
                            <th width="20%">周报内容</th>
                            <th width="3%">周报状况</th>
                            <th width="5%">创建时间</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{}}>
                            <td width="3%">方丈</td>
                            <td width="4%">react</td>
                            <td width="20%">感觉上手不错</td>
                            <td width="3%">
                                <span style={{
                                    color: 'red'
                                }}>未查看</span>
                            </td>
                            <td width="5%">2019-11-17 21:32:23</td>
                        </tr>
                        <tr>
                            <td colSpan="13">
                                <div className="dataTables_paginate paging_bootstrap" style={{
                                    textAlign: 'center'
                                }}>
                                    <ul className="pagination">
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}