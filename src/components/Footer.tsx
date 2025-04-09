import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#000B1D]/80 to-[#001F4D]/80 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
              src='/anova_asterisk_text_light.png'
              alt='anova-logo'
              className='w-auto'
              />
            </div>
            <p className="text-blue-100/80 text-sm">
            ANova is a student group acting independently of the University of California. 
            We take full responsibility for our organization, our programs, and this website.
            </p>
          </div>

          <div>
            <h3 className="text-blue-200 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-blue-100/80 hover:text-blue-100 text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-blue-100/80 hover:text-blue-100 text-sm">
                  Schedule
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-blue-100/80 hover:text-blue-100 text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/mentors" className="text-blue-100/80 hover:text-blue-100 text-sm">
                  Mentors
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-200 font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources" className="text-blue-100/80 hover:text-blue-100 text-sm">
                  Learning Materials
                </Link>
              </li>
              <li>
                <a href="https://www.berkeleyanova.org" target="_blank" rel="noopener noreferrer" className="text-blue-100/80 hover:text-blue-100 text-sm">
                  Berkeley ANova
                </a>
              </li>
              <li>
                <Link to="/map" className="text-blue-100/80 hover:text-blue-100 text-sm">
                  Venue Map
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-200 font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/berkeleyanova"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100/80 hover:text-blue-100"
              >
                
              </a>
              <a
                href="https://instagram.com/berkeleyanova"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100/80 hover:text-blue-100"
              >
               
              </a>
              <a
                href="https://linkedin.com/company/berkeleyanova"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100/80 hover:text-blue-100"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100/60 text-sm">
            © {new Date().getFullYear()} by Berkeley ANova with &lt;3
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;