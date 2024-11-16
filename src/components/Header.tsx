import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-50"
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold text-green-600 dark:text-green-400"
        >
          Faij Alam
        </motion.div>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:text-green-600 dark:hover:text-green-400">About</a></li>
          <li><a href="#skills" className="hover:text-green-600 dark:hover:text-green-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-green-600 dark:hover:text-green-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-green-600 dark:hover:text-green-400">Contact</a></li>
        </ul>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>
      </nav>
    </motion.header>
  );
};

export default Header;