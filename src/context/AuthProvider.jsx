import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import Swal from 'sweetalert2';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState("nur islam");

    // create user using email and password
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }


    //handle logout
    const handleLogout = () => {
      Swal.fire({
        title: 'Are you sure?',
        text: "Do you really want to log out?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, log out!'
      }).then((result) => {
        if (result.isConfirmed) {
          signOut(auth)
            .then(() => {
              setUser(null);
              Swal.fire({
                icon: 'success',
                title: 'Logged Out!',
                text: 'You have been logged out successfully.',
                timer: 2000,
                showConfirmButton: false
              });
            })
            .catch((error) => {
              // console.log(error);
              Swal.fire('Error', error.message, 'error');
            });
        }
      });
    };


    const authValue = {
        user,
        setUser,
        createUser,
        handleLogout
    }

    return (
        <AuthContext value={authValue}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;