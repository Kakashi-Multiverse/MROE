/**
 * API Utilities Module
 * 
 * Module chứa các hàm tiện ích để gọi API
 * Xử lý tất cả các yêu cầu HTTP đến backend
 */

import axios from 'axios';

// Cấu hình base URL cho API
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

// Tạo instance axios với cấu hình mặc định
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Lấy danh sách tài nguyên từ API
 * @returns {Promise<Array>} Danh sách tài nguyên
 */
export const getResources = async () => {
  try {
    const response = await api.get('/resources');
    return response.data;
  } catch (error) {
    console.error('Lỗi khi lấy tài nguyên:', error);
    throw error;
  }
};

/**
 * Lấy chi tiết tài nguyên theo ID
 * @param {string} resourceId - ID của tài nguyên
 * @returns {Promise<Object>} Chi tiết tài nguyên
 */
export const getResourceById = async (resourceId) => {
  try {
    const response = await api.get(`/resources/${resourceId}`);
    return response.data;
  } catch (error) {
    console.error(`Lỗi khi lấy tài nguyên ${resourceId}:`, error);
    throw error;
  }
};

/**
 * Tạo tài nguyên mới
 * @param {Object} resourceData - Dữ liệu tài nguyên
 * @returns {Promise<Object>} Tài nguyên được tạo
 */
export const createResource = async (resourceData) => {
  try {
    const response = await api.post('/resources', resourceData);
    return response.data;
  } catch (error) {
    console.error('Lỗi khi tạo tài nguyên:', error);
    throw error;
  }
};

/**
 * Cập nhật tài nguyên hiện tại
 * @param {string} resourceId - ID của tài nguyên
 * @param {Object} resourceData - Dữ liệu cập nhật
 * @returns {Promise<Object>} Tài nguyên được cập nhật
 */
export const updateResource = async (resourceId, resourceData) => {
  try {
    const response = await api.put(`/resources/${resourceId}`, resourceData);
    return response.data;
  } catch (error) {
    console.error(`Lỗi khi cập nhật tài nguyên ${resourceId}:`, error);
    throw error;
  }
};

/**
 * Xóa tài nguyên
 * @param {string} resourceId - ID của tài nguyên
 * @returns {Promise<void>}
 */
export const deleteResource = async (resourceId) => {
  try {
    await api.delete(`/resources/${resourceId}`);
  } catch (error) {
    console.error(`Lỗi khi xóa tài nguyên ${resourceId}:`, error);
    throw error;
  }
};

export default api;