import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Instagram, Github, Linkedin, MessageCircle, MapPin } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { ResumeDownload } from './ResumeDownload';
import { useMobileOptimization } from '../hooks/useMobileOptimization';

export const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const { mobileAnimationVariants, mobileHoverVariants } = useMobileOptimization();

  const contactMethods = [
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+91 9746078283",
      link: "https://wa.me/919746078283",
      gradient: "from-green-400 to-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      value: "muhammedshafvan269@gmail.com",
      link: "mailto:muhammedshafvan269@gmail.com",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@shafvantalat_",
      link: "https://instagram.com/shafvantalat_",
      gradient: "from-pink-400 to-purple-600"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "shafvantalat",
      link: "https://github.com/shafvantalat",
      gradient: "from-gray-700 to-gray-900"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Muhammed Shafvan",
      link: "https://www.linkedin.com/in/muhammed-shafvan-121585215/",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      icon: MessageCircle,
      title: "Direct Message",
      value: "Send me a message anytime!",
      link: "/t",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={mobileAnimationVariants.initial}
              animate={inView ? mobileAnimationVariants.animate : {}}
              transition={{ ...mobileAnimationVariants.transition, delay: index * 0.1 }}
              whileHover={mobileHoverVariants.hover}
              whileTap={mobileHoverVariants.tap}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2 hover:scale-105 hover:rotate-1"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-indigo-50 dark:to-indigo-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
              <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${method.gradient} text-white mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10`}>
                <method.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 relative z-10 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {method.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 break-all relative z-10">
                {method.value}
              </p>
            </motion.a>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <ContactForm inView={inView} />
          <ResumeDownload inView={inView} />
        </div>

        <motion.div
          initial={mobileAnimationVariants.initial}
          animate={inView ? mobileAnimationVariants.animate : {}}
          transition={{ ...mobileAnimationVariants.transition, delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <MapPin className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Location
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Kasaragod, Kerala, India
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Currently studying at GVHSS Iriyanni
          </p>
        </motion.div>
      </div>
    </section>
  );
};