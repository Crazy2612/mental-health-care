import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <img
              src="https://source.unsplash.com/random/400x400/?developer"
              alt="Faij Alam"
              className="rounded-full w-64 h-64 object-cover mx-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2"
          >
            <p className="text-lg mb-4">
              I'm a passionate Full Stack Developer specializing in the MERN stack. With a strong foundation in Data Structures and Algorithms, I create clean, efficient, and scalable web solutions.
            </p>
            <p className="text-lg mb-4">
              My experience includes leading projects like Wanderlust, an Airbnb clone, where I implemented complex features using MongoDB, Express, React, and Node.js.
            </p>
            <p className="text-lg">
              I'm dedicated to writing quality code and creating interactive web experiences that make a difference. Let's build something amazing together!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;