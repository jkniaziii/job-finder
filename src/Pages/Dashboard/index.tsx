import React from 'react';
import { Dropdown, MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import style from './styles.module.scss'
import { Link, Outlet } from 'react-router-dom';
const { Header, Content, Sider } = Layout;


const items2: MenuProps['items'] = [{name:'New Jobs', link: '/dashboard/new-jobs'}, {name: 'Applied Jobs', link: '/dashboard/applied-jobs'}].map(
  (item, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      label: (<Link to={item.link}>{item.name}</Link>),  
    };
  },
);

const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link to='/profile'>
          My Profile
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link to='/pricing'>
          Pricing
        </Link>
      ),
    },
    {
      key: '3',
      label: (
        <Link to=''>
          Logout
        </Link>
      ),
    },
  ];

  
const Dashboard: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className={style.container}>
      <Header className={style.header}>
      <Link to='/dashboard'>
       <h1>JOB FINDER</h1>
      </Link>
       <div>
       <Dropdown menu={{ items }} placement="bottomLeft">
       <div>
       <img src='/images/profile.jpg' />
       </div>
      </Dropdown>
        
       </div>
      </Header>
      <Layout>
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
            className={style.menu}
          />
        </Sider>
        <Layout style={{ padding: '24px' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
           <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;