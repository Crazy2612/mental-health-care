import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface GitHubData {
  publicRepos: number;
  followers: number;
  contributions: number;
}

const GitHub: React.FC = () => {
  const [githubData, setGithubData] = useState<GitHubData | null>(null);

  useEffect(() => {
    // Fetch GitHub data here
    // For now, we'll use mock data
    setGithubData({
      publicRepos: 15,
      followers: 50,
      contributions: 500,
    });
  }, []);

  if (!githubData) return null;

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          GitHub Activity
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold mb-2">Public Repositories</h3>
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">
              {githubData.publicRepos}
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold mb-2">Followers</h3>
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">
              {githubData.followers}
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold mb-2">Contributions (Last Year)</h3>
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">
              {githubData.contributions}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GitHub;