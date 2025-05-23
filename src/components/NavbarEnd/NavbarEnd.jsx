import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router';
import NavEndAvatar from '../../ui/NavEndAvatar/NavEndAvatar';

const NavbarEnd = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>           
            {
                user ? <NavEndAvatar></NavEndAvatar> : 
                <div className='flex gap-x-3'><Link className='btn btn-outline rounded-[2px] btn-primary hover:text-white' to={'/login'}>Login</Link>
                <Link className='btn btn-primary rounded-[2px] text-white hidden @min-[437px]:flex' to="/registration">Register</Link></div>                     
            }          
        </div>
    );
};

export default NavbarEnd;