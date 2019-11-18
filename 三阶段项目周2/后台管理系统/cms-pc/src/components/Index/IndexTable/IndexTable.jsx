import React from 'react';
export default class IndexTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '45222699991093242',
            phone:'12376862765',
            qq:'2838232119'
        }
    }
    componentWillMount() {
        let Dogid=this.state.id.replace(/(.{0}).*(.{0})/, "$1*************$2")
        let Dogphone=this.state.phone.replace(/(.{0}).*(.{0})/, "$1*************$2")
        let Dogqq=this.state.qq.replace(/(.{0}).*(.{0})/, "$1*************$2")
        sessionStorage.setItem('DogId',Dogid)
        sessionStorage.setItem('DogPhone',Dogphone)
        sessionStorage.setItem('DogQq',Dogqq)
    }
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <td>身份证号码</td>
                        <td>{sessionStorage.getItem('DogId')}</td>
                    </tr>
                    <tr>
                        <td>手机号</td>
                        <td>{sessionStorage.getItem('DogPhone')}</td>
                    </tr>
                    <tr>
                        <td>QQ</td>
                        <td>{sessionStorage.getItem('DogQq')}</td>
                    </tr>
                    <tr>
                        <td>学号</td>
                        <td>GZ190912016</td>
                    </tr>
                    <tr>
                        <td>毕业学校</td>
                        <td>
                            <span>广西民族师范学院</span>
                            <span style={{
                                marginLeft: 20
                            }}>通信工程</span>
                        </td>
                    </tr>
                    <tr>
                        <td>在校状态</td>
                        <td>非应届</td>
                    </tr>
                    <tr>
                        <td>学历</td>
                        <td>本科</td>
                    </tr>
                    <tr>
                        <td>千峰班级</td>
                        <td>广州HTML5就业班1909期</td>
                    </tr>
                    <tr>
                        <td>招生老师</td>
                        <td>蓝二哥</td>
                    </tr>
                    <tr>
                        <td>报名日期</td>
                        <td>2018-09-22</td>
                    </tr>
                </tbody>
            </table>
        )
    }
} 