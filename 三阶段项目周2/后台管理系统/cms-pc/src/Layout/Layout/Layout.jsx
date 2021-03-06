import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React from 'react';
import {
    BrowserRouter as R,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Complaint from '../../components/Complaint/Complaint';
import Problem from '../../components/Problem/Problem';
import Itemupload from '../../components/Itemupload/Itemupload';
import Stuvip from '../../components/Stuvip/Stuvip';
import WeeklyTable from '../../components/Weekly/Weekly';
import Index from '../../components/Index/Index';
import MoneyDetail from '../../components/MoneyDetail/MoneyDetail';
import Evaluate from '../../components/Evaluate/Evaluate';
import Inquiry from '../../components/Inquiry/Inquiry';
import Leave from '../../components/Leave/Leave';
import Discipline from '../../components/Discipline/Discipline';
import Exam from '../../components/Exam/Exam';
import Administrators from '../../components/Administrators/Administrators';
import ModifyData from '../../components/Index/MidofyData/ModifyData'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Acontent = () => {
    return (
        <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="user" />
                                学员后台
</span>
                        }
                    >
                        <Menu.Item key="1"><Link to="/nav1/Complaint">匿名投诉</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/nav1/Problem">技术问题</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/nav1/Itemupload">项目上传</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/nav1/Stuvip">VIP</Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/nav1/WeeklyTable">学员周报</Link></Menu.Item>
                        <Menu.Item key="6"><Link to="/nav1/Index">我的资料</Link></Menu.Item>
                        <Menu.Item key="7"><Link to="/nav1/MoneyDetail">交费明细</Link></Menu.Item>
                        <Menu.Item key="8"><Link to="/nav1/Exam">参加考试</Link></Menu.Item>
                        <Menu.Item key="9"><Link to="/nav1/Evaluate">学员评价</Link></Menu.Item>
                        <Menu.Item key="10"><Link to="/nav1/Inquiry">教学测评</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <Icon type="laptop" />
                                学员考勤
</span>
                        }
                    >
                        <Menu.Item key="11"><Link to="/nav1/Leave">请假情况</Link></Menu.Item>
                        <Menu.Item key="12"><Link to="/nav1/Discipline">违纪情况</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>学员个人中心</Breadcrumb.Item>
                    <Breadcrumb.Item>学员后台</Breadcrumb.Item>
                    <Breadcrumb.Item>我的资料</Breadcrumb.Item>
                </Breadcrumb>

                <Content
                    style={{
                        background: '#fff',
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    <Switch>
                        <Route path='/nav1/Complaint'>
                            <Complaint />
                        </Route>
                        <Route path='/nav1/Problem'>
                            <Problem />
                        </Route>
                        <Route path='/nav1/Itemupload'>
                            <Itemupload />
                        </Route>
                        <Route path='/nav1/Stuvip'>
                            <Stuvip />
                        </Route>
                        <Route path='/nav1/WeeklyTable'>
                            <WeeklyTable />
                        </Route>
                        <Route path='/nav1/Index'>
                            <Index />
                        </Route>
                        <Route path='/nav1/MoneyDetail'>
                            <MoneyDetail />
                        </Route>
                        <Route path='/nav1/Exam'>
                            <Exam />
                        </Route>
                        <Route path='/nav1/Evaluate'>
                            <Evaluate />
                        </Route>
                        <Route path='/nav1/Inquiry'>
                            <Inquiry />
                        </Route>
                        <Route path='/nav1/Leave'>
                            <Leave />
                        </Route>
                        <Route path='/nav1/Discipline'>
                            <Discipline />
                        </Route>
                        <Route path='/nav1/ModifyData'>
                            <ModifyData />
                        </Route>
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    )
}
export default class ALayout extends React.Component {
    render() {
        return (
            <R>
                <Layout>
                    <Header className="header">
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1"><Link to="/nav1">学员个人中心</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/nav2">教务系统</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/nav3">学院简介</Link></Menu.Item>
                            
                        </Menu>
                        <Administrators />
                    </Header>
                    <Switch>
                        <R path='/nav1'>
                            <Acontent />
                        </R>
                        <R path='/nav2'>
                            <div>模块2</div>
                        </R>
                        <R path='/nav3'>
                            <div>模块3</div>
                        </R>
                    </Switch>
                </Layout>
            </R>
        )
    }
}