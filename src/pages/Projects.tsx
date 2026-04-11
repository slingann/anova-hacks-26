import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Globe, Gamepad, Palette, Leaf, GraduationCap, Heart, CircuitBoard } from 'lucide-react';

const Projects = () => {
  const tracks = [
    {
      name: "Education",
      icon: <GraduationCap className="w-12 h-12" />,
      description: "Create innovative solutions to enhance learning experiences and make education more accessible.",
      color: "from-blue-500 to-purple-500"
    },
    {
      name: "Environmental",
      icon: <Leaf className="w-12 h-12" />,
      description: "Develop projects that address environmental challenges and promote sustainability.",
      color: "from-green-500 to-teal-500"
    },
    {
      name: "Social Good",
      icon: <Heart className="w-12 h-12" />,
      description: "Build solutions that make a positive impact on communities and society.",
      color: "from-red-500 to-pink-500"
    }
  ];

  const challenges = [
    {
      name: "Best Website",
      icon: <Globe className="w-8 h-8" />,
      description: "Create an innovative and user-friendly website",
      //prize: ""
    },
    {
      name: "Best Design",
      icon: <Palette className="w-8 h-8" />,
      description: "Show off your creativity and design skills",
      //prize: "$"
    },
    {
      name: "Silliest/Funniest",
      icon: <Gamepad className="w-8 h-8" />,
      description: "Create a project that makes us laugh",
      //prize: "$"
    },
    {
      name: "Most Informative",
      icon: <BookOpen className="w-8 h-8" />,
      description: "Design a project intended to educate or inform users",
      //prize: "$"
    }
  ];

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
        className="text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Project Inspiration and Prize Tracks
      </motion.h1>

      <motion.h2
        className="text-2xl font-semibold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Consider Building Projects Related To...
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {tracks.map((track, index) => (
          <motion.div
            key={track.name}
            className="card overflow-hidden relative"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-10 rounded-xl`} />
            <div className="relative z-10">
              <div className="text-blue-400 mb-4">{track.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{track.name}</h3>
              <p className="text-gray-400">{track.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.h2
        className="text-2xl font-semibold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Prize Tracks
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {challenges.map((challenge, index) => (
          <motion.div
            key={challenge.name}
            className="card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={index + 3}
            viewport={{ once: true }}
          >
            <div className="text-blue-400 mb-4">{challenge.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{challenge.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{challenge.description}</p>
          </motion.div>
        ))}
      </div>
      

      <motion.div
        className="card mt-12"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        custom={7}
        viewport={{ once: true }}
      >
        
        <h2 className="text-2xl font-semibold mb-4">Judging Criteria</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Innovation</h3>
            <p className="text-gray-400 text-sm">Uniqueness and creativity of the solution</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Technical Difficulty</h3>
            <p className="text-gray-400 text-sm">Complexity and implementation</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Impact</h3>
            <p className="text-gray-400 text-sm">Potential to create positive change</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Presentation</h3>
            <p className="text-gray-400 text-sm">Quality of demo and pitch</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
