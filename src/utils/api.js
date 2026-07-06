/**
 * API Utilities Module
 * 
 * Module containing utility functions for making API calls
 * Handles all HTTP requests to the backend
 */

import axios from 'axios';

// Configure base URL for API
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

// Create axios instance with default configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Fetch list of resources from API
 * @returns {Promise<Array>} List of resources
 */
export const getResources = async () => {
  try {
    const response = await api.get('/resources');
    return response.data;
  } catch (error) {
    console.error('Error fetching resources:', error);
    throw error;
  }
};

/**
 * Get resource details by ID
 * @param {string} resourceId - Resource ID
 * @returns {Promise<Object>} Resource details
 */
export const getResourceById = async (resourceId) => {
  try {
    const response = await api.get(`/resources/${resourceId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching resource ${resourceId}:`, error);
    throw error;
  }
};

/**
 * Create a new resource
 * @param {Object} resourceData - Resource data
 * @returns {Promise<Object>} Created resource
 */
export const createResource = async (resourceData) => {
  try {
    const response = await api.post('/resources', resourceData);
    return response.data;
  } catch (error) {
    console.error('Error creating resource:', error);
    throw error;
  }
};

/**
 * Update an existing resource
 * @param {string} resourceId - Resource ID
 * @param {Object} resourceData - Update data
 * @returns {Promise<Object>} Updated resource
 */
export const updateResource = async (resourceId, resourceData) => {
  try {
    const response = await api.put(`/resources/${resourceId}`, resourceData);
    return response.data;
  } catch (error) {
    console.error(`Error updating resource ${resourceId}:`, error);
    throw error;
  }
};

/**
 * Delete a resource
 * @param {string} resourceId - Resource ID
 * @returns {Promise<void>}
 */
export const deleteResource = async (resourceId) => {
  try {
    await api.delete(`/resources/${resourceId}`);
  } catch (error) {
    console.error(`Error deleting resource ${resourceId}:`, error);
    throw error;
  }
};

export default api;