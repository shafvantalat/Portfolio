import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Code, MessageCircle, ShoppingCart } from 'lucide-react';
import { title } from 'framer-motion/client';

export const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React, TypeScript, and Vite. Features smooth animations, dark/light theme toggle, and mobile-first design.",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
      icon: Code,
      status: "Completed",
      gradient: "from-blue-500 to-purple-600",
      demo: "https://shafvanxv.netlify.app",
      github: "https://github.com/shafvantalat/portfolio"
    },
    {
      title: "Global Chat App",
      description: "An interactive chat application that allows users to communicate with worldwide users in real-time. Built with vanilla JavaScript and local storage for message persistence.",
      tech: ["JavaScript", "HTML", "CSS", "Local Storage"],
      icon: MessageCircle,
      status: "Completed",
      gradient: "from-green-500 to-teal-600",
      demo: "https://globalchatbyshafvan.netlify.app",
      github: "https://github.com/shafvantalat/customer-chat"
    },
    {
      title: "Full-stack E-commerce Platform for Clothing Store",
      description: "Comprehensive clothing e-commerce platform with database, and order through whatsapp. with admin panel to manage products, orders, and inventory.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      icon: ShoppingCart,
      status: "In Progress",
      gradient: "from-orange-500 to-red-600",
      demo: "https://collectionsbyshafvan.netlify.app/",
      github: "https://github.com/shafvantalat/E-Commerce"
    },
    {
      title: "Weather App",
      description: "A sleek weather application that fetches real-time weather data from a public API and displays it with dynamic backgrounds based on weather conditions.",
      tech: ["React", "TypeScript", "CSS", "OpenWeatherMap API"],
      icon: Code,
      status: "Completed",
      gradient: "from-blue-400 to-indigo-600",
      demo: "https://weatherspherebyshafvan.netlify.app/",
      github: "/ad"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've been working on, showcasing my skills in web development and programming.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:scale-105 hover:rotate-1"
              style={{
                transformStyle: 'preserve-3d',
              }}
              whileHover={{
                rotateY: 5,
                rotateX: 5,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-8 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50 dark:to-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${project.gradient} text-white transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                    <project.icon className="w-6 h-6" />
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 transform hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};