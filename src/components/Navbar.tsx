import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Rocket, Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#000B1D]/80 to-[#001F4D]/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/anova_logo_notext.png"
              alt="ANova Logo"
              className="w-10 h-10"
            />
            <span className="text-xl font-bold gradient-text">ANova Hacks 2025</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'bg-blue-500/20 text-[#9DD4DB]' : 'text-white-100'}`}>
              About
            </Link>
            <Link to="/schedule" className={`nav-link ${location.pathname === '/schedule' ? 'bg-blue-500/20 text-[#9DD4DB]' : 'text-white-100'}`}>
              Schedule
            </Link>
            {/* <Link to="/map" className={`nav-link ${location.pathname === '/map' ? 'bg-blue-500/20 text-[#9DD4DB]' : 'text-white-100'}`}>
              Map
            </Link> */}
            <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'bg-blue-500/20 text-[#9DD4DB]' : 'text-white-100'}`}>
              Project Info
            </Link>
            <Link to="/resources" className={`nav-link ${location.pathname === '/resources' ? 'bg-blue-500/20 text-[#9DD4DB]' : 'text-white-100'}`}>
              Resources
            </Link>
            <Link to="/mentors" className={`nav-link ${location.pathname === '/mentors' ? 'bg-blue-500/20 text-[#9DD4DB]' : 'text-white-100'}`}>
              Mentors
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-100 hover:text-blue-200 focus:outline-none"
            >
              <div className="color-white">
              {isOpen ? <X color="white" className="h-6 w-6" /> : <Menu color="white" className="h-6 w-6" />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/about"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === '/about' ? 'bg-blue-500/20 text-[#9DD4DB]' : 'text-white-100 hover:bg-blue-500/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/schedule"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === '/schedule' ? 'bg-blue-500/20 text-[#9DD4DB]' : 'text-white-100 hover:bg-blue-500/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Schedule
              </Link>
              <Link
                to="/map"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === '/map' ? 'bg-blue-500/20 text-[#9DD4DB]' : 'text-white-100 hover:bg-blue-500/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Map
              </Link>
              <Link
                to="/resources"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === '/resources' ? 'bg-blue-500/20 text-[#9DD4DB]' : 'text-white-100 hover:bg-blue-500/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
              <Link
                to="/projects"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === '/projects' ? 'bg-blue-500/20 text-[#9DD4DB]' : 'text-white-100 hover:bg-blue-500/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/mentors"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === '/mentors' ? 'bg-blue-500/20 text-[#9DD4DB]' : 'text-white-100 hover:bg-blue-500/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Mentors
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;