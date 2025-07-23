import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useApp } from '../context/AppContext';

const { FiBell, FiMapPin } = FiIcons;

const Header = () => {
  const { user } = useApp();

  return (
    <motion.header 
      className="bg-white shadow-sm border-b border-gray-100 px-4 py-3 sticky top-0 z-40"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src={user.avatar} 
            alt="Profile" 
            className="w-10 h-10 rounded-full border-2 border-primary-200"
          />
          <div>
            <p className="text-sm text-gray-500">Good morning</p>
            <p className="font-semibold text-gray-900">{user.name}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-gray-600">
            <SafeIcon icon={FiMapPin} className="w-4 h-4 mr-1" />
            <span className="text-sm">{user.location}</span>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 text-gray-600 hover:text-primary-600 transition-colors"
          >
            <SafeIcon icon={FiBell} className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;