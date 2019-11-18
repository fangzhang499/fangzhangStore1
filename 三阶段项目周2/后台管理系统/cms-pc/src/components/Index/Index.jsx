import React from 'react';
import Meimg from '../../assets/me.jpg';
import IndexTable from './IndexTable/IndexTable';
import IndexBottomList from './IndexBottomList/IndexBottomList';
import { Link } from 'react-router-dom'

export default class Index extends React.Component {
   
    render() {
        return (
            <div className="index_content">
                <div className="index_content_top">
                    <Link to='/nav1/ModifyData' className="gotomodify">
                        修改
                    </Link>
                </div>
                <div className="Index_content_middle">
                    <div className="index_content_l">
                        <div className="stu_img">
                            <img src={Meimg} alt="" />
                        </div>
                        <p>
                            <span className="triangle-left"></span>
                            <span style={{
                                color: '#b0d877',
                                marginRight: 10
                            }} className="iconfont icon-hua1"></span>
                            <span>方丈</span>
                            <i>(</i>
                            <span>女</span>
                            <i>)</i>
                            <span className="triangle-right"></span>
                        </p>
                    </div>
                    <div className="index_content_r">
                        <IndexTable />
                    </div>
                </div>
                <IndexBottomList />
            </div>
        )
    }
}