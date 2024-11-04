import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SimpleNavbar from './Components/NavBar';
import { Footer } from './Components/Footer';
import HomePage from './Pages/HomePage';
import Team from './Pages/Team'; // Import the Team page
import Gallery from './Pages/Gallery';

function App() {
  return (
    <Router>
      <div className="max-w-screen-3xl mx-auto px-4 md:px-10 xl:px-32 bg-gray-100">
        <SimpleNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<Team />} /> 
          <Route path="/gallery" element={<Gallery />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
