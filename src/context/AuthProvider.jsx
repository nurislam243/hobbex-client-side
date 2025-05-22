import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import Swal from 'sweetalert2';

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [theme, setTheme] = useState(true);

    // create user using email and password
    const createUser = (email, password, name, profileImage, navigate) => {
        createUserWithEmailAndPassword(auth, email, password)
       .then((userCredential) => { 
        const passwordUser = userCredential.user;
        setUser(passwordUser);

        // update profile
        updateProfile(auth.currentUser, {
          displayName: name, photoURL: profileImage
        }).then(() => {
            setUser({
            ...auth.currentUser, name, profileImage
            });
        }).catch((error) => {
          alert(error)
        });

        Swal.fire({
          icon: 'success',
          title: 'Registration Successful!',
          text: 'Welcome . Your account has been created successfully.',
        });

        navigate('/')
        })

        .catch((error) => {
            if (error.code === 'auth/email-already-in-use') {
                Swal.fire('Email Already Registered', 'This email is already registered! Please try logging in.', 'error');
              } else if (error.code === 'auth/invalid-email') {
                Swal.fire('Invalid Email', 'Please enter a valid email address.', 'error');
              } else {
                Swal.fire('Error', error.message, 'error');
              }
        });

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
        handleLogout,
        theme,
        setTheme,
        loading
    }


    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
    });
    
    return () => {
        unsubscribe();
    }
    }, []);

    return (
        <AuthContext value={authValue}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;