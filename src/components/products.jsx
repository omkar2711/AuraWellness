import React, { useState } from 'react';
import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';


const backendUrl = import.meta.env.VITE_BACKEND_URL
const products = [
  {
    id: 1,
    title: 'Silver Package',
    description: 'Basic Aura Scanning and Aura Reading to analyze your energy field and provide initial insights.',
    details: [
      'Aura Scanning',
      'Aura Reading',
    ],
    duration: 'Single Session',
    price: '52 USD',
    priceCategory: '',
    reviews: '★★★★☆ (4.5/5)',
  },
  {
    id: 2,
    title: 'Gold Package',
    description: 'Comprehensive aura analysis with expert counseling and a meditation session for deeper healing.',
    details: [
      'Aura Scanning',
      'Aura Reading',
      '1 Counselling Session',
      '1 Meditation Session',
    ],
    duration: '1 Counselling (45-60 mins) + 1 Meditation (60-90 mins)',
    price: '199 USD',
    priceCategory: '',
    reviews: '★★★★★ (4.8/5)',
  },
  {
    id: 3,
    title: 'Platinum Package',
    description: 'A full transformational journey with counseling, distance healing, and guided meditation sessions.',
    details: [
      '2 Counselling Sessions',
      '7 Days Distance Healing',
      'Meditative Mindset & Positive Sleep Healing',
      'Healing of Negative Energy',
      '1 Meditation Session',
    ],
    duration: '2 Counselling (45-60 mins each) + 1 Meditation (60-90 mins)',
    price: '299 USD',
    priceCategory: '',
    reviews: '★★★★★ (5/5)',
  },
];

export default function ProductPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [validationErrors, setValidationErrors] = useState({
    phoneNumber: '',
    email: ''
  });
  const [bookingData, setBookingData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    package: 'Silver Package'
  });
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // Or use your auth context

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phoneNumber.replace(/[\s()-]/g, ''));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (field, value) => {
    setBookingData({ ...bookingData, [field]: value });
    
    if (field === 'phoneNumber') {
      if (!validatePhoneNumber(value)) {
        setValidationErrors(prev => ({
          ...prev,
          phoneNumber: 'Please enter a valid phone number'
        }));
      } else {
        setValidationErrors(prev => ({
          ...prev,
          phoneNumber: ''
        }));
      }
    }

    if (field === 'email') {
      if (!validateEmail(value)) {
        setValidationErrors(prev => ({
          ...prev,
          email: 'Please enter a valid email address'
        }));
      } else {
        setValidationErrors(prev => ({
          ...prev,
          email: ''
        }));
      }
    }
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    
    // Validate both fields before submission
    const isPhoneValid = validatePhoneNumber(bookingData.phoneNumber);
    const isEmailValid = validateEmail(bookingData.email);

    if (!isPhoneValid || !isEmailValid) {
      setValidationErrors({
        phoneNumber: !isPhoneValid ? 'Please enter a valid phone number' : '',
        email: !isEmailValid ? 'Please enter a valid email address' : ''
      });
      return;
    }

    if (!token) {
      toast.warning('Please login to book a package');
      return navigate('/login');
    }

    try {
      const response = await axios.post(backendUrl + '/api/user/all-appointments', {
        ...bookingData,
        package: bookingData.package
      }, {
        headers: { token }
      });

      if (response.data.success) {
        toast.success('Package booked successfully!');
        // Reset form and close modal on success
        setShowBookingForm(false);
        setBookingData({
          fullName: '',
          phoneNumber: '',
          email: '',
          package: 'Silver Package'
        });
        setValidationErrors({
          phoneNumber: '',
          email: ''
        });
      } else {
        toast.error(response.data.message || 'Booking failed');
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      toast.error(error.response?.data?.message || 'Failed to book package');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 relative bg-white">
      <div className="relative mx-auto md:mx-20 rounded-3xl shadow-xl bg-gray-100 p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={products[currentIndex].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="relative p-6"
          >
            <h2 className="text-3xl font-bold text-[#A76192] mb-3">
              {products[currentIndex].title}
            </h2>
            <p className="text-lg text-gray-700">{products[currentIndex].description}</p>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">What's Included:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {products[currentIndex].details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <p className="text-lg font-semibold text-gray-800 mt-4">Duration: 
              <span className="text-gray-600"> {products[currentIndex].duration}</span>
            </p>
            <p className="text-lg font-semibold text-gray-800 mt-2">Price: 
              <span className="text-[#A76192]"> {products[currentIndex].price} </span>
            </p>
            <p className="text-lg font-semibold text-gray-800 mt-2">Reviews: 
              <span className="text-yellow-500"> {products[currentIndex].reviews}</span>
            </p>

            <button 
              className="mt-6 w-full bg-[#A76192] text-white py-3 px-6 rounded-xl hover:bg-[#8A4A7A] transition shadow-md"
              onClick={() => setShowBookingForm(true)}
            >
              Book Now
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl max-w-md w-full">
            <h3 className="text-2xl font-bold text-[#A76192] mb-4">Book Your Session</h3>
            <form onSubmit={handleBookingSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full p-2 border rounded-lg"
                    value={bookingData.fullName}
                    onChange={(e) => setBookingData({...bookingData, fullName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    className={`w-full p-2 border rounded-lg ${validationErrors.phoneNumber ? 'border-red-500' : ''}`}
                    value={bookingData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  />
                  {validationErrors.phoneNumber && (
                    <p className="text-red-500 text-sm mt-1">{validationErrors.phoneNumber}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    className={`w-full p-2 border rounded-lg ${validationErrors.email ? 'border-red-500' : ''}`}
                    value={bookingData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                  {validationErrors.email && (
                    <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Select Package</label>
                  <select
                    className="w-full p-2 border rounded-lg"
                    value={bookingData.package}
                    onChange={(e) => setBookingData({...bookingData, package: e.target.value})}
                  >
                    <option>Silver Package</option>
                    <option>Gold Package</option>
                    <option>Platinum Package</option>
                  </select>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <button
                  type="button"
                  className="w-1/2 py-2 bg-gray-200 rounded-lg"
                  onClick={() => setShowBookingForm(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-2 bg-[#A76192] text-white rounded-lg hover:bg-[#8A4A7A]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-1 md:left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6 text-[#A76192]" />
      </button>
      <button
        className="absolute top-1/2 right-1 md:right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6 text-[#A76192]" />
      </button>

      {/* Dot indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full transition ${
              index === currentIndex
                ? 'bg-[#A76192] scale-125'
                : 'bg-gray-400 hover:bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
