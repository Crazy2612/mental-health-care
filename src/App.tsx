import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import MoodTracker from './components/MoodTracker';
import Journal from './components/Journal';
import Resources from './components/Resources';
import Community from './components/Community';
import ChatSupport from './components/ChatSupport';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
      >
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/mood" element={<MoodTracker />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/community" element={<Community />} />
            <Route path="/chat" element={<ChatSupport />} />
          </Routes>
        </main>
        <Footer />
      </motion.div>
    </Router>
  );
};

export default App;