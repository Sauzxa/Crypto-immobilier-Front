import React, { createContext, useState, useEffect } from 'react';
import { DEFAULT_DESCRIPTION_CONTENT } from '../constants';
import { descriptionAPI } from '../utils/api';

const DescriptionContext = createContext();

export const DescriptionProvider = ({ children }) => {
  const [descriptionContent, setDescriptionContent] = useState(DEFAULT_DESCRIPTION_CONTENT);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch description content from backend
  const fetchDescriptionContent = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await descriptionAPI.getDescriptionContent();
      setDescriptionContent(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching description content:', err);
      // Keep default content on error
      setDescriptionContent(DEFAULT_DESCRIPTION_CONTENT);
    } finally {
      setLoading(false);
    }
  };

  // Function to update description content (for admin dashboard)
  const updateDescriptionContent = async (newContent) => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await descriptionAPI.updateDescriptionContent(newContent);
      setDescriptionContent(data);
      return data;
    } catch (err) {
      setError(err.message);
      console.error('Error updating description content:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch description content on component mount
    // fetchDescriptionContent(); // Commented out until backend is ready
  }, []);

  const value = {
    descriptionContent,
    loading,
    error,
    fetchDescriptionContent,
    updateDescriptionContent,
    setDescriptionContent
  };

  return (
    <DescriptionContext.Provider value={value}>
      {children}
    </DescriptionContext.Provider>
  );
};

export default DescriptionContext;
