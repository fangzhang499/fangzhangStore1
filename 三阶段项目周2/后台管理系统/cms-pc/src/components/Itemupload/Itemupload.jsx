import React from 'react';
export default class Itemupload extends React.Component {
    render() {
        return (
            <div className="itemupload_content">
                <div className="itemupload_content_top">
                    <span style={{
                        color: 'red'
                    }}>项目文件：</span>
                    <button>选择文件</button>
                    <span>未选择任何文件</span>
                    <span className="tips">注：请上传格式为【zip,rar】的压缩包,上传大小不得超过10M！</span>
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