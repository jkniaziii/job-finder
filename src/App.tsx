import React, { useEffect } from 'react';
import './App.css';
import Signup from './Pages/Signup';
import { Navigate, Route, Routes } from "react-router-dom"
import Login from './Pages/Login';
import Information from './Pages/Information';
import DashBoard from './Pages/Dashboard';
import NewJobs from './Components/NewJobs';
import AppliedJobs from './Components/AppliedJobs';
import { PrivateRoute } from './Layouts/Private';
import { getUser } from './Store/actions/user';
import { connect } from 'react-redux';


function App({getUser, user, isLoading}: any) {

  useEffect(() => {
     getUser(); 
  }, [])


  return (
    <>
    {(user && !isLoading) && <Navigate to={'/dashboard'} />}
    {(!user && !isLoading) && <Navigate to={'/signin'} />}
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/info" element={<PrivateRoute element={ <Information />} />} />
      <Route path="/dashboard" element={<PrivateRoute element={ <DashBoard />} />}>
      <Route path="new-jobs" element={<NewJobs />} />
      <Route path="applied-jobs" element={<AppliedJobs />} />
      </Route>
    </Routes>
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    user: state.users.user,
    isLoading: state.users.isLoading,
  }
}
 

const mapDispatchToProps = (dispatch: any) => ({
  getUser :() => dispatch(getUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
