import React from 'react';
import Modifytable from './ModifyTable/ModifyTable'
export default class ModifyData extends React.Component {
    render() {
        return (
            <div className="ModifyData_content">
                <div className="modify-top">
                    <h2>编辑个人资料</h2>
                    <p style={{
                        color: 'red'
                    }}>以下资料请确保真实有效，请勿删除或随意填写。</p>
                </div>
                <div className="modify-bottom">
                    <Modifytable />
                </div>
            </div>
        )
    }
}