import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Silver from '../assets/header/Sample_Image.jpg';
import Gold from '../assets/header/SampleImage2.jpeg';
import Platinum from '../assets/header/SliderImage3.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const backendUrl = import.meta.env.VITE_BACKEND_URL



// Package Data
const packages = [
  {
    id: "67e39f1868a04dfd03afbc61",
    name: 'Silver Package',
    shortDescription: 'Basic healing experience with essential meditation tools.',
    description: `The Silver Package is designed for beginners who want to start their journey towards healing and meditation. It includes guided meditation audios, an introductory mindfulness journal, and a set of healing crystals to support your practice.`,
    benefits: [
      'Access to guided meditation sessions',
      'Includes a beginner-friendly mindfulness journal',
      'Set of energy-balancing healing crystals',
      'Perfect for starting your spiritual journey'
    ],
    price: '199 AED',
    sampleImage: Silver
  },
  {
    id: "67e39f8c68a04dfd03afbc62",
    name: 'Gold Package',
    shortDescription: 'Enhanced spiritual wellness with exclusive healing tools.',
    description: `The Gold Package is curated for those looking to deepen their spiritual practice. It includes advanced guided meditation audios, a complete mindfulness journal, a premium set of healing crystals, and an aura-cleansing essential oil blend.`,
    benefits: [
      'Advanced guided meditation series',
      'Exclusive mindfulness journal for deeper self-reflection',
      'Premium healing crystal collection',
      'Aura-cleansing essential oil blend included'
    ],
    price: '699 AED',
    sampleImage:Gold
  },
  {
    id: "67e39f9b68a04dfd03afbc63",
    name: 'Platinum Package',
    shortDescription: 'Complete spiritual transformation with personalized guidance.',
    description: `The Platinum Package is the ultimate spiritual wellness experience. It includes everything in the Gold Package plus one-on-one spiritual coaching sessions, custom healing affirmations, and an exclusive energy cleansing kit for home use.`,
    benefits: [
      'Personalized spiritual coaching sessions',
      'Custom healing affirmations tailored for you',
      'Exclusive energy cleansing kit',
      'All benefits from the Gold Package included'
    ],
    price: '999 AED',
    sampleImage: Platinum
  }
];

// Modal Component
function PackageModal({ selectedPackage, onClose, token }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: ''
  });

  const handleSubmit = async () => {
    if (!token) {
      toast.warning('Please login to book a package');
      return navigate('/login');
    }

    
    try {
      
      const { data } = await axios.post(backendUrl + '/api/user/all-appointments', {
        ...formData,
        packageId: selectedPackage.id,
        package: selectedPackage.name
      }, {
        headers: { token }
      });
      
      const appointmentId = data.appointmentId
      const paymentResponse = await axios.post(backendUrl + '/api/user/payment-stripe', {
        appointmentId,
      }, {
        headers: { token }
      });
      // redirect to payment page
      window.location.href = paymentResponse.data.session_url
      if (data.success) {
        toast.success('Package booked successfully!');
        onClose();
        // navigate('/my-appointments');
      } else {
        toast.error(data.message || 'Booking failed');
      }
    } catch (error) {
      console.error('Booking error:', error);
      toast.error(error.response?.data?.message || 'Failed to book package');
    }
  };

  if (!selectedPackage) return null;
  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 flex items-start justify-center z-50 bg-black bg-opacity-50 p-2 sm:p-4 overflow-y-auto min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div 
          className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl w-full max-w-6xl relative flex flex-col md:flex-row gap-4 md:gap-8 my-2 sm:my-4 md:my-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <button 
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-800 transition-colors z-10" 
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Column - Package Information */}
          <div className="flex-1 space-y-3 sm:space-y-4 md:space-y-6 overflow-y-auto max-h-[70vh] md:max-h-[80vh] pr-2">
            <img 
              src={selectedPackage.sampleImage} 
              alt={selectedPackage.name} 
              className="w-full h-32 sm:h-48 md:h-56 object-cover rounded-xl"
            />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">{selectedPackage.name}</h2>
            <p className="text-sm sm:text-base text-gray-600">{selectedPackage.description}</p>
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">Benefits:</h3>
              <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-0.5 sm:space-y-1">
                {selectedPackage.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">Price: {selectedPackage.price}</h3>
          </div>

          {/* Right Column - Booking Form */}
          <div className="flex-1 flex flex-col space-y-3 sm:space-y-4 md:space-y-6 mt-4 md:mt-0 overflow-y-auto max-h-[70vh] md:max-h-[80vh] pr-2">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">Book Your Package</h3>
            <form className="space-y-2 sm:space-y-3 md:space-y-4 flex-grow">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 sm:p-3 border rounded-lg text-sm sm:text-base"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 sm:p-3 border rounded-lg text-sm sm:text-base"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-2 sm:p-3 border rounded-lg text-sm sm:text-base"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
              />
            </form>
            <button 
              className="w-full bg-[#A76192] text-white py-2 sm:py-3 rounded-xl font-semibold shadow-md hover:bg-[#904873] transition-all text-sm sm:text-base sticky bottom-0"
              onClick={handleSubmit}
            >
              Book Now
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Package Card Component
function PackageCard({ pkg, onClick }) {
  return (
    <motion.div 
      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer" 
      onClick={() => onClick(pkg)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <img 
        src={pkg.sampleImage} 
        alt={pkg.name} 
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h2 className="text-xl font-bold text-gray-800 mb-2">{pkg.name}</h2>
      <p className="text-gray-600">{pkg.shortDescription}</p>
    </motion.div>
  );
}

export default function Packages() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const token = localStorage.getItem('token'); // Or use your auth context

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Our Packages</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect package to elevate your spiritual journey with guided meditations, healing tools, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard 
              key={pkg.id} 
              pkg={pkg} 
              onClick={setSelectedPackage} 
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <PackageModal 
        selectedPackage={selectedPackage} 
        onClose={() => setSelectedPackage(null)}
        token={token}
      />
    </div>
  );
}
