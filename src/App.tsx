import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layouts/header/header";
import Home from "./pages/home/home";
import About from "./pages/About/about";
import Charging from "./pages/charging/charging";
import Jobs from "./pages/jobs/jobs";
import Footer from "./layouts/footer/footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/charging" element={<Charging />} />
            <Route path="/jobs" element={<Jobs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
