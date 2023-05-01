import React from 'react';
import './App.css';
import Signup from './Pages/Signup';
import { Route, Routes } from "react-router-dom"
import Login from './Pages/Login';
import Information from './Pages/Information';
import DashBoard from './Pages/Dashboard';


function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/info" element={<Information />} />
      <Route path="/dashBoard" element={<DashBoard />} />
    </Routes>
  );
}

export default App;
