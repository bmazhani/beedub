import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const CategoryCard = ({ category, index = 0, onClick }) => {
  // Map category icons to actual FiIcons
  const iconMap = {
    'Utensils': FiIcons.FiCoffee,
    'Sparkles': FiIcons.FiStar,
    'Dumbbell': FiIcons.FiActivity,
    'Car': FiIcons.FiTruck,
    'Home': FiIcons.FiHome,
    'Heart': FiIcons.FiHeart,
    'BookOpen': FiIcons.FiBook,
    'Smartphone': FiIcons.FiSmartphone
  };

  const IconComponent = iconMap[category.icon] || FiIcons.FiGrid;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(category)}
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-all"
    >
      <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mb-3`}>
        <SafeIcon icon={IconComponent} className="w-6 h-6 text-white" />
      </div>
      
      <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
      <p className="text-gray-500 text-sm">{category.count} providers</p>
    </motion.div>
  );
};

export default CategoryCard;