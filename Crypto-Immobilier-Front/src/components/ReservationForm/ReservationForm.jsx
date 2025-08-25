import React, { useState } from 'react';
import Logo from '../../assets/images/logos/Logo.png';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    location: '',
    name: '',
    email: '',
    number: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-gray-100 py-8 sm:py-12 lg:py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-16">
          {/* Left Section - Logo and Info */}
          <div className="flex-1 lg:pr-8">
            <div className="flex items-center mb-6 sm:mb-8 lg:mb-12">
              <img 
                src={Logo} 
                alt="Crypto Immobilier Logo" 
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mr-3 sm:mr-4"
              />
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 font-inter leading-tight">
  Reservation
</h2>
            </div>
            
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              We are committed to processing the information in order to 
              contact you and talk about your project.
            </p>
            
            <div className="space-y-6 sm:space-y-8 mt-6 sm:mt-8 lg:mt-10">
                <div className="flex items-center">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 flex-shrink-0">
                    <svg className="w-full h-full text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base break-all">example@CryptoImmobilier.com</span>
                </div>
                
                <div className="flex items-start">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 flex-shrink-0 mt-1">
                    <svg className="w-full h-full text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700 text-sm sm:text-base">Bab ezzouar</p>
                    <p className="text-gray-700 text-sm sm:text-base">cite 5 juillet</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 flex-shrink-0">
                    <svg className="w-full h-full text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">+213 778 59 54 78</span>
                </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <input
                  type="text"
                  name="location"
                  placeholder="Location*"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white text-sm sm:text-base"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white text-sm sm:text-base"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="email*"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white text-sm sm:text-base"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="number"
                  placeholder="number*"
                  value={formData.number}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white text-sm sm:text-base"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white resize-none text-sm sm:text-base"
                />
              </div>
              
              <button
                type="submit"
                className="w-full sm:w-32 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none text-sm sm:text-base"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
