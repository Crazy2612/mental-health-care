import React from 'react';
import { motion } from 'framer-motion';

const Leadership: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Leadership Experience
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4">Tug-of-War Team Captain</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            As the captain of my college's tug-of-war team, I led our group to victory in a high-stakes competition. This experience taught me valuable lessons in teamwork, strategy, and performing under pressure.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Key takeaways:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4">
            <li>Effective communication in high-stress situations</li>
            <li>Motivating team members to perform at their best</li>
            <li>Quick decision-making and adapting strategies on the fly</li>
            <li>Building team cohesion and trust</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;