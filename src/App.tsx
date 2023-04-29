import React from 'react';
import './App.css';
import Signup from './Pages/Signup';
import { Route, Routes } from "react-router-dom"
import Login from './Pages/Login';
import Information from './Pages/Information';


function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/info" element={<Information />} />
    </Routes>
  );
}

export default App;
