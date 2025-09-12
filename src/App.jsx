import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import About from "./pages/about/About";
import Support from "./pages/support/Support";
import Template from "./pages/template/Template";
// import Template2 from "./components/templatePortfolio/Template2";

import './App.css'
import CrevoFooter from './components/footer/Footer';

const App = () => {

  return (
    <Router>
      <div className="bg-smoke min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/templates" element={<Template />} />
          {/* <Route path="/profolio2" element={<Template2 />} /> */}
          {/* Optionally, add a 404 Not Found route */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    
    </Router>
     
  );
}

export default App;
