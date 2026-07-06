/**
 * MROE Dashboard - Entry Point
 * Multiverse Resource Optimization Engine Dashboard
 * 
 * Điểm vào chính của ứng dụng dashboard MROE
 * Khởi tạo React application và render vào DOM
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';

// Tạo root element và render ứng dụng
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);