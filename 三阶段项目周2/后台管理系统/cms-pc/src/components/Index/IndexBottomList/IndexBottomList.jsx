import React from 'react';
export default class IndexBottom extends React.Component {
    render() {
        return (
            <div className="Index_content_bottom">
                <div>
                    <p className="headTitle">[ <span>我的消息</span> ]</p>
                    <div className="myMessage">
                        <p>消息内容</p>
                        <p>时间</p>
                    </div>
                </div>
                <div>
                    <p className="headTitle">[ <span>班主任寄语</span> ]</p>
                    <div className="teacherMessage">
                        <p>评论老师</p>
                        <p>寄语内容</p>
                        <p>时间</p>
                    </div>
                </div>
                <div>
                    <p className="headTitle">[ <span>千峰其他会员开通</span> ]</p>
                    <div className="openVip-tr1">
                        <p>产品名称</p>
                        <p>产品描述</p>
                        <p>开通消息</p>
                    </div>
                    <div className="openVip-tr2">
                        <p>扣丁学堂</p>
                        <p>
                            <span>扣丁学堂大量免费线上视频，不定期更新，为您规划职业路线。</span>
                            <span>
                            官方网站:
                            <a href="###">http://www.codingke.com</a>
                            </span>
                        </p>
                        <p>
                            <span style={{
                                color:'red',
                                marginRight:10
                            }}>您还未开通扣丁学堂</span>
                            <button>立即开通</button>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}