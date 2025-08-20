import React, { createContext, useState, useEffect } from 'react';
import { DEFAULT_HERO_CONTENT } from '../constants';
import { heroAPI } from '../utils/api';

const HeroContext = createContext();

export const HeroProvider = ({ children }) => {
  const [heroContent, setHeroContent] = useState(DEFAULT_HERO_CONTENT);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch hero content from backend
  const fetchHeroContent = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await heroAPI.getHeroContent();
      setHeroContent(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching hero content:', err);
      // Keep default content on error
      setHeroContent(DEFAULT_HERO_CONTENT);
    } finally {
      setLoading(false);
    }
  };

  // Function to update hero content (for admin dashboard)
  const updateHeroContent = async (newContent) => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await heroAPI.updateHeroContent(newContent);
      setHeroContent(data);
      return data;
    } catch (err) {
      setError(err.message);
      console.error('Error updating hero content:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch hero content on component mount
    // fetchHeroContent(); // Commented out until backend is ready
  }, []);

  const value = {
    heroContent,
    loading,
    error,
    fetchHeroContent,
    updateHeroContent,
    setHeroContent
  };

  return (
    <HeroContext.Provider value={value}>
      {children}
    </HeroContext.Provider>
  );
};

export default HeroContext;
