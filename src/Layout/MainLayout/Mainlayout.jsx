import React from 'react';
import Navbar from '../../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer';

const Mainlayout = () => {
    return (
        <div className='max-w-[85%] mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;