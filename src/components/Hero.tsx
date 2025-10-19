import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code, Mail } from 'lucide-react';
import { TypingAnimation } from './TypingAnimation';
import { ParticleBackground } from './ParticleBackground';
import { useMobileOptimization } from '../hooks/useMobileOptimization';

interface HeroProps {
  theme: 'light' | 'dark';
}

export const Hero: React.FC<HeroProps> = ({ theme }) => {
  const { mobileAnimationVariants, mobileHoverVariants } = useMobileOptimization();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <ParticleBackground theme={theme} />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gradient-to-r from-pink-400 to-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
      </div>
      
      <motion.div
        initial={mobileAnimationVariants.initial}
        animate={mobileAnimationVariants.animate}
        transition={mobileAnimationVariants.transition}
        className="text-center z-10 px-4 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
            <Code className="w-16 h-16 text-white" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4"
        >
          Muhammed Shafvan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light"
        >
          <TypingAnimation 
            strings={[
              "Computer Science Student",
              "Aspiring Web Developer", 
              "Full-Stack Developer",
              "Frontend Enthusiast",
              "Backend Enthusiast",
              "React Enthusiast",
              "Problem Solver"
            ]}
          />
        </motion.p>

        <motion.div
          initial={mobileAnimationVariants.initial}
          animate={mobileAnimationVariants.animate}
          transition={{ ...mobileAnimationVariants.transition, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-full hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-gray-900 transition-all duration-300 flex items-center gap-2"
            whileHover={mobileHoverVariants.hover}
            whileTap={mobileHoverVariants.tap}
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 z-10"
      >
        <ChevronDown className="w-8 h-8 text-gray-600 dark:text-gray-400" />
      </motion.div>
    </section>
  );
};