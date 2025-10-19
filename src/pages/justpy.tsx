import React from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";
import { Footer } from "../components/Footer";
import { AboutModal } from "./components/AboutModal";

const JustPy = () => {
  const [isAboutModalOpen, setIsAboutModalOpen] = React.useState(false);

  const handleAboutClick = () => setIsAboutModalOpen(true);
  const handleCloseModal = () => setIsAboutModalOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="p-6 bg-white rounded-full shadow-lg">
              <Code className="w-12 h-12 text-blue-600" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            It's a Python file,
            <br />
            <span className="text-blue-600">there is nothing to visit</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            This file contains Python code and is not meant to be accessed through a web browser.
          </p>

          {/* Buttons Row */}
          <div className="flex justify-center gap-4">
            {/* Existing Button */}
            <motion.a
              href="/404"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-sm border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider group-hover:text-blue-600 transition-colors duration-300">
                <span className="group-hover:hidden">.py file detected</span>
                <span className="hidden group-hover:inline">view code on GitHub</span>
              </span>
            </motion.a>

            {/* New Button */}
            <motion.a
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full shadow-sm hover:bg-blue-700 hover:shadow-lg transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-sm font-medium uppercase tracking-wider">
                Go Home
              </span>
            </motion.a>
          </div>
        </div>
      </div>

      <Footer onAboutClick={handleAboutClick} />
      <AboutModal isOpen={isAboutModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default JustPy;
