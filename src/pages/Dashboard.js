/**
 * Dashboard Page Component
 * 
 * Trang chính hiển thị tổng quan và quản lý tài nguyên
 * Gồm các widget thống kê, biểu đồ, và điều khiển chính
 * 
 * @param {Object} props - Props của component
 * @param {Array} props.resources - Danh sách tài nguyên
 * @param {string} props.activeTab - Tab hiện tại được chọn
 * @returns {JSX.Element} Dashboard UI
 */

import React from 'react';
import '../styles/Dashboard.css';

const Dashboard = ({ resources, activeTab }) => {
  /**
   * Hiển thị nội dung dựa trên tab hiện tại
   */
  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="dashboard-section">
            <h2>Tổng quan hệ thống</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value">42</div>
                <div className="stat-label">Tài nguyên hoạt động</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">87%</div>
                <div className="stat-label">Hiệu suất trung bình</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">12</div>
                <div className="stat-label">Cảnh báo</div>
              </div>
            </div>
          </div>
        );
      case 'resources':
        return (
          <div className="dashboard-section">
            <h2>Quản lý tài nguyên</h2>
            <table className="resources-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tên</th>
                  <th>Loại</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {resources.length === 0 ? (
                  <tr>
                    <td colSpan="4">Không có tài nguyên nào</td>
                  </tr>
                ) : (
                  resources.map((resource) => (
                    <tr key={resource.id}>
                      <td>{resource.id}</td>
                      <td>{resource.name}</td>
                      <td>{resource.type}</td>
                      <td>{resource.status}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        );
      case 'analytics':
        return (
          <div className="dashboard-section">
            <h2>Phân tích hiệu suất</h2>
            <p>Biểu đồ phân tích sẽ được hiển thị ở đây</p>
          </div>
        );
      case 'settings':
        return (
          <div className="dashboard-section">
            <h2>Cấu hình hệ thống</h2>
            <p>Các tùy chọn cấu hình sẽ được hiển thị ở đây</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      {renderContent()}
    </div>
  );
};

export default Dashboard;