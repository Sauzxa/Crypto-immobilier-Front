import React, { useState } from 'react';
import Switch from 'react-switch';
import { DEFAULT_SELLERS_CONTENT } from '../../constants';
import RegionSelector from './RegionSelector';
import ApartmentsGrid from './ApartmentsGrid';

const SellersSection = () => {
  const [sellersData] = useState(DEFAULT_SELLERS_CONTENT);
  const [isRegionMode, setIsRegionMode] = useState(true); // true = Regions, false = Apartments
  const [selectedRegion, setSelectedRegion] = useState(sellersData.regions[0]); // Default to first region (Hydra)

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };

  const handleSwitchChange = (checked) => {
    setIsRegionMode(checked);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
          
          {/* Left side - Title */}
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 font-inter leading-[0.9] tracking-tight">
              OUR<br />
              BEST<br />
              SELLERS
            </h2>
          </div>

          {/* Right side - Controls */}
          <div className="flex flex-col gap-6 lg:items-end">
            
            {/* Switch Toggle */}
            <div className="flex items-center gap-4">
              <span className={`text-lg font-inter font-medium transition-colors ${isRegionMode ? 'text-gray-900' : 'text-gray-500'}`}>
                Regions
              </span>
              <Switch
                checked={!isRegionMode}
                onChange={handleSwitchChange}
                onColor="#EF4444"
                offColor="#EF4444"
                checkedIcon={false}
                uncheckedIcon={false}
                height={28}
                width={56}
                handleDiameter={24}
                className="react-switch"
              />
              <span className={`text-lg font-inter font-medium transition-colors ${!isRegionMode ? 'text-gray-900' : 'text-gray-500'}`}>
                Apartments
              </span>
            </div>

            {/* Region Selector - Only show when in region mode */}
            {isRegionMode && (
              <RegionSelector
                regions={sellersData.regions}
                selectedRegion={selectedRegion}
                onRegionChange={handleRegionChange}
              />
            )}
          </div>
        </div>

        {/* Apartments Grid */}
        <ApartmentsGrid
          apartments={isRegionMode ? selectedRegion.apartments : []}
          isRegionMode={isRegionMode}
        />

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="w-12 h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg 
              className="w-6 h-6 text-gray-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="w-12 h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
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
