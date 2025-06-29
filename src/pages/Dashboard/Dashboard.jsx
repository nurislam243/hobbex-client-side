import React, { useContext } from 'react';
import { CiViewList } from 'react-icons/ci';
import { TiThSmall } from "react-icons/ti";
import { MdAddCircleOutline, MdOutlineGroups2 } from 'react-icons/md';
import { Link, NavLink, Outlet } from 'react-router';
import { Zoom } from 'react-awesome-reveal';
import { FaHome } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthContext';

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='p-4 z-50'>
            {/* left side */}
            <div className="w-64 h-[100vh] fixed bg-base-300 rounded p-7">
                <Zoom triggerOnce>
                    <div className="flex gap-1 items-center mb-10">
                        <div className="w-9 h-9 -mb-1">
                            <img src='/logoHobbex1.png' className='' alt="" />
                        </div>
                        <Link to={'/'} className="text-3xl font-bold text-primary">HobbEx</Link>
                        
                    </div>
                </Zoom>
                <ul className='text-xl space-y-4'>   
                    <li className='text-primary-content'>
                        <NavLink
                            to={'/dashboard'}
                            className={({isActive})  =>isActive ? 'flex items-center gap-2 text-primary font-semibold' : 'flex items-center hover:text-gray-500 gap-2'}
                            end
                        >
                            <CiViewList />Overview
                        </NavLink>
                    </li>
                    <li className='text-primary-content'>
                        <NavLink
                            to={'/dashboard/myGroups'}
                            className={({isActive})  =>isActive ? 'flex items-center gap-2 text-primary font-semibold' : 'flex items-center hover:text-gray-500 gap-2'}
                        >
                            <MdOutlineGroups2 />My Groups
                        </NavLink>
                    </li>
                    <li className='text-primary-content'>
                        <NavLink 
                            to={'/dashboard/createGroup'}
                            className={({isActive})  =>isActive ? 'flex items-center gap-2 text-primary font-semibold' : 'flex items-center hover:text-gray-500 gap-2'}
                        >
                            <MdAddCircleOutline />Create Group
                        </NavLink>
                    </li>
                    <li className='text-primary-content'>
                        <NavLink 
                            to={'/dashboard/groups'}
                            className={({isActive})  => isActive ? 'flex items-center gap-2 text-primary font-semibold' : 'flex items-center hover:text-gray-500 gap-2'}
                        >
                            <TiThSmall />All Groups
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* right side */}
            <div className=" ml-64 pl-4 h-[100vh] bg-base-100">
                <nav className="h-[95px] rounded flex justify-between bg-base-300 mb-5 p-4">
                    <div className="flex">
                        <Link to={'/'}><button to={'/'} className='flex cursor-pointer items-center gap-2 mt-3 text-2xl'><FaHome></FaHome> Home</button></Link>
                    </div>
                    <div className="flex gap-4">
                        <div className="">
                            <p>{user?.displayName}</p>
                            <p className='font-bold'>{user.email}</p>
                        </div>
                        <div className="">
                            <img className='h-[60px] w-[60px] rounded-full border border-primary' src={user?.photoURL} alt="" />
                        </div>
                    </div>
                </nav>

                {/* dynamic part */}
                <div className="rounded ">
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;