import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Schedule from './pages/Schedule';
import Map from './pages/Map';
import Resources from './pages/Resources';
import Projects from './pages/Projects';
import Mentors from './pages/Mentors';
import Stars from './components/Stars';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen relative overflow-hidden">
        <Stars />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/map" element={<Map />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/mentors" element={<Mentors />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;