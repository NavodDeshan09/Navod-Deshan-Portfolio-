import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topnavigation from "./components/Topnavigation";
import Home from "./pages/Home";
import Projects from "./pages/Projects";


function App() {
  return (
    <Router>
      <Topnavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
