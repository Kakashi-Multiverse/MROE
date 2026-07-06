/**
 * Sidebar Component
 * 
 * Thành phần sidebar chứa menu điều hướng chính
 * Cho phép người dùng chuyển đổi giữa các phần chính của ứng dụng
 * 
 * @param {Object} props - Props của component
 * @param {string} props.activeTab - Tab hiện tại được chọn
 * @param {Function} props.setActiveTab - Hàm để thay đổi tab hiện tại
 * @returns {JSX.Element} Sidebar UI
 */

import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'overview', label: '📊 Tổng quan', icon: '📊' },
    { id: 'resources', label: '⚙️ Tài nguyên', icon: '⚙️' },
    { id: 'analytics', label: '📈 Phân tích', icon: '📈' },
    { id: 'settings', label: '🔧 Cấu hình', icon: '🔧' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>MROE</h2>
        <p>Resource Optimizer</p>
      </div>
      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`menu-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
            title={item.label}
          >
            <span className="menu-icon">{item.icon}</span>
            <span className="menu-label">{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="sidebar-footer">
        <p>v1.0.0</p>
      </div>
    </aside>
  );
};

export default Sidebar;