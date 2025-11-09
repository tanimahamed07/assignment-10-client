import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import  { Toaster } from 'react-hot-toast';
const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Toaster />
        </div>
    );
};

export default Root;