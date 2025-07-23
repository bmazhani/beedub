import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import SearchBar from '../components/SearchBar';
import ProviderCard from '../components/ProviderCard';
import { providers } from '../data/providers';
import { useApp } from '../context/AppContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiClock, FiX } = FiIcons;

const Search = () => {
  const [searchParams] = useSearchParams();
  const [filteredProviders, setFilteredProviders] = useState(providers);
  const [activeQuery, setActiveQuery] = useState('');
  const { searchHistory, addToSearchHistory } = useApp();

  useEffect(() => {
    const query = searchParams.get('q') || '';
    const category = searchParams.get('category') || '';
    
    if (query || category) {
      filterProviders(query, category);
      setActiveQuery(query);
    }
  }, [searchParams]);

  const filterProviders = (query, category) => {
    let filtered = providers;

    if (category) {
      filtered = filtered.filter(provider => provider.category === category);
    }

    if (query) {
      const searchTerm = query.toLowerCase();
      filtered = filtered.filter(provider =>
        provider.name.toLowerCase().includes(searchTerm) ||
        provider.description.toLowerCase().includes(searchTerm) ||
        provider.features.some(feature => feature.toLowerCase().includes(searchTerm))
      );
    }

    setFilteredProviders(filtered);
  };

  const handleSearch = (query) => {
    addToSearchHistory(query);
    filterProviders(query, '');
    setActiveQuery(query);
  };

  const handleHistoryClick = (query) => {
    handleSearch(query);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SearchBar 
        onSearch={handleSearch} 
        placeholder="Search providers, services..."
      />
      
      <div className="px-4">
        {/* Search History */}
        {!activeQuery && searchHistory.length > 0 && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Recent Searches</h3>
            <div className="space-y-2">
              {searchHistory.map((query, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleHistoryClick(query)}
                  className="flex items-center w-full p-3 bg-white rounded-xl border border-gray-100 hover:border-primary-200 transition-colors"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <SafeIcon icon={FiClock} className="w-4 h-4 text-gray-400 mr-3" />
                  <span className="text-gray-700">{query}</span>
                </motion.button>
              ))}
            </div>
          </motion.section>
        )}

        {/* Active Search Query */}
        {activeQuery && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 flex items-center justify-between"
          >
            <p className="text-gray-600">
              Showing results for "<span className="font-medium text-gray-900">{activeQuery}</span>"
            </p>
            <motion.button
              onClick={() => {
                setActiveQuery('');
                setFilteredProviders(providers);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-1 text-gray-400 hover:text-gray-600"
            >
              <SafeIcon icon={FiX} className="w-4 h-4" />
            </motion.button>
          </motion.div>
        )}

        {/* Results */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">
              {activeQuery ? 'Search Results' : 'All Providers'}
            </h2>
            <span className="text-gray-500 text-sm">
              {filteredProviders.length} found
            </span>
          </div>
          
          {filteredProviders.length > 0 ? (
            <div className="space-y-4 pb-6">
              {filteredProviders.map((provider, index) => (
                <ProviderCard 
                  key={provider.id} 
                  provider={provider} 
                  index={index}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiIcons.FiSearch} className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-500">
                Try adjusting your search terms or browse our categories
              </p>
            </motion.div>
          )}
        </motion.section>
      </div>
    </div>
  );
};

export default Search;