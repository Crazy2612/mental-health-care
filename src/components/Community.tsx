import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Heart } from 'lucide-react';

const Community: React.FC = () => {
  const discussions = [
    {
      title: 'Dealing with Anxiety',
      author: 'Sarah M.',
      replies: 23,
      likes: 45,
      preview: "I've been struggling with anxiety lately and would love to hear how others cope..."
    },
    {
      title: 'Mindfulness Practice Tips',
      author: 'Michael R.',
      replies: 15,
      likes: 32,
      preview: 'Here are some mindfulness techniques that have really helped me...'
    },
    {
      title: 'Self-Care Routines',
      author: 'Emma L.',
      replies: 19,
      likes: 38,
      preview: "Let's share our daily self-care routines and inspire each other..."
    }
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">Community Support</h1>
        <p className="text-gray-600 dark:text-gray-300">Connect with others and share your journey</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6">
        {discussions.map((discussion, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{discussion.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Posted by {discussion.author}</p>
                <p className="text-gray-600 dark:text-gray-300">{discussion.preview}</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 mt-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <MessageSquare size={16} />
                <span>{discussion.replies} replies</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart size={16} />
                <span>{discussion.likes} likes</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
      >
        <MessageSquare size={24} />
      </motion.button>
    </div>
  );
};

export default Community;