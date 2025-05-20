import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const NavEndAvatar = () => {
    const {user, handleLogout} = useContext(AuthContext);
    console.log(user);

    return (
        <div className='flex gap-2'>
            <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                 {
                    user ? <img src={user.photoURL} className='h-[55px] w-[55px] rounded-full' alt="" /> : ""
                 }
            </div>
           
            <button onClick={handleLogout}>Logout</button>           
        </div>
    );
};

export default NavEndAvatar;