import React from 'react';
import { Input} from 'antd';

const { TextArea } = Input;
export default class Problem extends React.Component{
    render(){
        return (
            <div className="problem_content">
                <div className="test-name">
                    <span>学员姓名：</span>
                    <span className="name">方丈</span>
                </div>
                <div className="problem-ques"> 
                    <span>问题内容：</span>
                    <TextArea rows={4} placeholder="请输入技术内容" className="problem_text"/>
                </div>
                <div className="button_comp">
                    <div className="button_comp_l">
                        <span className="iconfont icon-dagou"></span>
                        提交
                    </div>
                    <div className="button_comp_r">
                        <span className="iconfont icon-fanhui"></span>
                        返回
                    </div>
                </div>
            </div>
        )
    }
}