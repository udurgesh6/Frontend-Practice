import "./App.css";
import React from "react";
import Dashboard from "./Dashboard";
import Pricing from "./Pricing";
import Features from "./Features";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
function App() {
  return (
    <Router>
      <div className="App">
        
        <Navigation />

        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
