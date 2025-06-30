import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { TbSum } from "react-icons/tb";
import MyGroups from '../../MyGroups/MyGroups';
import { SiBookmyshow } from "react-icons/si";
import { TbCategory2 } from "react-icons/tb";
import { FaUserCheck } from "react-icons/fa";
import { AuthContext } from '../../../context/AuthContext';

const Overview = () => {
    const {user} = useContext(AuthContext);
    const groups = useLoaderData();
    const myGroups = groups.filter((group) => group?.userEmail === user?.email)
    const totalCategory = [...new Set(groups.map(group => group?.hobbyCategory))];
    const totalUser = [...new Set(groups.map(group => group?.userEmail))]
        
    return (
        <div>
            <section className="p-6 my-6">
                <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-base-200">
                        <div className="flex justify-center items-center p-2 align-middle rounded-lg sm:p-4 bg-primary text-white">
                            <TbSum className='h-[46px] w-[46px] lg:h-[60px] lg:w-[60px]  text-2xl lg:text-3xl' />
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="capitalize text-xl lg:text-2xl">Total Groups</p>
                            <p className="text-4xl xl:text-5xl font-semibold leading-none">{groups.length}</p>
                        </div>
                    </div>

                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-base-200">
                        <div className="flex justify-center items-center p-2 align-middle rounded-lg sm:p-4 bg-primary text-white">
                            <SiBookmyshow className='h-[46px] w-[46px] lg:h-[60px] lg:w-[60px]  text-2xl lg:text-3xl' />
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="capitalize text-xl lg:text-2xl">My Groups</p>
                            <p className="text-4xl xl:text-5xl font-semibold leading-none">{myGroups.length}</p>
                        </div>
                    </div>

                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-base-200">
                        <div className="flex justify-center items-center p-2 align-middle rounded-lg sm:p-4 bg-primary text-white">
                            <TbCategory2 className='h-[46px] w-[46px] lg:h-[60px] lg:w-[60px]  text-2xl lg:text-3xl' />
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="capitalize text-xl lg:text-2xl">Total Category</p>
                            <p className="text-4xl xl:text-5xl font-semibold leading-none">{totalCategory.length}</p>
                        </div>
                    </div>

                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-base-200">
                        <div className="flex justify-center items-center p-2 align-middle rounded-lg sm:p-4 bg-primary text-white">
                            <FaUserCheck className='h-[46px] w-[46px] lg:h-[60px] lg:w-[60px]  text-2xl lg:text-3xl' />
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="capitalize text-xl lg:text-2xl">Total User</p>
                            <p className="text-4xl xl:text-5xl font-semibold leading-none">{totalUser.length}</p>
                        </div>
                    </div>                  
                </div>
            </section>
        </div>
    );
};

export default Overview;