import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import Search from './pages/Search';
import Categories from './pages/Categories';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProviderDetail from './pages/ProviderDetail';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Layout>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/provider/:id" element={<ProviderDetail />} />
              </Routes>
            </motion.div>
          </Layout>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;