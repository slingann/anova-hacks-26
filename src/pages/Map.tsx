import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Map = () => {
  const locations = [
    { name: "General Workspace", description: "Opening/closing ceremonies and main hacking space" },
    { name: "Ivy", description: "Female-identifying sleeping room" },
    { name: "Rose", description: "Male-identifying sleeping room" },
    { name: "Dahlia", description: "Gender non-conforming sleeping room" },
    { name: "Hyacinth", description: "Various workshops and learning sessions" }
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
      <motion.div
        className="flex items-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <MapPin className="w-8 h-8 mr-3 text-blue-400" />
        <h1 className="text-4xl font-bold">Venue Map</h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <motion.div
          className="card"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: true }}
        >
          <img
            src="/trellis-venue.jpg"
            alt="Venue"
            className="w-full h-80 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">Trellis Coworking & Events</h2>
          <p className="text-gray-400">
          ANovahacks 2025 takes place at Trellis Coworking & Events, an inspiring space for innovation and collaboration. 
          Located at the heart of the city, Trellis offers a dynamic environment designed to foster creativity and networking among 
          hackers, creators, and tech enthusiasts. Whether you're working on your next big idea or collaborating with like-minded individuals, 
          Trellis provides the perfect setting for making those ideas come to life.
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
          <img
            src="/trellis-map.jpg"
            alt="Venue"
            className="w-full h-80 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold mb-4">Key Locations</h2>
          <div className="space-y-4">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                className="flex items-start"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                custom={index + 2}
                viewport={{ once: true }}
              >
                <MapPin className="w-5 h-5 mr-2 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">{location.name}</h3>
                  <p className="text-gray-400 text-sm">{location.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="card"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        custom={8}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-4">Getting Here</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-2">By BART</h3>
            <p className="text-gray-400">Arrive at Powell St, 8-minute walk to venue</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">By Bus</h3>
            <p className="text-gray-400">Multiple Muni lines stop nearby</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Parking</h3>
            <p className="text-gray-400">Available in nearby parking structures</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Map;