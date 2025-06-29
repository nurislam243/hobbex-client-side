import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import NavbarEnd from '../NavbarEnd/NavbarEnd';
import { AuthContext } from '../../context/AuthContext';
import { CiDark, CiLight } from 'react-icons/ci';
import { Tooltip } from 'react-tooltip';
import { Zoom } from 'react-awesome-reveal';

const Navbar = () => {
    const { theme, setTheme } = useContext(AuthContext);
    return (
        <div className="bg-base-300 py-[8px] lg:py-[13px] sticky top-0 z-20">
            <nav className="navbar md:container mx-auto px-[6px] @min-[300px]:px-2 @min-[315px]:px-3 @min-[340px]:px-[14px] @min-[380px]:px-4 @min-[768px]:px-[2px] @min-[1024px]:px-4 @min-[1044px]:px-0 @min-[1280px]:px-4 @min-[1310px]:px-0 @min-[1536px]:px-4 @min-[1562px]:px-0">
                <div className="navbar-start w-full">
                    <div className="flex items-center gap-2.5">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu text-lg @min-[400px]:text-xl dropdown-content bg-base-300 rounded z-1 mt-[22px] w-52 @min-[370px]:w-[300px] p-5 shadow-2xl">
                                <div className="">
                                    <button 
                                    onClick={() => setTheme(!theme)} 
                                    className='cursor-pointer @min-[340px]:hidden flex mb-4 items-center gap-3'
                                    data-tooltip-id="theme-tooltip"
                                    data-tooltip-content={theme ? "Enable Dark Mode" : "Enable Light Mode"}
                                    data-tooltip-place="top"
                                    > <span className='text-gray-400'>Theme:</span>
                                        {
                                            theme ? <CiDark size={40} /> : <CiLight size={40} />
                                        }
                                    </button>
                                </div>
                                <li><NavLink to={'/'} className={({ isActive }) =>isActive ? "bg-accent/20 text-primary/65 font-semibold transition-colors duration-200" : ""}>Home</NavLink></li>
                                <li><NavLink to={'/groups'} className={({ isActive }) =>isActive ? "bg-accent/20 text-primary/65 font-semibold transition-colors duration-200" : ""}>AllGroups</NavLink></li>
                                <li><NavLink to={'/about'} className={({ isActive }) =>isActive ? "bg-accent/20 text-primary/65 font-semibold transition-colors duration-200" : ""}>About Us</NavLink></li>
                                <li><NavLink to={'/createGroup'} className={({ isActive }) =>isActive ? "bg-accent/20 text-primary/65 font-semibold transition-colors duration-200" : ""}>Create Group</NavLink></li>
                                <li><NavLink to={'/myGroups'} className={({ isActive }) =>isActive ? "bg-accent/20 text-primary/65 font-semibold transition-colors duration-200" : ""}>My Groups</NavLink>
                                </li>                                         
                            </ul>
                        </div>
                        <Zoom triggerOnce>
                            <div className="flex gap-1 items-center">
                                <div className="w-9 h-9 -mb-1">
                                    <img src='/logoHobbex1.png' className='' alt="" />
                                </div>
                                <Link to={'/'} className="text-3xl hidden @min-[424px]:flex font-bold text-primary">HobbEx</Link>
                            </div>
                        </Zoom>
                    </div>
                    <div className="hidden lg:flex ml-10 xl:ml-11 text-base-content/70 font-medium">
                        <ul className="flex gap-[18px] text-[16px]">
                            <li><NavLink to={'/'} className={({ isActive }) =>isActive ? "border-b-2 border-base-content/80 text-base-content/80 font-semibold transition-colors duration-200" : ""}>Home</NavLink></li>
                            <li><NavLink to={'/groups'} className={({ isActive }) =>isActive ? "border-b-2 border-base-content/80 text-base-content/80 font-semibold transition-colors duration-200" : ""}>AllGroups</NavLink></li>
                            <li><NavLink to={'/about'} className={({ isActive }) =>isActive ? "border-b-2 border-base-content/80 text-base-content/80 font-semibold transition-colors duration-200" : ""}>About Us</NavLink></li>
                            <li><NavLink to={'/createGroup'} className={({ isActive }) =>isActive ? "border-b-2 border-base-content/80 text-base-content/80 font-semibold transition-colors duration-200" : ""}>Create Group</NavLink></li>
                            <li><NavLink to={'/myGroups'} className={({ isActive }) =>isActive ? "border-b-2 border-base-content/80 text-base-content/80 font-semibold transition-colors duration-200" : ""}>My Groups</NavLink></li>                   
                        </ul>
                    </div>
                </div>

                <div className="navbar-end gap-2">
                    <button 
                    onClick={() => setTheme(!theme)} 
                    className='cursor-pointer @min-[340px]:flex hidden'
                    data-tooltip-id="theme-tooltip"
                    data-tooltip-content={theme ? "Enable Dark Mode" : "Enable Light Mode"}
                    data-tooltip-place="top"

                    >
                        {
                            theme ? <CiDark size={40} /> : <CiLight size={40} />
                        }
                    </button>
                    <Tooltip id="theme-tooltip" />
                    <NavbarEnd></NavbarEnd>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;