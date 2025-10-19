import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Globe, Server, Smartphone, Palette } from 'lucide-react';

export const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: [
        { name: "Python", level: 0 },
        { name: "JavaScript", level: 0 },
        { name: "TypeScript", level: 0 }
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frontend",
      icon: Globe,
      skills: [
        { name: "HTML/CSS", level: 0 },
        { name: "Tailwind CSS", level: 0 },
        { name: "React", level: 0}
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", level: 0 },
        { name: "Express.js", level: 0 },
        { name: "REST APIs", level: 0 }
      ],
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Tools & Hosting",
      icon: Database,
      skills: [
        { name: "Git & GitHub", level: 0 },
        { name: "Netlify", level: 0 },
        { name: "Render", level: 0 }
      ],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-rotate-1"
              style={{
                transformStyle: 'preserve-3d',
              }}
              whileHover={{
                rotateY: -5,
                rotateX: 5,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-50 dark:to-purple-900 opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
              <div className="text-center mb-6">
                <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${category.gradient} text-white mb-3 transform hover:scale-110 hover:rotate-12 transition-all duration-300`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className={`h-2 bg-gradient-to-r ${category.gradient} rounded-full transform hover:scale-y-150 transition-transform duration-200`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};