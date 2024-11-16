import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, Calendar, Tag } from 'lucide-react';

const Journal: React.FC = () => {
  const [entry, setEntry] = useState('');
  const [mood, setMood] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle journal entry submission
    console.log({ entry, mood, tags });
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">Daily Journal</h1>
        <p className="text-gray-600 dark:text-gray-300">Express your thoughts and feelings freely</p>
      </motion.div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Calendar className="text-purple-600 dark:text-purple-400" size={20} />
              <span className="text-gray-600 dark:text-gray-300">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Tag className="text-purple-600 dark:text-purple-400" size={20} />
              <input
                type="text"
                placeholder="Add tags..."
                className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    const input = e.target as HTMLInputElement;
                    if (input.value.trim()) {
                      setTags([...tags, input.value.trim()]);
                      input.value = '';
                    }
                  }
                }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              How are you feeling?
            </label>
            <input
              type="text"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
              placeholder="Describe your mood..."
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Write your thoughts
            </label>
            <textarea
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
              rows={10}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 resize-none"
              placeholder="What's on your mind today?"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full flex items-center justify-center space-x-2 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            <Save size={20} />
            <span>Save Entry</span>
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Journal;