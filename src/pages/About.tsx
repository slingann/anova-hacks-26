import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="page-container pt-24">
      <motion.h1 
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About ANovahacks
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <motion.div
          className="card"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-400">
            ANovahacks is Berkeley ANova's premier hackathon designed specifically for first-time high school hackers. 
            Our mission is to introduce students to the exciting world of technology and innovation while fostering 
            creativity, collaboration, and problem-solving skills.
          </p>
        </motion.div>
        
        <motion.div
          className="card"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4">Why ANovahacks?</h2>
          <p className="text-gray-400">
            We believe that every student deserves the opportunity to explore technology in a supportive environment. 
            Our hackathon provides mentorship, workshops, and resources to help you bring your ideas to life, 
            regardless of your prior experience.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          className="card text-center"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <GraduationCap className="w-12 h-12 mx-auto mb-4 text-blue-400" />
          <h3 className="text-xl font-semibold mb-2">Learning Focus</h3>
          <p className="text-gray-400">Workshops and mentorship from Berkeley students</p>
        </motion.div>

        <motion.div
          className="card text-center"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          custom={3}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <Heart className="w-12 h-12 mx-auto mb-4 text-blue-400" />
          <h3 className="text-xl font-semibold mb-2">Inclusive Community</h3>
          <p className="text-gray-400">Welcoming environment for all skill levels</p>
        </motion.div>

        <motion.div
          className="card text-center"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          custom={4}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <Lightbulb className="w-12 h-12 mx-auto mb-4 text-blue-400" />
          <h3 className="text-xl font-semibold mb-2">Innovation</h3>
          <p className="text-gray-400">Resources and materials to spark creativity</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;