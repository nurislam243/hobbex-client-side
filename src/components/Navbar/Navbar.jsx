import React from 'react';
import { Link, NavLink } from 'react-router';
import NavbarEnd from '../NavbarEnd/NavbarEnd';
import ThemeControler from '../../ui/ThemeControler/ThemeControler';

const Navbar = () => {
    return (
        <div className="bg-base-300 py-[8px] lg:py-[12px] sticky top-0 z-20">
            <nav className="navbar md:container mx-auto">
                <div className="navbar-start w-full">
                    <div className="flex items-center">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><NavLink to={'/'}>Home</NavLink></li>
                                <li><NavLink to={'/allGroups'}>AllGroups</NavLink></li>
                                <li><NavLink to={'/createGroup'}>Create Group</NavLink></li>
                                <li><NavLink to={'/myGroups'}>My Groups</NavLink></li>      
                            </ul>
                        </div>
                        <div className="flex gap-1 items-center">
                            <div className="w-9 h-9 -mb-1">
                                <img src='/logoHobbex1.png' className='' alt="" />
                            </div>
                            <Link to={'/'} className="text-3xl hidden @min-[393px]:flex font-bold text-primary">HobbEx</Link>
                        </div>
                    </div>
                    <div className="hidden lg:flex ml-10 xl:ml-11 text-base-content/70 font-medium">
                        <ul className="flex gap-[18px] text-[16px]">
                            <li><NavLink to={'/'} className={({ isActive }) =>isActive ? "border-b-2 border-base-content/80 text-base-content/80 font-semibold transition-colors duration-200" : ""}>Home</NavLink></li>
                            <li><NavLink to={'/groups'} className={({ isActive }) =>isActive ? "border-b-2 border-base-content/80 text-base-content/80 font-semibold transition-colors duration-200" : ""}>AllGroups</NavLink></li>
                            <li><NavLink to={'/createGroup'} className={({ isActive }) =>isActive ? "border-b-2 border-base-content/80 text-base-content/80 font-semibold transition-colors duration-200" : ""}>Create Group</NavLink></li>
                            <li><NavLink to={'/myGroups'} className={({ isActive }) =>isActive ? "border-b-2 border-base-content/80 text-base-content/80 font-semibold transition-colors duration-200" : ""}>My Groups</NavLink></li>                   
                        </ul>
                    </div>
                </div>

                <div className="navbar-end gap-2">
                    <ThemeControler></ThemeControler>
                    <NavbarEnd></NavbarEnd>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;