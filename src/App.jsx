import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import "./App.css";

function App() {
  const [showHeader, setShowHeader] = useState(true);

  return (
    <Router>
      {<div />}
      
      <Routes>
        <Route path="/" element={showHeader && <Header setShowHeader={setShowHeader} />} />
        <Route path="/about" element={<AboutMe setShowHeader={setShowHeader} />} />
        <Route path="/projects" element={<Projects setShowHeader={setShowHeader} />} />
        <Route path="/contact" element={<Contact setShowHeader={setShowHeader} />} />
      </Routes>
    </Router>
  );
}

export default App;
