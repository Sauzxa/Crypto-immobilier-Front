import React from 'react';
import { useHero } from '../../hooks/useHero';

 const Hero = () => {
  const { heroContent, loading, error } = useHero();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-gray-600 font-inter text-lg">Loading...</div>
      </div>
    );
  }

  if (error) {
    console.error('Hero content error:', error);
    // Still render with default content if there's an error
  }

  return (
    <section 
      className="relative min-h-[70vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${heroContent.backgroundImage}')`
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="flex items-center justify-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 lg:gap-24 text-center">
              {/* Main Hero Title */}
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-inter leading-tight tracking-tight whitespace-nowrap">
                  {heroContent.title}
                </h1>
              </div>
              
              {/* Statistics */}
              {heroContent.statistics.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-inter mb-1 tracking-tight whitespace-nowrap">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base lg:text-lg text-white font-inter font-medium opacity-90 leading-relaxed whitespace-nowrap">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white opacity-80" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
