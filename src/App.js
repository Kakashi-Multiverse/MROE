/**
 * App Component - Main Application Container
 * 
 * Thành phần chính của ứng dụng MROE Dashboard
 * Quản lý navigation, state chung và layout chính
 */

import React, { useState, useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './styles/App.css';

/**
 * App - Thành phần gốc của ứng dụng
 * 
 * @returns {JSX.Element} Giao diện chính ứng dụng
 */
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [resources, setResources] = useState([]);
  const [activeTab, setActiveTab] = useState('overview');

  /**
   * Tải dữ liệu tài nguyên khi component mount
   */
  useEffect(() => {
    const loadResources = async () => {
      try {
        // Lấy dữ liệu tài nguyên từ API
        setIsLoading(false);
      } catch (error) {
        console.error('Lỗi khi tải tài nguyên:', error);
        setIsLoading(false);
      }
    };

    loadResources();
  }, []);

  return (
    <div className="app-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="app-main">
        <Header title="MROE Dashboard" />
        <main className="app-content">
          {isLoading ? (
            <div className="loading">Đang tải...</div>
          ) : (
            <Dashboard resources={resources} activeTab={activeTab} />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;