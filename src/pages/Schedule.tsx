import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const Schedule = () => {
  const schedule = [
    {
      "day": "Saturday, April 12th, 2025",
      "events": [
        { "time": "4:00 PM", "title": "Registration", "description": "Check-in and get ready" },
        { "time": "4:30 PM", "title": "Opening Ceremony", "description": "Kick-off event with welcome speeches" },
        { "time": "5:00 PM", "title": "Team Building", "description": "Find your teammates and connect" },
        { "time": "5:30 PM", "title": "Hacking Starts", "description": "Begin your project" },
        { "time": "5:30 PM", "title": "Design Workshop", "description": "Learn about innovative design" },
        { "time": "5:30 PM", "title": "Arduino Workshop", "description": "Explore hardware programming" },
        { "time": "6:30 PM", "title": "Dinner", "description": "Refuel for the night ahead" },
        { "time": "7:00 PM", "title": "Web Development Workshop", "description": "Build web applications" },
        { "time": "8:00 PM", "title": "Python Workshop", "description": "Enhance your Python skills" },
        { "time": "9:00 PM", "title": "Data Science Workshop", "description": "Analyze and visualize data" },
        { "time": "10:00 PM", "title": "Machine Learning Workshop", "description": "Dive into ML concepts" },
        { "time": "11:00 PM", "title": "App Development Workshop", "description": "Create mobile apps" },
        { "time": "12:00 AM", "title": "Late Night Festivities", "description": "Unwind and have fun" }
      ]
    },
    {
      "day": "Sunday, April 13th, 2025",
      "events": [
        { "time": "8:00 AM", "title": "Breakfast", "description": "Start your second day fresh" },
        { "time": "9:00 AM", "title": "College Application and Prep", "description": "Guidance for college-bound students" },
        { "time": "12:00 PM", "title": "Hacking Ends", "description": "Final project submission" },
        { "time": "12:00 PM", "title": "Lunch", "description": "Enjoy a meal before presentations" },
        { "time": "12:30 PM", "title": "Presentations", "description": "Showcase your projects" },
        { "time": "2:00 PM", "title": "URM Panel", "description": "Discussion on underrepresented minorities in tech" },
        { "time": "2:30 PM", "title": "Closing Ceremony", "description": "Awards and wrap-up" },
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