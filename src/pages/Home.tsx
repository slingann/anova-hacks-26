import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, Users, Clock } from 'lucide-react'; // ✅ Fix: Added Clock

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const deadline = new Date('2025-04-13T12:00:00-07:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = deadline - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="parallax">
      <div className="parallax__layer parallax__layer--back">
        <div className="h-screen flex items-center justify-center" />
      </div>
  
      <div className="min-h-screen">
        {/* Project Deadline Section — moved to top */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pt-32 mb-24"
        >
          <div className="card p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-6 h-6 text-white-400" />
              <h2 className="text-2xl font-semibold text-white-200">
                Project Submission Deadline
              </h2>
            </div>
  
            <div className="grid grid-cols-4 gap-4">
              {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, i) => (
                <div className="text-center" key={label}>
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {Object.values(timeLeft)[i]}
                  </div>
                  <div className="text-gray-400 text-sm">{label}</div>
                </div>
              ))}
            </div>
  
            <p className="text-center text-white-100/80 mt-4">
              Projects due by <strong>12:00 PM PDT</strong> on <strong>Sunday, April 13th, 2025</strong>
            </p>
  
            <div className="flex justify-center mt-6">
              <button
                className="primary-button"
                onClick={() => window.open('https://forms.gle/rBrXJ9JbKcGjasud9', '_blank')}
              >
                Submit Project
              </button>
            </div>
          </div>
        </motion.div> */}
  
        {/* Header */}
        <div className="pb-16">
          <div className="max-w-7xl mx-auto px-4 pt-24">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center md:text-left"
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">ANova Hacks 2025</h1>
                <p className="text-xl md:text-2xl text-white-200 mb-8">
                  Berkeley ANova's annual hackathon for beginner hackers
                </p>
              </motion.div>
  
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-1/2"
              >
                <img
                  src="/anovabot_with_little.png"
                  alt="ANova Bot"
                  className="rounded-lg w-full h-auto shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{
            icon: Rocket,
            title: "What is ANova Hacks?",
            desc: `ANova Hacks is ANova's annual free-of-charge hackathon for high school students from underserved communities. 
              We imagine a diverse tech environment where age, gender, and background do not limit one's ability to pursue computer science — 
              ANova Hacks aims to make that a reality.`,
          },
          {
            icon: Sparkles,
            title: "The Hackathon Experience",
            desc: `Experienced ANova mentors and industry professionals guide hackers through ideation, design, and development. 
              Prizes will be awarded, and students will gain insight into real-world skills beyond high school.`,
          },
          {
            icon: Users,
            title: "Our Students",
            desc: `We welcome beginners! ANova Hacks is built for students from under-resourced schools to empower them 
              with the belief that they can change the world with education and technology.`,
          }].map((card, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <card.icon className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2 text-white-100">{card.title}</h3>
              <p className="text-gray-400 whitespace-pre-line">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
