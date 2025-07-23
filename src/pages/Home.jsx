import React from 'react';
import { motion } from 'framer-motion';
import SearchBar from '../components/SearchBar';
import ProviderCard from '../components/ProviderCard';
import CategoryCard from '../components/CategoryCard';
import { featuredProviders, categories } from '../data/providers';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleSearch = (query) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  const handleCategoryClick = (category) => {
    navigate(`/search?category=${category.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SearchBar onSearch={handleSearch} />
      
      <div className="px-4 space-y-6">
        {/* Featured Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Featured</h2>
            <button 
              onClick={() => navigate('/search')}
              className="text-primary-600 text-sm font-medium"
            >
              See all
            </button>
          </div>
          
          <div className="space-y-4">
            {featuredProviders.map((provider, index) => (
              <ProviderCard 
                key={provider.id} 
                provider={provider} 
                index={index}
              />
            ))}
          </div>
        </motion.section>

        {/* Categories Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Categories</h2>
            <button 
              onClick={() => navigate('/categories')}
              className="text-primary-600 text-sm font-medium"
            >
              See all
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {categories.slice(0, 4).map((category, index) => (
              <CategoryCard 
                key={category.id} 
                category={category} 
                index={index}
                onClick={handleCategoryClick}
              />
            ))}
          </div>
        </motion.section>

        {/* Quick Actions */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-6 text-white"
        >
          <h3 className="text-lg font-semibold mb-2">Need something specific?</h3>
          <p className="text-primary-100 mb-4">
            Can't find what you're looking for? Let us help you connect with the right provider.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-primary-600 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
          >
            Get Help
          </motion.button>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;