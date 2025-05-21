import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const NavEndAvatar = () => {
    const {user, handleLogout} = useContext(AuthContext);
    console.log(user);

    return (
        <div className='flex gap-3 items-center'>
            <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                 {
                    user ? <img src={user.photoURL} className='h-[40px] w-[40px] md:h-[44px] md:w-[44px] lg:h-[47px] lg:w-[47px] rounded-full' alt="" /> : ""
                 }
            </div>
           
            <button className='btn btn-outline' onClick={handleLogout}>Logout</button>           
        </div>
    );
};

export default NavEndAvatar;