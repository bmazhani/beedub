import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useApp } from '../context/AppContext';

const { FiSearch, FiFilter } = FiIcons;

const SearchBar = ({ onSearch, showFilter = true, placeholder = "Search providers..." }) => {
  const [query, setQuery] = useState('');
  const { addToSearchHistory } = useApp();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      addToSearchHistory(query.trim());
      onSearch(query.trim());
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="flex items-center space-x-3 px-4 py-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex-1 relative">
        <SafeIcon 
          icon={FiSearch} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" 
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all duration-200 text-gray-900 placeholder-gray-500"
        />
      </div>
      
      {showFilter && (
        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 bg-primary-600 text-white rounded-xl shadow-lg hover:bg-primary-700 transition-colors"
        >
          <SafeIcon icon={FiFilter} className="w-5 h-5" />
        </motion.button>
      )}
    </motion.form>
  );
};

export default SearchBar;