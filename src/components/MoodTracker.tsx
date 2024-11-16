import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smile, Meh, Frown, Sun, Cloud, CloudRain, Wind } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MoodTracker: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [selectedFactors, setSelectedFactors] = useState<string[]>([]);

  const moods = [
    { value: 5, icon: <Smile className="text-green-500" size={32} />, label: 'Great' },
    { value: 3, icon: <Meh className="text-yellow-500" size={32} />, label: 'Okay' },
    { value: 1, icon: <Frown className="text-red-500" size={32} />, label: 'Not Good' },
  ];

  const factors = [
    { icon: <Sun size={24} />, label: 'Sleep' },
    { icon: <Cloud size={24} />, label: 'Stress' },
    { icon: <CloudRain size={24} />, label: 'Exercise' },
    { icon: <Wind size={24} />, label: 'Social' },
  ];

  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Mood Level',
        data: [4, 3, 5, 2, 4, 5, selectedMood || 3],
        borderColor: 'rgb(147, 51, 234)',
        tension: 0.3,
      },
    ],
  };

  const toggleFactor = (factor: string) => {
    setSelectedFactors(prev =>
      prev.includes(factor)
        ? prev.filter(f => f !== factor)
        : [...prev, factor]
    );
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">How are you feeling today?</h1>
        <p className="text-gray-600 dark:text-gray-300">Track your mood and identify patterns in your mental well-being</p>
      </motion.div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Select your mood</h2>
        <div className="flex justify-center space-x-8 mb-8">
          {moods.map((mood) => (
            <motion.button
              key={mood.value}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedMood(mood.value)}
              className={`flex flex-col items-center p-4 rounded-lg transition-colors ${
                selectedMood === mood.value
                  ? 'bg-purple-100 dark:bg-purple-900'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {mood.icon}
              <span className="mt-2 text-gray-600 dark:text-gray-300">{mood.label}</span>
            </motion.button>
          ))}
        </div>

        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Contributing factors</h2>
        <div className="flex flex-wrap gap-4 mb-8">
          {factors.map((factor) => (
            <motion.button
              key={factor.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleFactor(factor.label)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                selectedFactors.includes(factor.label)
                  ? 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
              }`}
            >
              {factor.icon}
              <span>{factor.label}</span>
            </motion.button>
          ))}
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Notes</h2>
          <textarea
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            rows={4}
            placeholder="Add any additional notes about your day..."
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
        >
          Save Entry
        </motion.button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Weekly Mood Trends</h2>
        <div className="h-64">
          <Line data={chartData} options={{ maintainAspectRatio: false }} />
        </div>
      </div>
    </div>
  );
};

export default MoodTracker;