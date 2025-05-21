import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div className='inter-font @container'>
            <Navbar></Navbar>
            <div className="bg-base-100 pt-2.5">
                <div className="min-h-[80vh] md:container mx-auto">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Root;