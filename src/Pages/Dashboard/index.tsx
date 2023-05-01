import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import style from './styles.module.scss'
import { Link } from 'react-router-dom';
const { Header, Content, Sider } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
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
       <div>JOB FINDER</div>
      
       <div>
       <Dropdown menu={{ items }} placement="bottomLeft">
       <div>
       <img src='./images/profile.jpg' />
       </div>
      </Dropdown>
        
       </div>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;