import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { auth } from '../../Firebase';
import { getUser } from '../../Store/actions/user';

export const PrivateRoute = ({ element, user,  isLoading, getUser}: any) => {

  if (!user && !isLoading) {
    // return <Navigate to="/signin" />
  }
  return element;
};



const mapStateToProps = (state: any) => ({
  user: state.users.user,
  isLoading: state.users.isLoading,
})

const mapDispatchToProps = (dispatch: any) => ({
  getUser :() => dispatch(getUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)