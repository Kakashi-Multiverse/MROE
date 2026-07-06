/**
 * Header Component
 * 
 * Component that displays page title and main control buttons
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Title to display in header
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
          <button className="btn btn-refresh" title="Refresh data">
            🔄 Refresh
          </button>
          <button className="btn btn-settings" title="Settings">
            ⚙️ Settings
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;