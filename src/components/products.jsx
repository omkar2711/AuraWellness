import React, { useState } from 'react';
import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    priceCategory: 'Basic',
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
    priceCategory: 'Medium',
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
    priceCategory: 'High',
    reviews: '★★★★★ (5/5)',
  },
];

export default function ProductPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
            <h3 className="text-xl font-semibold text-gray-800 mt-4">What’s Included:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {products[currentIndex].details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <p className="text-lg font-semibold text-gray-800 mt-4">Duration: 
              <span className="text-gray-600"> {products[currentIndex].duration}</span>
            </p>
            <p className="text-lg font-semibold text-gray-800 mt-2">Price: 
              <span className="text-[#A76192]"> {products[currentIndex].price} ({products[currentIndex].priceCategory})</span>
            </p>
            <p className="text-lg font-semibold text-gray-800 mt-2">Reviews: 
              <span className="text-yellow-500"> {products[currentIndex].reviews}</span>
            </p>

            <button className="mt-6 w-full bg-[#A76192] text-white py-3 px-6 rounded-xl hover:bg-[#8A4A7A] transition shadow-md">
              Book Now
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

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
