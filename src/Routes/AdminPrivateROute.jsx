import React from 'react';
import useAuth from '../Hooks/auth/useAuth';
import { Navigate } from 'react-router-dom';

const AdminPrivateROute = ({children}) => {
    const {user}=useAuth();

    if(!user){
       return <Navigate to={'/admin/login'}></Navigate>
    }
   return children
};

export default AdminPrivateROute;