import React from 'react';
import img from '../../assets/me.jpg'
export default class Administrators extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showstatus: false
        }
    }
    
    render() {
        return (
            <div className="Administrators_content">
                <div className="adImg">
                    <img src={img} alt="" />
                </div>
                <div className="name">
                    <p>
                        <span onClick={this.test}>方丈</span>
                        <span className="iconfont icon-xiala" onClick={this.operate.bind(this)}></span>
                    </p>
                    <div className="oprate" style={
                        {
                            display: this.state.showstatus ? 'block' : 'none'
                        }
                    }>
                        <p>个人中心</p>
                        <p>退出</p>
                    </div>
                </div>
            </div>
        )
    }
    operate() {
        console.log(111)
        this.setState({
            showstatus: !this.showstatus
        })
    }
    test(){
        console.log('我就做个测试而已')
    }

}