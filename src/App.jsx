import React from "react";
import { Routes, Route } from "react-router-dom";
import UserProfile from './pages/UserProfile';
import ExploreProjects from './pages/ExploreProjects'
import './App.css'
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/ExploreProjects" element={<ExploreProjects />} />
        <Route path="/navbar" element={<Navbar/>}/>
      </Routes>
    </div>
  )
}

export default App
