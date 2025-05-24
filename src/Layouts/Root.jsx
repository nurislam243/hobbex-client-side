import React, { useContext } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';

const Root = () => {
    const { theme } = useContext(AuthContext);
    return (
        <div className='inter-font @container' data-theme={theme ? 'hobbex' : 'dark'}>
            <Navbar></Navbar>
            <div className="bg-base-100 pb-[90px] pt-2.5">
                <div className="min-h-[80vh] md:container mx-auto px-[6px] @min-[300px]:px-2 @min-[315px]:px-3 @min-[340px]:px-[14px] @min-[380px]:px-4 @min-[768px]:px-[2px] @min-[1024px]:px-4 @min-[1044px]:px-0 @min-[1280px]:px-4 @min-[1310px]:px-0 @min-[1536px]:px-4 @min-[1562px]:px-0">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Root;