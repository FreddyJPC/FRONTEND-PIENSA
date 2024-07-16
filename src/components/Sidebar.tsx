import React from 'react';
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  TableOutlined,
  HomeOutlined, // Add this line to import the HomeOutlined icon
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  return (
    <Sider className="sidebar" width={50}>
      <div className="logo"></div>
      <Menu mode="inline" defaultSelectedKeys={['1']} className="menu">

        <Menu.Item key="2" icon={<HomeOutlined className="icon" />}>
          <Link to="/table">
            <HomeOutlined className="icon" />
          </Link>
        </Menu.Item>

                <Menu.Item key="1" icon={<DashboardOutlined className="icon" />}>
          <Link to="/dashboard">
            <DashboardOutlined className="icon" />
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
