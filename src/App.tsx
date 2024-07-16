import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Dashboard from './components/Dashboard';
import Table from './components/Home';
import Sidebar from './components/Sidebar';
import './App.css';
import { Footer } from 'antd/es/layout/layout';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
          <Content style={{ margin: '16px' }}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/table" element={<Table />} />
            </Routes>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Copyright © Monitoreo De Residuos Sudamericano 2024</Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
