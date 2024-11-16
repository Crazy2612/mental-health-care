import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Video, Headphones, Download } from 'lucide-react';

const resources = [
  {
    title: 'Understanding Anxiety',
    type: 'article',
    icon: <BookOpen size={24} />,
    description: 'Learn about the different types of anxiety and coping strategies.',
    link: '#'
  },
  {
    title: 'Mindfulness Meditation',
    type: 'video',
    icon: <Video size={24} />,
    description: 'A guided 10-minute meditation session for beginners.',
    link: '#'
  },
  {
    title: 'Stress Management',
    type: 'podcast',
    icon: <Headphones size={24} />,
    description: 'Expert tips on managing daily stress and building resilience.',
    link: '#'
  },
  {
    title: 'Self-Care Workbook',
    type: 'download',
    icon: <Download size={24} />,
    description: 'A comprehensive guide to developing healthy self-care habits.',
    link: '#'
  }
];

const Resources: React.FC = () => {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">Mental Health Resources</h1>
        <p className="text-gray-600 dark:text-gray-300">Explore our collection of helpful resources</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg text-purple-600 dark:text-purple-400">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{resource.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{resource.description}</p>
              <a
                href={resource.link}
                className="inline-flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:underline"
              >
                <span>Learn more</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Resources;