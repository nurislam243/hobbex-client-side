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
                <div className='flex gap-x-3'><Link className='btn btn-outline' to={'/login'}>Login</Link>
                <Link className='btn btn-primary hidden @min-[437px]:flex' to="/register">Register</Link></div>                     
            }          
        </div>
    );
};

export default NavbarEnd;