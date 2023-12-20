import React from 'react';
import NavBar from '../Component/shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import PageHeader from '../Component/shared/PageHeader/PageHeader';

const MainLayout = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <PageHeader></PageHeader>
            <NavBar></NavBar>
            <div className='bg-slate-100'>

            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;