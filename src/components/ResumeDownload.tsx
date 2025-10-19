import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, ExternalLink } from 'lucide-react';

interface ResumeDownloadProps {
  inView: boolean;
}

export const ResumeDownload: React.FC<ResumeDownloadProps> = ({ inView }) => {
  const handleDownload = () => {
    // Create a sample resume content (in a real app, you'd have an actual PDF file)
    const resumeContent = `
MUHAMMED SHAFVAN MN
Computer Science Student & Aspiring Web Developer
Kasaragod, Kerala, India
Email: muhammedshafvan269@gmail.com
Phone: +91 9746078283

EDUCATION
• +1 & +2 Computer Science - GVHSS Iriyanni (Current)
• 8th – 10th grade - GHSS Cherkala (2019-2022)
• Primary – 7th grade - PBM English Medium School, Nellikkatta (2012-2019)

TECHNICAL SKILLS
• Languages: C++, JavaScript, TypeScript
• Frontend: React, HTML, CSS, Tailwind CSS
• Backend: Node.js, Express.js
• Tools: Git, GitHub, Vite
• Hosting: Netlify, Render

PROJECTS
• Portfolio Website - Modern responsive portfolio with React & TypeScript
• Customer Chat Page - Interactive chat application with message sorting
• E-commerce Platform - Full-stack application with authentication (In Progress)

INTERESTS
• Python Programming
• Web Development
• Gaming (PUBG)
• Problem Solving
• Learning New Technologies
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Muhammed_Shafvan_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleViewOnline = () => {
    // In a real app, this would open a PDF viewer or dedicated resume page
    window.open('https://shafvan-portfolio.netlify.app', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg text-center"
    >
      <div className="flex items-center justify-center mb-4">
        <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white">
          <FileText className="w-8 h-8" />
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        Download My Resume
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Get a detailed overview of my skills, education, and projects
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <motion.button
          onClick={handleDownload}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download className="w-5 h-5" />
          Download PDF
        </motion.button>

        <motion.button
          onClick={handleViewOnline}
          className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-gray-900 transform hover:scale-105 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ExternalLink className="w-5 h-5" />
          View Online
        </motion.button>
      </div>

      <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
        <p>Last updated: January 2025</p>
      </div>
    </motion.div>
  );
};