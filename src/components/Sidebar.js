/**
 * Sidebar Component
 * 
 * Component that contains main navigation menu
 * Allows users to switch between main sections of the application
 * 
 * @param {Object} props - Component props
 * @param {string} props.activeTab - Currently selected tab
 * @param {Function} props.setActiveTab - Function to change current tab
 * @returns {JSX.Element} Sidebar UI
 */

import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'overview', label: '📊 Overview', icon: '📊' },
    { id: 'resources', label: '⚙️ Resources', icon: '⚙️' },
    { id: 'analytics', label: '📈 Analytics', icon: '📈' },
    { id: 'settings', label: '🔧 Settings', icon: '🔧' },
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