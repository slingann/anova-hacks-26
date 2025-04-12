import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="parallax">
      <div className="parallax__layer parallax__layer--back">
        <div className="h-screen flex items-center justify-center">
        </div>
      </div>

        <div className="min-h-screen">
          <div className="pt-32 pb-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center md:text-left"
                >
                  <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">ANova Hacks 2025</h1>
                  <p className="text-xl md:text-2xl text-white-200 mb-8">Berkeley ANova's annual hackathon for beginner hackers</p>
                  <button className="primary-button">
                    Submit Project
                  </button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full md:w-1/2"
                >
                  <img
                    src="/anovabot_with_little.png"
                    alt="Space"
                    className="rounded-lg w-full h-auto shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Rocket className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2 text-white-100">What is ANova Hacks?</h3>
              <p className="text-gray-400">
              ANova Hacks is ANova's annual free-of-charge hackathon for high school students from underserved communities. 
              We imagine a diverse tech environment where age, gender, and background do not limit one's ability to pursue computer science 
              — ANova Hacks aims to make that a reality. 
              We want to give students the skills and experience necessary to achieve their career aspirations, 
              and spread their ideas to the world through technology. 
              </p>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Sparkles className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2 text-white-100">The Hackathon Experience</h3>
              <p className="text-gray-400">
              Throughout the hackathon, experienced ANova mentors and industry professionals provide mentorship to hackers — 
              from project ideation, design, and implementation, to polishing the final product that will be showcased during the judging process. 
              Prizes will be awarded to the top teams in each category. 

              This is a great opportunity for our students to not only apply what they have been learning in the classroom, 
              but also be exposed to crucial skills used in industry and have a better understanding of life after high school.
              </p>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Users className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2 text-white-100">Our Students</h3>
              <p className="text-gray-400">ANova Hacks welcomes students who have little to no programming experience. 
              Computer science has always been more prevalent in communities with consistent access to computers and the tech industry. 
              ANova Hacks aims to empower our students despite the limits of their circumstance — 
              it is catered towards students from under-resourced schools to instill in them the belief that every one of them can change 
              the world through a college education and the power of technology. 
              </p>
            </motion.div>
          </div>
        </div>
      </div>
  );
};

export default Home;