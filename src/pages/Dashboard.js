/**
 * Dashboard Page Component
 * 
 * Main page displaying system overview and resource management
 * Contains statistics widgets, charts, and main controls
 * 
 * @param {Object} props - Component props
 * @param {Array} props.resources - List of resources
 * @param {string} props.activeTab - Currently selected tab
 * @returns {JSX.Element} Dashboard UI
 */

import React from 'react';
import '../styles/Dashboard.css';

const Dashboard = ({ resources, activeTab }) => {
  /**
   * Render content based on currently selected tab
   */
  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="dashboard-section">
            <h2>System Overview</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value">42</div>
                <div className="stat-label">Active Resources</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">87%</div>
                <div className="stat-label">Average Performance</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">12</div>
                <div className="stat-label">Alerts</div>
              </div>
            </div>
          </div>
        );
      case 'resources':
        return (
          <div className="dashboard-section">
            <h2>Resource Management</h2>
            <table className="resources-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {resources.length === 0 ? (
                  <tr>
                    <td colSpan="4">No resources available</td>
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
            <h2>Performance Analytics</h2>
            <p>Analytics charts will be displayed here</p>
          </div>
        );
      case 'settings':
        return (
          <div className="dashboard-section">
            <h2>System Configuration</h2>
            <p>Configuration options will be displayed here</p>
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