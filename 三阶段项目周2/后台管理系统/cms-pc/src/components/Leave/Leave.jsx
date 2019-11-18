import React from 'react';
import { Input } from 'antd';
import LeaveTable from './LeaveTable/LeaveTable'

const { TextArea } = Input;
export default class Weekly extends React.Component{
    render(){
        return (
            <div className="weekly_content">
                <div className="weekly_top">
                    <div className="test-name">
                        <span>学员姓名：</span>
                        <span className="name">方丈</span>
                    </div>
                    <div className="problem-ques">
                        <span>请假理由：</span>
                        <TextArea rows={4} placeholder="请输入请假理由" className="problem_text" />
                    </div>
                    <div className="dataTime">
                        <span>请假时间：</span>
                         <input type="datetime-local" name="" id=""/>
                         ~
                         <input type="datetime-local" name="" id=""/>
                    </div>
                    <div className="button_comp">
                        <div className="button_comp_l">
                            <span className="iconfont icon-dagou"></span>
                            申请
                    </div>
                        <div className="button_comp_r">
                            <span className="iconfont icon-fanhui"></span>
                            返回
                    </div>
                    </div>
                </div>
                <div className="weekly_buttom">
                   <LeaveTable />
                </div>
            </div>
        )
    }
}