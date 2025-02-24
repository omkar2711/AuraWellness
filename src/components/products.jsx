import React, { useState } from 'react';
import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SampleImage from '../assets/header/Sample_Image.jpg'

const products = [
  {
    id: 1,
    title: 'Aura Frequency Healing Machine',
    description:
      'Harnesses the power of sound frequencies to create a deep meditative state. Supports spiritual growth and emotional balance.',
    benefits: [
      'Restores harmony and balance in your energy system',
      'Enhances meditation and deepens spiritual connection',
      'Promotes emotional and physical healing',
      'Helps create a meditative mindset for clarity and focus',
    ],
    image: SampleImage,
  },
  {
    id: 2,
    title: 'Guided Meditation & Mindfulness Audio Series',
    description:
      'Powerful guided meditation sessions to align your thoughts, emotions, and spirit. Perfect for beginners and experienced practitioners.',
    benefits: [
      'Reduces anxiety and stress',
      'Enhances emotional resilience',
      'Cultivates inner peace and connection',
      'Ideal for any stage of your spiritual journey',
    ],
    image: SampleImage,
  },
  {
    id: 3,
    title: 'Sacred Sound Healing Crystal Set',
    description:
      'Amplifies sound frequency healing with vibrational resonance. Perfect for meditation and spiritual alignment.',
    benefits: [
      'Boosts frequency healing and emotional restoration',
      'Perfect for meditation and energy work',
      'Promotes spiritual awakening and insight',
      'Helps cleanse and balance chakras',
    ],
    image: SampleImage,
  },
  {
    id: 4,
    title: 'Aura Wellness Spiritual Connection Kit',
    description:
      'Curated tools to deepen spiritual practices. Includes candles, essential oils, and a guide to prayer and meditation.',
    benefits: [
      'Strengthens connection with the Divine',
      'Encourages daily spiritual practices',
      'Cultivates peace, love, and resilience',
      'Supports mindfulness and gratitude',
    ],
    image: SampleImage,
  },
];

export default function ProductPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
    // Reset showDetails when changing slides on mobile
    if (window.innerWidth < 768) {
      setShowDetails(false);
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
    // Reset showDetails when changing slides on mobile
    if (window.innerWidth < 768) {
      setShowDetails(false);
    }
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="container mx-auto px-4 py-8 relative bg-white">
      {/* Main container with responsive padding */}
      <div className="relative overflow-hidden mx-auto md:mx-20 rounded-3xl shadow-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={products[currentIndex].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={products[currentIndex].image}
              alt={products[currentIndex].title}
              className="w-full h-72 md:h-96 lg:h-[600px] object-cover rounded-t-3xl"
            />
            
            {/* Mobile View - Title Only with option to expand */}
            <div className="md:hidden absolute bottom-0 left-0 right-0 bg-white p-3 rounded-b-3xl shadow-lg">
              <h2 className="text-xl font-bold text-gray-900">
                {products[currentIndex].title}
              </h2>
              
              {/* Expandable details section for mobile */}
              {showDetails && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2"
                >
                  <p className="text-sm text-gray-600 my-2">
                    {products[currentIndex].description}
                  </p>
                  <h3 className="text-base font-semibold text-gray-800 mb-1">
                    Benefits:
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {products[currentIndex].benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                  <button className="mt-3 w-full flex items-center justify-center gap-2 bg-primary text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md">
                    Heal Now
                  </button>
                </motion.div>
              )}
              
              {/* Toggle details button for mobile */}
              <button 
                onClick={toggleDetails}
                className="mt-2 w-full text-sm text-blue-600 flex items-center justify-center"
              >
                {showDetails ? "Show Less" : "Show Details"}
              </button>
            </div>
            
            {/* Desktop View - Full details (hidden on mobile) */}
            <div className="hidden md:block absolute bottom-0 left-0 right-0 p-6 bg-white rounded-b-3xl shadow-lg text-gray-800">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                {products[currentIndex].title}
              </h2>
              <p className="text-base text-gray-600 my-3">
                {products[currentIndex].description}
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Benefits:
              </h3>
              <ul className="list-disc list-inside space-y-1 text-base text-gray-700">
                {products[currentIndex].benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              <button className="mt-4 w-full flex items-center justify-center gap-2 bg-primary text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md">
                Heal Now
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons - Adjusted position for mobile */}
      <button
        className="absolute top-1/2 left-1 md:left-2 transform -translate-y-1/2 bg-white p-1 md:p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 text-blue-600" />
      </button>
      <button
        className="absolute top-1/2 right-1 md:right-2 transform -translate-y-1/2 bg-white p-1 md:p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4 md:h-6 md:w-6 text-blue-600" />
      </button>

      {/* Dot indicators */}
      <div className="flex justify-center mt-4 md:mt-6 space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition ${
              index === currentIndex
                ? 'bg-blue-600 scale-125'
                : 'bg-gray-400 hover:bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}