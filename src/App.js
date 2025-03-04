// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Career from './pages/Career';
import Facilities from './pages/Facilities';

import Apply from './pages/Apply';
import './styles/Global.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/career" element={<Career />} />
       
        <Route path="/apply" element={<Apply />} />
        <Route path="/facilities" element={<Facilities />} />
      </Routes>
    </Router>
  );
}

export default App;
