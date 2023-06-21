'use client'
import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import Link from 'next/link';

import Home from '../app/home/page'
import Management from '../app/management/page'
import Settings from '../app/settings/page'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const menuItems = [
  {
    key: '1',
    icon: <UserOutlined />,
    text: 'Dashboard',
    link: '/',
    component: <Home />,
  },
  {
    key: '2',
    icon: <VideoCameraOutlined />,
    text: 'Post Management',
    link: '/management',
    component: <Management />,
  },
  {
    key: '3',
    icon: <VideoCameraOutlined />,
    text: 'Settings',
    link: '/settings',
    component: <Settings />,
  },
  
 
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('1');

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuClick = (menuKey) => {
    setSelectedMenu(menuKey);
  };

  const renderMenuItems = (items) => {
    return items.map((item) => {
      if (item.subMenuItems) {
        return (
          <Menu.SubMenu key={item.key} icon={item.icon} title={item.text}>
            {renderMenuItems(item.subMenuItems)}
          </Menu.SubMenu>
        );
      }
      return (
        <Menu.Item key={item.key} icon={item.icon}>
          <Link href={item.link}>{item.text}</Link>
        </Menu.Item>
      );
    });
  };

  const renderContent = () => {
    const selectedItem = menuItems.find((item) => item.key === selectedMenu);
    return selectedItem ? selectedItem.component : null;
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed} >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} 
        onClick={({ key }) => handleMenuClick(key)} style={{marginTop:'67px'}}>
          {renderMenuItems(menuItems)}
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '30px 16px',
            padding: 20,
            overflow: 'auto',
            background: colorBgContainer,
          }}
        >
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
