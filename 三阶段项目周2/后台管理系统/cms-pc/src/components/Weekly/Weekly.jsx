import React from 'react';
import { Input } from 'antd';
import WeeklyTable from '../WeeklyTable/WeeklyTable';

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
                    <div className="test-title">
                        <span>周报标题：</span>
                        <input className="title" type="text" placeholder="请填写周报标题"/>
                    </div>
                    <div className="problem-ques">
                        <span>周报内容：</span>
                        <TextArea rows={4} placeholder="请输入周报理由" className="problem_text" />
                    </div>
                    <div className="button_comp">
                        <div className="button_comp_l">
                            <span className="iconfont icon-dagou"></span>
                            添加
                    </div>
                        <div className="button_comp_r">
                            <span className="iconfont icon-fanhui"></span>
                            返回
                    </div>
                    </div>
                </div>
                <div className="weekly_buttom">
                   <WeeklyTable />
                </div>
            </div>
        )
    }
}