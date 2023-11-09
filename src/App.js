import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from "./About";
import Recipes from "./Recipes";
import Contact from "./Contact";

function App() {
  return (
    <Router>
    <nav>
      <Link to="/about" className='link'>About</Link>
      <Link to="/recipes" className='link'>Recipes</Link>
      <Link to="/contact" className='link'>Contact</Link>
    </nav>

    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  
  );
}

export default App;
