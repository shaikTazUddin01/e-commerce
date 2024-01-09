import React from 'react';
import useAuth from '../Hooks/auth/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user}=useAuth()

    if (!user) {
      return <Navigate to={'/'}></Navigate>  
    }

    return children
};

export default PrivateRoute;