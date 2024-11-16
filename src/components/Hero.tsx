import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Add a background video or 3D animation here */}
      </div>
      <div className="text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl font-bold mb-4"
        >
          Hi, I'm Faij Alam
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl mb-8"
        >
          Full Stack Developer | MERN Specialist | DSA Enthusiast
        </motion.p>
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-600 text-white px-6 py-3 rounded-full inline-flex items-center"
        >
          View My Work <ArrowDown className="ml-2" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;