import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../../Firebase';

export const PrivateRoute = ({ element }: any) => {

  const user = true;
  if (!user) {
    return <Navigate to="/signin" />
  }
  return element;
};
