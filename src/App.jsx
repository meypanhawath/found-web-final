import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import About from "./pages/about/About";
import Template from "./pages/template/Template";
import Support from "./pages/support/Support";
import Profile from "./pages/userprofile/Profile";

function App() {
  return (
    <Router>
      <div className="bg-[#f5f5f5] min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/templates" element={<Template />} />
          <Route path="/support" element={<Support />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
