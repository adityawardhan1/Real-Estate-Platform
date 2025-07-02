import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Properties from './pages/properties'; // ✅ fixed case
import AddProperty from './pages/AddProperty';
import ChatBot from './components/ChatBot'; // ✅ once moved correctly

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/add-property" element={<AddProperty />} />
          </Routes>
        </main>
        <ChatBot /> {/* Chatbot visible on all pages */}
      </div>
    </Router>
  );
}

export default App;
