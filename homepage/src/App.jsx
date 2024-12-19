import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Assuming Home page already exists
import AboutUs from './components/AboutUs'; // About Us page


const App = () => {
  return (
    <Router>
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page route */}
        <Route path="/about-us" element={<AboutUs />} /> {/* About Us route */}
      </Routes>
    </Router>
  );
};

export default App;
