import React from "react";
import { Routes, Route } from "react-router-dom";
import UserProfile from './pages/UserProfile';
import ExploreProjects from './pages/ExploreProjects'
import './App.css'

function App() {


  return (
    <div>
      <Routes>
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/ExploreProjects" element={<ExploreProjects />} />
      </Routes>
    </div>
  )
}

export default App
