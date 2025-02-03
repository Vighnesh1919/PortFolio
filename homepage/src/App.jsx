import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Assuming Home page already exists



const App = () => {
  return (
    <Router>
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page route */}
       
      </Routes>
    </Router>
  );
};

export default App;
