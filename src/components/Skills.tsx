import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'Express', level: 80 },
  { name: 'MongoDB', level: 85 },
  { name: 'JavaScript', level: 95 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'Git', level: 85 },
  { name: 'Data Structures', level: 80 },
  { name: 'Algorithms', level: 80 },
];

const SkillBar: React.FC<{ name: string; level: number }> = ({ name, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <motion.div
          className="bg-green-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;