import React, { useState } from 'react';

const NavBar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setIsDropdownOpen(false);
    // TODO: Implement language switching logic
    console.log(`Language changed to: ${lang}`);
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    // TODO: Implement dark/light mode logic
    console.log(`Theme changed to: ${!isDarkMode ? 'dark' : 'light'} mode`);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              className="h-14 w-auto" 
              src="/assets/images/logos/Logo.png" 
              alt="Crypto Immobilier Logo" 
            />
          </div>
          
          {/* Navigation Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="#" 
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium font-inter transition-colors duration-200"
              >
                Home
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium font-inter transition-colors duration-200"
              >
                About Us
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium font-inter transition-colors duration-200"
              >
                Gallery
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium font-inter transition-colors duration-200"
              >
                News
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium font-inter transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
          
          {/* Right side - Language selector and toggle */}
          <div className="flex items-center space-x-6">
            {/* Language Selector with Flag and Dropdown */}
            <div className="relative">
              <div 
                className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 px-3 py-2 rounded-md transition-colors duration-200"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <img 
                  src={selectedLanguage === 'en' ? "/assets/icons/english.png" : "/assets/icons/franch.png"} 
                  alt={selectedLanguage === 'en' ? "English" : "French"} 
                  className="w-6 h-4 rounded-sm"
                />
                <span className="text-sm font-medium text-gray-900 font-inter">
                  {selectedLanguage === 'en' ? 'EN' : 'FR'}
                </span>
                <svg 
                  className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    <button
                      onClick={() => handleLanguageChange('en')}
                      className={`flex items-center space-x-2 w-full px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 ${
                        selectedLanguage === 'en' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      <img 
                        src="/assets/icons/english.png" 
                        alt="English" 
                        className="w-5 h-3 rounded-sm"
                      />
                      <span className="font-inter">English</span>
                    </button>
                    <button
                      onClick={() => handleLanguageChange('fr')}
                      className={`flex items-center space-x-2 w-full px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 ${
                        selectedLanguage === 'fr' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      <img 
                        src="/assets/icons/franch.png" 
                        alt="French" 
                        className="w-5 h-3 rounded-sm"
                      />
                      <span className="font-inter">Français</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Theme Toggle with Sun/Moon Icons */}
            <div className="flex items-center">
              <button
                onClick={handleThemeToggle}
                className={`relative inline-flex items-center w-16 h-8 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  isDarkMode ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                {/* Slider */}
                <div className={`absolute w-6 h-6 bg-white rounded-full shadow-sm transition-transform duration-300 ease-in-out flex items-center justify-center ${
                  isDarkMode ? 'translate-x-9' : 'translate-x-1'
                }`}>
                  {isDarkMode ? (
                    // Moon Icon
                    <svg className="w-4 h-4 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  ) : (
                    // Sun Icon
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                
                {/* Background Icons */}
                <div className="absolute left-2 top-2 w-4 h-4">
                  <svg className={`w-4 h-4 transition-opacity duration-300 ${!isDarkMode ? 'opacity-40' : 'opacity-0'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                </div>
                
                <div className="absolute right-2 top-2 w-4 h-4">
                  <svg className={`w-4 h-4 text-white transition-opacity duration-300 ${isDarkMode ? 'opacity-40' : 'opacity-0'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
