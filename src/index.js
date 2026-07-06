/**
 * MROE Dashboard - Entry Point
 * Multiverse Resource Optimization Engine Dashboard
 * 
 * Main entry point of the MROE dashboard application
 * Initializes React application and renders to DOM
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';

// Create root element and render application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);