import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayOut = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
           <Toaster />
        </div>
    );
};

export default MainLayOut;