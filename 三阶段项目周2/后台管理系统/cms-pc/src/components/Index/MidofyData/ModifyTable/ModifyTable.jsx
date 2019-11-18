import React from 'react';
export default class ModifyTable extends React.Component {
    render() {
        return (
            <div>
                <div className="table_top">
                    <p>
                        <span>学员姓名：</span>
                        <span className="stop_oprate">方丈</span>
                        <span style={{
                            color: 'red',
                            marginLeft:100
                        }}>性别：</span>
                        <select>
                            <option value="女">女</option>
                            <option value="男">男</option>
                        </select>
                    </p>
                    <p>
                        <span>手机号码：</span>
                        <input type="text" value="1000111"/>
                    </p>
                    <p>
                        <span>QQ：</span>
                        <span>290290920</span>
                    </p>
                    <p>
                        <span>身份证号码：</span>
                        <span>4783469863821643982</span>
                    </p>
                </div>
                <div className="table_bottom">
                    <ul>
                        <li>
                            <span>学校省份：</span>
                            <select>
                                <option value="省份">广西壮族自治区</option>
                            </select>
                        </li>
                        <li>
                            <span>大学名称：</span>
                            <select>
                                <option value="学校">广西民族师范学院</option>
                            </select>
                        </li>
                        <li>
                            <span>学院专业：</span>
                             <input type="text" value="347923"/>
                        </li>
                        <li>
                            <span>在校状态：</span>
                            <select>
                                <option value="状态">非应届</option>
                            </select>
                        </li>
                        <li>
                            <span>学历：</span>
                            <select>
                                <option value="学历">本科</option>
                            </select>
                        </li>
                        <li>
                            <span>专业类型：</span>
                            <select>
                                <option value="专业">非计算机专业</option>
                            </select>
                        </li>
                        <li>
                            <span>开发经验：</span>
                            <select>
                                <option value="有无">无</option>
                            </select>
                        </li>
                        <li>
                            <span>使用电脑：</span>
                            <select>
                                <option value="个人">个人携带</option>
                            </select>
                        </li>
                        <li>
                            <span>学员所在省份：</span>
                            <select>
                                <option value="广东">广东省</option>
                            </select>
                        </li>
                        <li>
                            <span>所在城市：</span>
                            <select>
                                <option value="广州">广州市</option>
                            </select>
                        </li>
                        <li>
                            <span>所在区县：</span>
                            <select>
                                <option value="天河">天河区</option>
                            </select>
                        </li>
                        <li>
                            <span>紧急联系人：</span>
                            <input type="text" value="金大小姐"/>
                        </li>
                        <li>
                            <span>关系：</span>
                            <input type="text" value="没关系"/>
                        </li>
                        <li>
                            <span>联系电话：</span>
                            <input type="text" value="11891081982"/>
                        </li>
                        <li>
                            <span>住宿详情：</span>
                            <input type="text" placeholder="请填写当前住宿的详细地址"/>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}