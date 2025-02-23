import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Product Data with Sample Images
const products = [
  {
    id: 1,
    name: 'Aura Frequency Healing Machine',
    shortDescription: 'Harnesses sound frequencies for deep meditation and emotional balance.',
    description: `Our Aura Frequency Healing Machine harnesses the power of sound frequencies, including binaural beats and singing bowls, to create a deep meditative state. This advanced device supports your spiritual growth by aligning your body, mind, and soul to higher frequencies, facilitating soul healing, emotional balance, and a deeper connection with the divine. Perfect for daily use to help you meditate, release stress, and promote relaxation.`,
    benefits: [
      'Restores harmony and balance in your body’s energy system',
      'Enhances meditation and deepens spiritual connection',
      'Promotes emotional and physical healing',
      'Helps create a meditative mindset for better clarity and focus'
    ],
    sampleImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 2,
    name: 'Guided Meditation & Mindfulness Audio Series',
    shortDescription: 'Step-by-step guided meditation for relaxation and spiritual awakening.',
    description: `Immerse yourself in a series of powerful guided meditation and mindfulness sessions designed to cultivate a meditative mindset. Whether you're new to meditation or an experienced practitioner, this audio series offers step-by-step guidance to help you align your thoughts, emotions, and spirit. Each session is carefully crafted to promote relaxation, emotional balance, and spiritual awakening.`,
    benefits: [
      'Reduces anxiety and stress through guided mindfulness',
      'Enhances emotional resilience and clarity',
      'Cultivates inner peace and connection with your higher self',
      'Ideal for any stage of your spiritual journey'
    ],
    sampleImage: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 3,
    name: 'Sacred Sound Healing Crystal Set',
    shortDescription: 'Amplify sound frequency healing with vibrationally resonant crystals.',
    description: `This set of healing crystals is specifically chosen for their ability to amplify the power of sound frequency healing. Each crystal resonates with specific vibrations that harmonize with the body’s natural energy systems, promoting deep healing and spiritual alignment. Use these stones during meditation, energy healing sessions, or as part of your daily wellness routine to enhance emotional balance and strengthen your divine connection.`,
    benefits: [
      'Boosts frequency healing and emotional restoration',
      'Perfect for meditation and energy work',
      'Promotes spiritual awakening and insight',
      'Helps cleanse and balance chakras'
    ],
    sampleImage: 'https://images.unsplash.com/photo-1574169208507-843761648b43?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 4,
    name: 'Aura Wellness Spiritual Connection Kit',
    shortDescription: 'Deepen your spiritual practice with this curated collection.',
    description: `Nurture your connection with the Divine with our Spiritual Connection Kit. This carefully curated collection includes tools and resources to deepen your spiritual practices, including sacred candles, a journal for gratitude and reflection, essential oils for clarity and calm, and a guide to prayer and meditation. This kit serves as a reminder of your divine connection and helps foster an ongoing sense of peace, purpose, and guidance.`,
    benefits: [
      'Strengthens your connection with the Divine',
      'Encourages daily spiritual practices and reflection',
      'Cultivates peace, love, and emotional resilience',
      'Supports mindfulness and gratitude practices'
    ],
    sampleImage: 'https://images.unsplash.com/photo-1616337840160-39eabf2b60ab?auto=format&fit=crop&q=80&w=600&h=400'
  }
];

// Modal Component
function ProductModal({ product, onClose }) {
  if (!product) return null;
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
            src={product.sampleImage} 
            alt={product.name} 
            className="w-full h-64 object-cover rounded-xl mb-6"
          />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Benefits:</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-6">
            {product.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
          <button className="w-full bg-[#A76192] text-white py-3 rounded-xl font-semibold shadow-md hover:bg-[#904873] transition-all">
            Heal Now
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Product Card with Framer Motion
function ProductCard({ product, onClick }) {
  return (
    <motion.div 
      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer" 
      onClick={() => onClick(product)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <img 
        src={product.sampleImage} 
        alt={product.name} 
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h2 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h2>
      <p className="text-gray-600">{product.shortDescription}</p>
    </motion.div>
  );
}

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Our Products</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our range of spiritual wellness products designed to enhance meditation, healing, and emotional balance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onClick={setSelectedProduct} 
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
}