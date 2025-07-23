import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useApp } from '../context/AppContext';

const { FiStar, FiMapPin, FiHeart } = FiIcons;

const ProviderCard = ({ provider, index = 0 }) => {
  const { favorites, toggleFavorite } = useApp();
  const isFavorite = favorites.includes(provider.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
    >
      <Link to={`/provider/${provider.id}`}>
        <div className="relative">
          <img 
            src={provider.image} 
            alt={provider.name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-3 right-3">
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                toggleFavorite(provider.id);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full backdrop-blur-sm transition-all ${
                isFavorite 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white/80 text-gray-600 hover:bg-white'
              }`}
            >
              <SafeIcon icon={FiHeart} className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-1">{provider.name}</h3>
          <p className="text-gray-600 text-sm mb-2">{provider.description}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium">{provider.rating}</span>
                <span className="text-sm text-gray-500">({provider.reviewCount})</span>
              </div>
            </div>
            
            <div className="flex items-center text-gray-500">
              <SafeIcon icon={FiMapPin} className="w-4 h-4 mr-1" />
              <span className="text-sm">{provider.distance}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProviderCard;