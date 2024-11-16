import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Wanderlust',
    description: 'An Airbnb clone built with the MERN stack',
    image: 'https://source.unsplash.com/random/800x600/?travel',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: '#',
  },
  {
    title: 'DSA Visualizer',
    description: 'Interactive tool for visualizing data structures and algorithms',
    image: 'https://source.unsplash.com/random/800x600/?algorithm',
    technologies: ['React', 'TypeScript', 'D3.js'],
    link: '#',
  },
  // Add more projects here
];

const ProjectCard: React.FC<{
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}> = ({ title, description, image, technologies, link }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span key={tech} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
        <a
          href={link}
          className="text-green-600 dark:text-green-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;