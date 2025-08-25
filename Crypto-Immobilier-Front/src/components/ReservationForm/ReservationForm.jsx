import React, { useState, useEffect } from 'react';
import Logo from '../../assets/images/logos/Logo.png';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    reservationDate: '',
    typeAppartement: '',
    message: ''
  });

  const [apartmentTypes, setApartmentTypes] = useState([]);
  const [loadingTypes, setLoadingTypes] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Fetch apartment types from database on component mount
  useEffect(() => {
    fetchApartmentTypes();
  }, []);

  const fetchApartmentTypes = async () => {
    try {
      setLoadingTypes(true);
      const response = await fetch('http://localhost:8000/api/apartment-types');
      const data = await response.json();
      
      if (data.success && data.data) {
        // Extract just the names from the apartment type objects
        const typeNames = data.data.map(type => type.name);
        setApartmentTypes(typeNames);
      } else {
        setError('Failed to load apartment types');
        // Fallback to static types if API fails
        setApartmentTypes(['Studio', 'F1', 'F2', 'F3', 'F4', 'F5', 'Duplex', 'Villa']);
      }
    } catch (err) {
      console.error('Error fetching apartment types:', err);
      setError('Error loading apartment types. Using default options.');
      // Fallback to static types if API fails
      setApartmentTypes(['Studio', 'F1', 'F2', 'F3', 'F4', 'F5', 'Duplex', 'Villa']);
    } finally {
      setLoadingTypes(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error message when user starts typing
    if (error) setError('');
    if (success) setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://localhost:8000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess('Reservation submitted successfully! We will contact you soon.');
        // Reset form
        setFormData({
          name: '',
          number: '',
          reservationDate: '',
          typeAppartement: '',
          message: ''
        });
      } else {
        setError(data.error?.message || 'Failed to submit reservation');
      }
    } catch (err) {
      setError('Error connecting to server. Please try again.');
      console.error('Error submitting reservation:', err);
    } finally {
      setSubmitLoading(false);
    }
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
                  <span className="text-gray-700 text-sm sm:text-base break-all">crypto.immobilier@gmail.com</span>
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
            {/* Error and Success Messages */}
            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                {error}
              </div>
            )}
            
            {success && (
              <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name Field */}
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
              
              {/* Phone Number Field */}
              <div>
                <input
                  type="tel"
                  name="number"
                  placeholder="Phone Number*"
                  value={formData.number}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white text-sm sm:text-base"
                />
              </div>
              
              {/* Reservation Date Field */}
              <div>
                <input
                  type="date"
                  name="reservationDate"
                  value={formData.reservationDate}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split('T')[0]} // Prevent past dates
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white text-sm sm:text-base"
                />
              </div>
              
              {/* Apartment Type Dropdown */}
              <div className="relative">
                <select
                  name="typeAppartement"
                  value={formData.typeAppartement}
                  onChange={handleInputChange}
                  onFocus={() => setIsDropdownOpen(true)}
                  onBlur={() => setIsDropdownOpen(false)}
                  required
                  disabled={loadingTypes}
                  className={`w-full px-3 py-2 sm:px-4 sm:py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white text-sm sm:text-base appearance-none cursor-pointer hover:border-gray-400 ${
                    loadingTypes ? 'cursor-not-allowed opacity-70' : ''
                  } ${
                    !formData.typeAppartement ? 'text-gray-400' : 'text-gray-900'
                  }`}
                  style={{
                    WebkitAppearance: 'none',
                    MozAppearance: 'none',
                    msAppearance: 'none',
                    backgroundImage: 'none'
                  }}
                >
                  <option value="" disabled hidden style={{ backgroundColor: '#ffffff', color: '#9ca3af' }}>
                    {loadingTypes ? 'Loading apartment types...' : 'Select Apartment Type*'}
                  </option>
                  {apartmentTypes.map((type, index) => (
                    <option 
                      key={index} 
                      value={type} 
                      style={{ 
                        backgroundColor: '#ffffff',
                        color: '#111827',
                        padding: '8px 12px',
                        borderRadius: '0px'
                      }}
                    >
                      {type}
                    </option>
                  ))}
                </select>
                
                {/* Custom dropdown arrow with rotation */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className={`h-5 w-5 transition-all duration-200 ${
                      loadingTypes ? 'text-gray-300' : 'text-gray-400'
                    } ${
                      isDropdownOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              
              {/* Message Field (Optional) */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message (Optional)"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white resize-none text-sm sm:text-base"
                />
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitLoading}
                className={`w-full sm:w-32 font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none text-sm sm:text-base ${
                  submitLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-900 hover:bg-blue-800 text-white'
                }`}
              >
                {submitLoading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
