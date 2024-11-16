import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Heart, BookOpen, Users, MessageCircle, BarChart2, Book } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', icon: <Heart size={20} />, label: 'Dashboard' },
    { path: '/mood', icon: <BarChart2 size={20} />, label: 'Mood Tracker' },
    { path: '/journal', icon: <Book size={20} />, label: 'Journal' },
    { path: '/resources', icon: <BookOpen size={20} />, label: 'Resources' },
    { path: '/community', icon: <Users size={20} />, label: 'Community' },
    { path: '/chat', icon: <MessageCircle size={20} />, label: 'Chat Support' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="text-purple-600 dark:text-purple-400" size={24} />
            <span className="text-xl font-bold text-purple-600 dark:text-purple-400">MindWell</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium ${
                  location.pathname === item.path
                    ? 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;