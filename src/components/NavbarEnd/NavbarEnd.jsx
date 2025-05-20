import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router';

const NavbarEnd = () => {
    const {user, handleLogout} = useContext(AuthContext);
    return (
        <div>
            {
                user ? <div>
                    <img src={user.photoURL} alt="" />
                    <button onClick={handleLogout}>Logout</button>
                    
                </div> :
                        <Link to={'/login'}>Login</Link>                       
            }          
        </div>
    );
};

export default NavbarEnd;