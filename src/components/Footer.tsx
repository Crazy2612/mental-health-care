import React from 'react';
import { Heart, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-lg mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="text-purple-600 dark:text-purple-400" size={24} />
              <span className="text-xl font-bold text-purple-600 dark:text-purple-400">MindWell</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Your daily companion for mental well-being and personal growth.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Emergency Contacts</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <Phone size={16} />
                <span>Emergency: 911</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <Phone size={16} />
                <span>Crisis Hotline: 988</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/resources" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                  Resources
                </a>
              </li>
              <li>
                <a href="/community" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                  Community
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-300">
          <p>&copy; {new Date().getFullYear()} MindWell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;