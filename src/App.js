/**
 * App Component - Main Application Container
 * 
 * Main component of MROE Dashboard application
 * Manages navigation, shared state, and main layout
 */

import React, { useState, useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './styles/App.css';

/**
 * App - Root component of the application
 * 
 * @returns {JSX.Element} Main application interface
 */
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [resources, setResources] = useState([]);
  const [activeTab, setActiveTab] = useState('overview');

  /**
   * Load resources data when component mounts
   */
  useEffect(() => {
    const loadResources = async () => {
      try {
        // Fetch resources data from API
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading resources:', error);
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
            <div className="loading">Loading...</div>
          ) : (
            <Dashboard resources={resources} activeTab={activeTab} />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;