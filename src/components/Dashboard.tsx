import React from 'react';
import { motion } from 'framer-motion';
import { Heart, BarChart2, Book, Users, MessageCircle, SunMoon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold text-purple-600 dark:text-purple-400">Welcome to MindWell</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Your daily companion for mental well-being</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <DashboardCard
          to="/mood"
          icon={<BarChart2 className="text-blue-500" size={32} />}
          title="Track Your Mood"
          description="Log your daily emotions and track your mental well-being journey."
        />
        <DashboardCard
          to="/journal"
          icon={<Book className="text-green-500" size={32} />}
          title="Daily Journal"
          description="Express your thoughts and feelings in a safe, private space."
        />
        <DashboardCard
          to="/resources"
          icon={<Heart className="text-red-500" size={32} />}
          title="Mental Health Resources"
          description="Access helpful articles, videos, and exercises."
        />
        <DashboardCard
          to="/community"
          icon={<Users className="text-purple-500" size={32} />}
          title="Join Community"
          description="Connect with others and share experiences in a supportive environment."
        />
        <DashboardCard
          to="/chat"
          icon={<MessageCircle className="text-yellow-500" size={32} />}
          title="Chat Support"
          description="Get immediate support from our AI-powered chat assistant."
        />
        <DashboardCard
          to="/meditation"
          icon={<SunMoon className="text-indigo-500" size={32} />}
          title="Guided Meditation"
          description="Practice mindfulness with guided meditation sessions."
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
      >
        <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">Daily Inspiration</h2>
        <p className="text-gray-600 dark:text-gray-300 italic">
          "The greatest glory in living lies not in never falling, but in rising every time we fall."
        </p>
        <p className="text-gray-500 dark:text-gray-400 mt-2">- Nelson Mandela</p>
      </motion.div>
    </div>
  );
};

interface DashboardCardProps {
  to: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ to, icon, title, description }) => {
  return (
    <Link to={to}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
      >
        <div className="flex items-center mb-4">
          {icon}
          <h2 className="text-xl font-semibold ml-3 text-gray-800 dark:text-gray-200">{title}</h2>
        </div>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </motion.div>
    </Link>
  );
};

export default Dashboard;