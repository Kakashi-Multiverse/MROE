/**
 * Header Component
 * 
 * Thành phần header hiển thị tiêu đề trang và các nút điều khiển chính
 * 
 * @param {Object} props - Props của component
 * @param {string} props.title - Tiêu đề hiển thị trên header
 * @returns {JSX.Element} Header UI
 */

import React from 'react';
import '../styles/Header.css';

const Header = ({ title }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">{title}</h1>
        <div className="header-actions">
          <button className="btn btn-refresh" title="Làm mới dữ liệu">
            🔄 Làm mới
          </button>
          <button className="btn btn-settings" title="Cài đặt">
            ⚙️ Cài đặt
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;