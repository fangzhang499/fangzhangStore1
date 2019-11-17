import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;
export default class Stuvip extends React.Component {
    render() {
        return (
            <div className="stuvip_content">
                <h3>您还不是VIP学员，填写下面表单可以申请VIP学员！</h3>
                <div className="stuvip_bottom">
                    <div className="test-name">
                        <span>学员姓名：</span>
                        <span className="name">方丈</span>
                    </div>
                    <div className="problem-ques">
                        <span>申请理由：</span>
                        <TextArea rows={4} placeholder="请输入申请理由" className="problem_text" />
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
            </div>
        )
    }
}