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