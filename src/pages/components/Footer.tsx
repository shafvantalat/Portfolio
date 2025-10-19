import React from 'react';
import { motion } from 'framer-motion';
import { Github, Heart, Code } from 'lucide-react';

interface FooterProps {
  onAboutClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onAboutClick }) => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200/20 dark:border-gray-700/20 mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <span>© 2025 All rights reserved to</span>
            <span className="font-semibold text-gray-900 dark:text-gray-100">Muhammed Shafvan</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={onAboutClick}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Code className="w-4 h-4" />
              <span>About Developer</span>
            </motion.button>
            
            <motion.a
              href="https://github.com/shafvantalat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </motion.a>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center space-x-1">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-red-500 fill-current" />
            <span>using React, TypeScript & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};