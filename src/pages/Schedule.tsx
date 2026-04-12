import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const Schedule = () => {
  const schedule = [
    {
      "day": "Saturday, April 11th, 2026",
      "events": [
        { "time": "4:00 PM", "title": "Registration", "description": "Check-in and get ready" },
        { "time": "4:30 PM", "title": "Opening Ceremony", "description": "Kick-off event with welcome speeches" },
        { "time": "5:00 PM", "title": "Team Building", "description": "Find your teammates and connect" },
        { "time": "5:30 PM", "title": "Hacking Starts", "description": "Begin your project" },
        { "time": "5:30 PM", "title": "Ideation Workshop", "description": "Gain advice on how to start your project" },
        { "time": "6:30 PM", "title": "Dinner", "description": "Pizza and salad to refuel for the night ahead" },
        { "time": "7:00 PM", "title": "Design Workshop", "description": "Learn about human-centered design with Berkeley Innovation" },
        { "time": "8:00 PM", "title": "Data Science Workshop", "description": " Learn to analyze and visualize data with Big Data at Berkeley" },
        { "time": "9:00 PM", "title": "Machine Learning Workshop", "description": "Dive into ML concepts with Machine Learning at Berkeley" },
        { "time": "10:00 PM", "title": "Web Development Workshop", "description": "Learn to build web applications with ANova and Lovable" },
        { "time": "11:00 PM", "title": "Python Workshop", "description": "Learn about Python" },
        { "time": "12:00 AM", "title": "Late Night Festivities", "description": "Unwind and have fun with snacks and games" }
      ]
    },
    {
      "day": "Sunday, April 12th, 2026",
      "events": [
        { "time": "8:00 AM", "title": "Breakfast", "description": "Croissants, muffins, and fruit to prep for the day ahead" },
        { "time": "11:00 AM", "title": "Hacking Ends", "description": "Submit your final projects" },
        { "time": "11:00 PM", "title": "College Prep/Professional Development Workshop", "description": "Guidance for college apps, networking, resumes, etc." },
        { "time": "12:00 PM", "title": "Lunch", "description": "Sandwiches after a morning of hacking" },
        { "time": "12:30 PM", "title": "URM Panel", "description": "Discussion with underrepresented minorities in tech" },
        { "time": "1:15 PM", "title": "Presentations", "description": "Showcase your projects to other hackers and mentors" },
        { "time": "2:30 PM", "title": "Closing Ceremony", "description": "Awards, wrap-up, and clean up" },
        { "time": "4:00 PM", "title": "Farewell", "description": "See you next year!" }
      ]
    }
  ]

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
      <motion.div
        className="flex items-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Calendar className="w-8 h-8 mr-3 text-blue-400" />
        <h1 className="text-4xl font-bold">Event Schedule</h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {schedule.map((day, dayIndex) => (
          <motion.div
            key={day.day}
            className="card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={dayIndex}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-6">{day.day}</h2>
            <div className="space-y-6">
              {day.events.map((event, eventIndex) => (
                <motion.div
                  key={event.time}
                  className="flex items-start"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  custom={eventIndex + 2}
                  viewport={{ once: true }}
                >
                  <div className="w-24 flex-shrink-0">
                    <span className="text-[#9DD4DB]">{event.time}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="text-gray-400 text-sm">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
