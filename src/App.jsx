import React from "react";
import { Routes, Route } from "react-router-dom";
import UserProfile from './pages/UserProfile';
import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </div>
  )
}

export default App
