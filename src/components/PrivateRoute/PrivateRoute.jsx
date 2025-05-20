import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Spinner from '../../ui/Spinner/Spinner';

const PrivateRoute = () => {

    const {user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Spinner></Spinner>
    }

    if(!user || !user?.email){
        return <Navigate state={{from:location.pathname}} to="/login"></Navigate>
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;