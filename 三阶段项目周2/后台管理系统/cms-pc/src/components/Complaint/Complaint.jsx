import React from 'react';
import { Input} from 'antd';

const { TextArea } = Input;

export default class Complaint extends React.Component {
    render() {
        return (
            <div className='Compalint_content'>
                <p style={{
                    color: 'red'
                }}>
                    投诉内容:
                        </p>
                <TextArea rows={14} placeholder="本投诉是匿名投诉，不会暴露您的信息" />
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
            </div >
        )
    };
}
