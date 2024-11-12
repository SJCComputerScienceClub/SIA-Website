import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Join from './components/Join';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Join />
      
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 Student Identity Alliance. All rights reserved.</p>
          <p className="mt-2 text-gray-400">Making our school a more inclusive place, one step at a time.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;