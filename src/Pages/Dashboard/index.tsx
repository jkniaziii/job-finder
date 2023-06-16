import React, { useState } from 'react';
import { Button, Dropdown, MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import style from './styles.module.scss';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../../Firebase';
import { useDispatch } from 'react-redux';
import { getUsersData } from '../../Store/actions/user';
import HomeComponent from '../../Components/Home';
import { logoutUser } from '../../Api/user';
import { getLocalStorage } from '../../Utills';

const { Header, Content, Sider } = Layout;
const items2: MenuProps['items'] = [{ name: 'New Jobs', link: '/dashboard/new-jobs' },
{ name: 'Applied Jobs', link: '/dashboard/applied-jobs' }].map(
    (item, index) => {
        const key = String(index + 1);
        return {
            key: `sub${key}`,
            label: (<Link className={style.test} to={item.link}>{item.name}</Link>),
        };
    },
);

const Dashboard: React.FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const history = useLocation();
    const isDetail = history.pathname.split('/')[2] ? true : false;
    const [menuKey, setMenuKey] = useState(0);
    console.log({menuKey});
    
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const logoutHandle = async () => {
        const refreshToken = getLocalStorage('refreshToken')
        await logoutUser({refreshToken})
        dispatch(getUsersData(null));
        navigate('/signin');
        await logout();
    }

    const dashboardClick = async () => {
        setMenuKey((prevKey) => prevKey + 1);
    }

    const items: MenuProps['items'] = [
        { key: '1', label: (<Link to='/profile'>My Profile</Link>) },
        { key: '2', label: (<Link to='/pricing'>Pricing</Link>) },
        { key: '3', label: (<Button onClick={logoutHandle}>Logout</Button>) },
    ];
    const itemsMobile: MenuProps['items'] = [
        { key: '1', label: (<Link to='/profile'>My Profile</Link>) },
        { key: '2', label: (<Link to='/pricing'>Pricing</Link>) },
        { key: '3', label: (<Link to='/dashboard/applied-jobs'>Applied Jobs</Link>) },
        { key: '4', label: (<Link to='/dashboard/new-jobs'>New Jobs</Link>) },
        { key: '5', label: (<Button onClick={logoutHandle}>Logout</Button>) },
    ];

    return (
        <Layout className={style.container}>
            <Header className={style.header}>
                <Link onClick={dashboardClick} to='/dashboard'>
                    <div className={style.logo}>JOB FINDER</div>
                </Link>
                <div style={!isDetail ? {borderRadius: '45px 0px 0px 0px'} : {}} className={style.dropdownContainer}>
                    <Dropdown menu={{ items }} placement="bottomLeft">
                        <div>
                            <img src='/images/profile.jpg' />
                        </div>
                    </Dropdown>
                </div>
                <div style={!isDetail ? {borderRadius: '45px 0px 0px 0px'} : {}} className={style.dropdownMobile}>
                    <Dropdown menu={{ items: itemsMobile }} placement="bottomLeft">
                        <div>
                            <img src='/images/menu.svg' />
                        </div>
                    </Dropdown>
                </div>
            </Header>
            <Layout>
                <Sider className={style.aside} style={{height: 'calc(100vh - 64px)'}}>
                    <Menu
                        mode="inline"
                        key={menuKey}
                        defaultSelectedKeys={['0']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        items={items2}
                        className={style.menu}
                    />
                </Sider>
                <Layout>
                    <Content
                        style={{
                            margin: 0,
                            padding: 0,
                            background: colorBgContainer,
                        }}
                    >
                        {!isDetail && <HomeComponent />}
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default Dashboard;