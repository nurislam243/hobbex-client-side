import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router';
import NavEndAvatar from '../../ui/NavEndAvatar/NavEndAvatar';

const NavbarEnd = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>           
            {
                user ? <NavEndAvatar></NavEndAvatar> : <Link to={'/login'}>Login</Link>                       
            }          
        </div>
    );
};

export default NavbarEnd;