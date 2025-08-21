import React, { useState } from 'react';

const ApartmentsGrid = ({ apartments, isRegionMode }) => {
  const [hoveredApartment, setHoveredApartment] = useState(null);

  if (!isRegionMode) {
    // When in Apartments mode, show a message or empty state
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 font-inter text-lg">
          Switch to Regions mode to view apartments
        </p>
      </div>
    );
  }

  if (!apartments || apartments.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 font-inter text-lg">
          No apartments available in this region
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {apartments.map((apartment) => (
        <div
          key={apartment.id}
          className="relative group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
          onMouseEnter={() => setHoveredApartment(apartment.id)}
          onMouseLeave={() => setHoveredApartment(null)}
        >
          {/* Apartment Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <img
              src={apartment.image}
              alt={apartment.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                e.target.src = '/assets/images/apartments/appartement1.png';
              }}
            />
            
            {/* Region Label - Top Right */}
            <div className="absolute top-4 right-4 bg-white bg-opacity-95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
              <span className="text-xs font-inter font-bold text-gray-800 uppercase tracking-wide">
                {apartment.name.split(' ')[0]}
              </span>
            </div>

            {/* Hover Overlay */}
            <div className={`absolute inset-0 bg-black transition-opacity duration-300 flex items-center justify-center ${
              hoveredApartment === apartment.id ? 'bg-opacity-70' : 'bg-opacity-0 pointer-events-none'
            }`}>
              <div className={`text-center text-white p-6 transition-all duration-300 ${
                hoveredApartment === apartment.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <h3 className="text-lg md:text-xl font-inter font-bold mb-3 leading-tight">
                  {apartment.name}
                </h3>
                <div className="flex items-center justify-center gap-3">
                  <div 
                    className={`w-3 h-3 rounded-full ${
                      apartment.availability === 'Available' 
                        ? 'bg-green-400 animate-pulse' 
                        : 'bg-red-400'
                    }`}
                  />
                  <span className="text-sm md:text-base font-inter font-medium">
                    {apartment.availability}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApartmentsGrid;
