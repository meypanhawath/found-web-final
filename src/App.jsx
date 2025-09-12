import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Template from "./pages/template/Template";

function App() {
  return (
    <Router>
      <div className="bg-smoke min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/templates" element={<Template />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;