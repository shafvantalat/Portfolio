import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <Code className="w-5 h-5 mr-2 text-blue-400" />
            <span className="text-lg font-semibold">Muhammed Shafvan</span>
          </div>
          
          <div className="flex items-center justify-center mb-4">
            <span className="text-gray-400">Made with</span>
            <Heart className="w-4 h-4 mx-2 text-red-500 animate-pulse" />
            <span className="text-gray-400">using React & TypeScript</span>
          </div>
          
          <div className="border-t border-gray-800 pt-4">
            <p className="text-gray-400 text-sm">
              © 2025 All rights reserved – Muhammed Shafvan
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};