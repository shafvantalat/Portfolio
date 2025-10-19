import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Gamepad2 } from 'lucide-react';

export const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const educationData = [
    {
      school: "GVHSS Iriyanni",
      level: "+1 & +2 Computer Science",
      status: "Ongoing",
      period: "Current"
    },
    {
      school: "GHSS Cherkala",
      level: "8th – 10th grade",
      status: "Completed",
      period: "2019-2022"
    },
    {
      school: "PBM English Medium School, Nellikkatta",
      level: "Primary – 7th grade",
      status: "Completed",
      period: "2012-2019"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I am Muhammed Shafvan MN, a passionate developer exploring the world of programming and web technologies. I specialize in Python, React and TypeScript, with experience building projects using React, Vite, and modern tools.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="transform hover:scale-105 transition-all duration-300"
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-rotate-1"
                 style={{ transformStyle: 'preserve-3d' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50 dark:to-blue-900 opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-blue-600 mr-3 transform hover:scale-110 hover:rotate-12 transition-all duration-300" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
              </div>
              <div className="space-y-6">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="border-l-4 border-blue-600 pl-4"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white">{edu.school}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{edu.level}</p>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {edu.status} • {edu.period}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-rotate-1"
                 style={{ transformStyle: 'preserve-3d' }}>
              <div className="flex items-center mb-4">
                <Gamepad2 className="w-6 h-6 text-green-600 mr-3 transform hover:scale-110 hover:rotate-12 transition-all duration-300" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Interests</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Python Programming', link: 'https://www.python.org/' },
                  { name: 'Gaming', link: 'https://store.steampowered.com/' },
                  { name: 'Web Development', link: 'https://developer.mozilla.org/en-US/docs/Learn' },
                  { name: 'Learning New Technologies', link: 'https://www.youtube.com/@freecodecamp' },
                  { name: 'Problem Solving', link: 'https://leetcode.com/' },
                  { name: 'Backend Development', link: 'https://nodejs.org/' }
                ].map((interest, index) => (
                  <motion.a
                    key={index}
                    href={interest.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: -2 }}
                    className="px-3 py-1 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium transition-all duration-200 hover:bg-blue-100 dark:hover:bg-gray-500 cursor-pointer inline-block"
                  >
                    {interest.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};