import React from 'react';
import './App.css';
import Signup from './Pages/Signup';
import { Route, Routes } from "react-router-dom"
import Login from './Pages/Login';
import Information from './Pages/Information';
import DashBoard from './Pages/Dashboard';
import NewJobs from './Components/NewJobs';
import AppliedJobs from './Components/AppliedJobs';
import { PrivateRoute } from './Layouts/Private';


function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/info" element={<PrivateRoute element={ <Information />} />} />
      <Route path="/dashboard" element={<PrivateRoute element={ <DashBoard />} />}>
      <Route path="new-jobs" element={<NewJobs />} />
      <Route path="applied-jobs" element={<AppliedJobs />} />
      </Route>
    </Routes>
  );
}

export default App;
