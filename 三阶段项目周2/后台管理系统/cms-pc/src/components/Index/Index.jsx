import React from 'react';
import Meimg from '../../assets/me.jpg'
export default class Index extends React.Component{
    render(){
        return (
            <div className="index_content">
                <div className="index_content_l">
                    <div className="stu_img">
                        <img src={Meimg} alt=""/>
                    </div>
                    <p>
                        <span style={{
                            color: '#b0d877',
                            marginRight:10
                        }} className="iconfont icon-hua1"></span>
                        <span>方丈</span>
                        <i>(</i>
                        <span>女</span>
                        <i>)</i>
                    </p>
                </div>
                <div className="index_content_r">
                    000
                </div>
            </div>
        )
    }
}