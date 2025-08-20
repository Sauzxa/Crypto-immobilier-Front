import { API_ENDPOINTS } from '../constants';

// Generic API call function
export const apiCall = async (endpoint, options = {}) => {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const config = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(endpoint, config);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

// Hero content specific API calls
export const heroAPI = {
  // Get hero content
  getHeroContent: () => {
    return apiCall(API_ENDPOINTS.HERO_CONTENT, {
      method: 'GET',
    });
  },

  // Update hero content
  updateHeroContent: (content) => {
    return apiCall(API_ENDPOINTS.HERO_CONTENT, {
      method: 'POST',
      body: JSON.stringify(content),
    });
  },
};

export default {
  apiCall,
  heroAPI,
};
