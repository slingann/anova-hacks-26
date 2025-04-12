import React from 'react';
import { motion } from 'framer-motion';
import { Book, Code, FileCode, Laptop, PenTool as Tool, Video } from 'lucide-react';

const Resources = () => {
  const categories = [
    {
      title: "Getting Started",
      icon: <Laptop className="w-6 h-6" />,
      resources: [
        { name: "Project Inspiration", link: "https://www.inspiritai.com/blogs/ai-blog/hackathon-project-ideas" },
        { name: "Setting Up Your Development Environment", link: "https://www.skillreactor.io/blog/step-by-step-guide-to-setting-up-a-development-environment/" },
        { name: "Beginner's Guide to Git", link: "https://webtuu.com/blog/04/a-laymans-introduction-to-git" }
      ]
    },
    {
      title: "Learning Materials",
      icon: <Book className="w-6 h-6" />,
      resources: [
        { name: "Web Development Basics", link: "https://www.w3schools.com/whatis/" },
        { name: "Mobile App Development with Thunkable", link: "https://docs.thunkable.com/getting-started/get-started" },
        { name: "UI/UX Crash Course", link: "https://www.youtube.com/watch?v=wIuVvCuiJhU" },
      ]
    },
    {
      title: "Tools",
      icon: <Tool className="w-6 h-6" />,
      resources: [
        { name: "Recommended Code Editors", link: "https://zapier.com/blog/best-code-editor/" },
        { name: "Other Useful Tools for Beginners", link: "https://allhackathons.com/tools/" },
        { name: "Figma Design Resources", link: "https://www.figma.com/resource-library/ui-design/" },
      ]
    },
    {
      title: "Tutorials",
      icon: <Video className="w-6 h-6" />,
      resources: [
        { name: "Building Your First Website", link: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website" },
        { name: "Creating a Simple Game in Python", link: "https://medium.com/@marsmans/beginner-python-game-2f322dfc6bef" },
        { name: "Designing in Figma", link: "https://www.youtube.com/watch?v=JGLfyTDgfDc" },
      ]
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
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hacker Resources
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            className="card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="text-blue-400 mr-3">{category.icon}</div>
              <h2 className="text-2xl font-semibold">{category.title}</h2>
            </div>
            <div className="space-y-3">
              {category.resources.map((resource, resourceIndex) => (
                <motion.a
                  key={resource.name}
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-lg hover:bg-white/5 transition-colors"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  custom={resourceIndex + categories.length}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center">
                    <FileCode className="w-4 h-4 mr-2 text-blue-400" />
                    <span>{resource.name}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="card mt-8"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        custom={8}
        viewport={{ once: true }}
      >
        <div className="flex items-center mb-4">
          <Code className="w-6 h-6 text-blue-400 mr-3" />
          <h2 className="text-2xl font-semibold">Quick Start Templates</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.a
            href="https://jsfiddle.net/vintharas/ybt6k2dw/"
            target="_blank" 
            rel="noopener noreferrer"
            className="block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={9}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-2">HTML/CSS Template</h3>
            <p className="text-sm text-gray-400">Basic website structure with styling</p>
          </motion.a>
          <motion.a
            href="https://docs.thunkable.com/snap-to-place/sample-apps"
            target="_blank" 
            rel="noopener noreferrer"
            className="block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={10}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-2">App Starter</h3>
            <p className="text-sm text-gray-400">Simple mobile app templates</p>
          </motion.a>
          <motion.a
            href="https://www.figma.com/community/file/1088468250791967662"
            target="_blank" 
            rel="noopener noreferrer"
            className="block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={11}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-2">Figma UI Kit</h3>
            <p className="text-sm text-gray-400">Basic components for design</p>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Resources;