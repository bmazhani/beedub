import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { providers } from '../data/providers';
import { useApp } from '../context/AppContext';

const { 
  FiArrowLeft, FiHeart, FiShare2, FiStar, FiMapPin, 
  FiPhone, FiClock, FiDollarSign, FiCheck 
} = FiIcons;

const ProviderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useApp();
  const [selectedImage, setSelectedImage] = useState(0);
  
  const provider = providers.find(p => p.id === parseInt(id));
  const isFavorite = favorites.includes(provider?.id);

  if (!provider) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Provider not found</h2>
          <button 
            onClick={() => navigate(-1)}
            className="text-primary-600 hover:text-primary-700"
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4"
      >
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
        >
          <SafeIcon icon={FiArrowLeft} className="w-5 h-5 text-gray-700" />
        </motion.button>
        
        <div className="flex items-center space-x-3">
          <motion.button
            onClick={() => toggleFavorite(provider.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm ${
              isFavorite ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-700'
            }`}
          >
            <SafeIcon icon={FiHeart} className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
          >
            <SafeIcon icon={FiShare2} className="w-5 h-5 text-gray-700" />
          </motion.button>
        </div>
      </motion.div>

      {/* Image Gallery */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-80 overflow-hidden"
      >
        <img
          src={provider.gallery[selectedImage]}
          alt={provider.name}
          className="w-full h-full object-cover"
        />
        
        {provider.gallery.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {provider.gallery.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  selectedImage === index ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="px-4 py-6 space-y-6"
      >
        {/* Basic Info */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{provider.name}</h1>
          <p className="text-gray-600 mb-3">{provider.description}</p>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <SafeIcon icon={FiStar} className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="font-semibold">{provider.rating}</span>
              <span className="text-gray-500">({provider.reviewCount} reviews)</span>
            </div>
            
            <div className="flex items-center text-gray-500">
              <SafeIcon icon={FiMapPin} className="w-4 h-4 mr-1" />
              <span>{provider.distance}</span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Features</h3>
          <div className="flex flex-wrap gap-2">
            {provider.features.map((feature, index) => (
              <span
                key={index}
                className="flex items-center px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
              >
                <SafeIcon icon={FiCheck} className="w-3 h-3 mr-1" />
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-50 rounded-2xl p-4 space-y-3">
          <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <SafeIcon icon={FiPhone} className="w-5 h-5 text-gray-400 mr-3" />
              <span className="text-gray-700">{provider.phone}</span>
            </div>
            
            <div className="flex items-start">
              <SafeIcon icon={FiMapPin} className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
              <span className="text-gray-700">{provider.address}</span>
            </div>
            
            <div className="flex items-center">
              <SafeIcon icon={FiClock} className="w-5 h-5 text-gray-400 mr-3" />
              <span className="text-gray-700">{provider.hours}</span>
            </div>
            
            <div className="flex items-center">
              <SafeIcon icon={FiDollarSign} className="w-5 h-5 text-gray-400 mr-3" />
              <span className="text-gray-700">Price range: {provider.priceRange}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-primary-600 text-white py-4 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
          >
            Call Now
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="border-2 border-primary-600 text-primary-600 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-colors"
          >
            Get Directions
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProviderDetail;