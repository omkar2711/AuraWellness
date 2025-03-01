import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Silver from '../../src/assets/header/Sample_Image.jpg';
import Gold from '../../src/assets/header/SampleImage2.jpeg';
import Platinum from '../../src/assets/header/SliderImage3.png';


// Package Data
const packages = [
  {
    id: 1,
    name: 'Silver Package',
    shortDescription: 'Basic healing experience with essential meditation tools.',
    description: `The Silver Package is designed for beginners who want to start their journey towards healing and meditation. It includes guided meditation audios, an introductory mindfulness journal, and a set of healing crystals to support your practice.`,
    benefits: [
      'Access to guided meditation sessions',
      'Includes a beginner-friendly mindfulness journal',
      'Set of energy-balancing healing crystals',
      'Perfect for starting your spiritual journey'
    ],
    price: '$49',
    sampleImage: Silver
  },
  {
    id: 2,
    name: 'Gold Package',
    shortDescription: 'Enhanced spiritual wellness with exclusive healing tools.',
    description: `The Gold Package is curated for those looking to deepen their spiritual practice. It includes advanced guided meditation audios, a complete mindfulness journal, a premium set of healing crystals, and an aura-cleansing essential oil blend.`,
    benefits: [
      'Advanced guided meditation series',
      'Exclusive mindfulness journal for deeper self-reflection',
      'Premium healing crystal collection',
      'Aura-cleansing essential oil blend included'
    ],
    price: '$99',
    sampleImage:Gold
  },
  {
    id: 3,
    name: 'Platinum Package',
    shortDescription: 'Complete spiritual transformation with personalized guidance.',
    description: `The Platinum Package is the ultimate spiritual wellness experience. It includes everything in the Gold Package plus one-on-one spiritual coaching sessions, custom healing affirmations, and an exclusive energy cleansing kit for home use.`,
    benefits: [
      'Personalized spiritual coaching sessions',
      'Custom healing affirmations tailored for you',
      'Exclusive energy cleansing kit',
      'All benefits from the Gold Package included'
    ],
    price: '$199',
    sampleImage: Platinum
  }
];

// Modal Component
function PackageModal({ selectedPackage, onClose }) {
  if (!selectedPackage) return null;
  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div 
          className="bg-white rounded-2xl p-8 shadow-2xl w-full max-w-4xl relative"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <button 
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors" 
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </button>
          <img 
            src={selectedPackage.sampleImage} 
            alt={selectedPackage.name} 
            className="w-full h-64 object-cover rounded-xl mb-6"
          />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedPackage.name}</h2>
          <p className="text-gray-600 mb-4">{selectedPackage.description}</p>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Benefits:</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-6">
            {selectedPackage.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Price: {selectedPackage.price}</h3>
          <button className="w-full bg-[#A76192] text-white py-3 rounded-xl font-semibold shadow-md hover:bg-[#904873] transition-all">
            Get Started
          </button>
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
      />
    </div>
  );
}
