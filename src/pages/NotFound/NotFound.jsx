import React from 'react';
import { Link } from 'react-router';
import errorImage from "../../assets/error.png"
import errorRed from "../../assets/error-red.png"
// import { Helmet } from 'react-helmet-async';

const NotFound = () => {
    return (
        <div className="pt-2 @container">
            {/* <Helmet>
                <title>Not Found | HobbEx</title>
            </Helmet> */}
            <div className="flex justify-center items-center">
                <div className="mt-[3vh] md:mt-[5vh] lg:mt-[9vh] px-2 xl:mt-[11vh] 2xl:mt-[15vh]">
                    <div className="flex justify-center">
                        <img className='w-[300px] animate-updown' src={errorImage} alt="" />
                    </div>
                    <div className="text-center space-y-5 mt-8">
                        <div className='text-red-600 font-bold flex flex-col items-center @min-[410px]:flex-row gap-1.5 text-4xl'>
                            <img className='w-10' src={errorRed} alt="" />
                            <h1>404- Page Not Found</h1>                         
                        </div>
                        <p className='dark-1 text-xl font font-semibold'>Oops! The page you're looking for doesn't exist</p>
                        <Link to={'/'} className='btn btn-primary text-white text-lg' >Back to Homepage</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;