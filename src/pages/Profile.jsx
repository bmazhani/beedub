import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useApp } from '../context/AppContext';

const { 
  FiSettings, FiHelpCircle, FiStar, FiMapPin, 
  FiPhone, FiMail, FiEdit, FiLogOut, FiShield 
} = FiIcons;

const Profile = () => {
  const { user } = useApp();

  const menuItems = [
    { icon: FiEdit, label: 'Edit Profile', action: () => {} },
    { icon: FiMapPin, label: 'Addresses', action: () => {} },
    { icon: FiStar, label: 'Reviews', action: () => {} },
    { icon: FiSettings, label: 'Settings', action: () => {} },
    { icon: FiShield, label: 'Privacy', action: () => {} },
    { icon: FiHelpCircle, label: 'Help & Support', action: () => {} },
    { icon: FiLogOut, label: 'Sign Out', action: () => {}, danger: true },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-4 py-6">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl p-6 mb-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center space-x-4">
            <img
              src={user.avatar}
              alt="Profile"
              className="w-20 h-20 rounded-full border-4 border-primary-100"
            />
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
              <div className="flex items-center text-gray-600 mt-1">
                <SafeIcon icon={FiMail} className="w-4 h-4 mr-2" />
                <span className="text-sm">{user.email}</span>
              </div>
              <div className="flex items-center text-gray-600 mt-1">
                <SafeIcon icon={FiMapPin} className="w-4 h-4 mr-2" />
                <span className="text-sm">{user.location}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="grid grid-cols-3 gap-4 mb-6"
        >
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-primary-600">12</div>
            <div className="text-sm text-gray-600">Reviews</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-green-600">5</div>
            <div className="text-sm text-gray-600">Favorites</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-orange-600">8</div>
            <div className="text-sm text-gray-600">Bookings</div>
          </div>
        </motion.div>

        {/* Menu Items */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
        >
          {menuItems.map((item, index) => (
            <motion.button
              key={index}
              onClick={item.action}
              whileHover={{ backgroundColor: '#f9fafb' }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center p-4 border-b border-gray-100 last:border-b-0 transition-colors ${
                item.danger ? 'text-red-600' : 'text-gray-700'
              }`}
            >
              <SafeIcon 
                icon={item.icon} 
                className={`w-5 h-5 mr-4 ${item.danger ? 'text-red-600' : 'text-gray-400'}`} 
              />
              <span className="font-medium">{item.label}</span>
              <SafeIcon 
                icon={FiIcons.FiChevronRight} 
                className="w-5 h-5 ml-auto text-gray-400" 
              />
            </motion.button>
          ))}
        </motion.div>

        {/* App Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-center mt-8 text-gray-500"
        >
          <p className="text-sm">Provider Directory v1.0.0</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;