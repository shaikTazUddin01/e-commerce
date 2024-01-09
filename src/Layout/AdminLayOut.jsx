import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayOut = () => {
    return (
        <div>
            <h1>login</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default AdminLayOut;