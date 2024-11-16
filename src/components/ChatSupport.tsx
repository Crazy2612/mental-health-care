import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot } from 'lucide-react';

const ChatSupport: React.FC = () => {
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "Hi! I'm here to support you. How are you feeling today?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { text: input, isBot: false }]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "I hear you. Would you like to tell me more about that?",
        isBot: true
      }]);
    }, 1000);
  };

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">Chat Support</h1>
        <p className="text-gray-600 dark:text-gray-300">Talk to our AI assistant for immediate support</p>
      </motion.div>

      <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col">
        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-lg ${
                  message.isBot
                    ? 'bg-gray-100 dark:bg-gray-700'
                    : 'bg-purple-100 dark:bg-purple-900'
                }`}
              >
                {message.isBot && (
                  <div className="flex items-center space-x-2 mb-2">
                    <Bot size={20} className="text-purple-600 dark:text-purple-400" />
                    <span className="font-semibold text-purple-600 dark:text-purple-400">AI Assistant</span>
                  </div>
                )}
                <p className="text-gray-800 dark:text-gray-200">{message.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex space-x-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Send size={20} />
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default ChatSupport;