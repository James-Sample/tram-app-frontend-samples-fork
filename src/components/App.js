import React from "react";
import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import LoginPage from "./login-page";
import TramMap from "./tram-map";
import HomePage from "./home";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tram-map" element={<TramMap />} />
        <Route path="/login-page" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;
