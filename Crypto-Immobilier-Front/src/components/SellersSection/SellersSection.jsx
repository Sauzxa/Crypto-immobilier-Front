import React, { useState } from 'react';
import { DEFAULT_SELLERS_CONTENT } from '../../constants';
import RegionSelector from './RegionSelector';
import ApartmentsGrid from './ApartmentsGrid';

const SellersSection = () => {
  const [sellersData] = useState(DEFAULT_SELLERS_CONTENT);
  const [selectedRegion, setSelectedRegion] = useState(sellersData.regions[0]); // Default to first region (Hydra)
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
    setCurrentIndex(0); // Reset to first apartment when region changes
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    // For scrollbar behavior: we can move forward as long as there are more apartments beyond the current view
    // The maximum currentIndex should be such that we can still show at least one apartment
    const maxIndex = selectedRegion.apartments.length - 1;
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };



  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Main Layout - Left: Text + Controls, Right: Apartments */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Title and Region Selector */}
          <div className="flex flex-col gap-8 lg:w-1/3">
            {/* Title */}
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 font-inter leading-[0.9] tracking-tight">
                OUR<br />
                BEST<br />
                SELLERS
              </h2>
            </div>

            {/* Region Selector */}
            <div>
              <RegionSelector
                regions={sellersData.regions}
                selectedRegion={selectedRegion}
                onRegionChange={handleRegionChange}
              />
            </div>
          </div>

          {/* Right Column - Apartments Grid */}
          <div className="flex-1 lg:w-2/3 overflow-x-auto">
            <ApartmentsGrid
              apartments={selectedRegion.apartments}
              currentIndex={currentIndex}
            />
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-12">
          <button 
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`w-12 h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center transition-all duration-300 transform ${
              currentIndex === 0 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-gray-50 hover:border-gray-400 hover:scale-110 active:scale-95'
            }`}
          >
            <svg 
              className="w-6 h-6 text-gray-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={handleNext}
            disabled={currentIndex >= selectedRegion.apartments.length - 1}
            className={`w-12 h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center transition-all duration-300 transform ${
              currentIndex >= selectedRegion.apartments.length - 1
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-gray-50 hover:border-gray-400 hover:scale-110 active:scale-95'
            }`}
          >
            <svg 
              className="w-6 h-6 text-gray-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default SellersSection;
