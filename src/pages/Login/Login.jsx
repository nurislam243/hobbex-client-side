import { signInWithPopup, GoogleAuthProvider  } from 'firebase/auth';
import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { auth } from '../../firebase/firebase.config';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
    const googleProvider = new GoogleAuthProvider();
    const {user, setUser} = useContext(AuthContext);
    // const navigate = useNavigate();
    console.log(user);

    const handleLoginGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
          const googleUser = result.user;
          console.log(googleUser);
          setUser(googleUser);
          Swal.fire('Login Successful', 'You have successfully logged in.', 'success');
        //   navigate(from?from:"/");
        }).catch((error) => {
            let errorMessage = '';

            if (error.code === 'auth/wrong-password') {
              errorMessage = 'Incorrect password. Please try again.';
              return;
            } 
            else if (error.code === 'auth/user-not-found') {
              errorMessage = 'No user found with this email.';
            }
            else if (error.code === 'auth/popup-closed-by-user') {
              errorMessage = 'Popup closed before completing sign in.';
            } 
            else {
              errorMessage = error.message;
            }
          
            Swal.fire('Error', errorMessage, 'error');
        });
    }
    return (
        <div>
            <div className="w-full max-w-md p-4 rounded-md shadow mt-[100px] mx-auto sm:p-8 bg-black text-white dark:bg-gray-50 dark:text-gray-800">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                <p className="text-sm text-center dark:text-gray-600">Don't have account?
                    <Link  to={'/registration'} className="focus:underline hover:underline text-blue-700"> Registration here</Link>
                </p>
                <form noValidate="" action="" className="space-y-8 mt-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                    </div>
                    <button type="button" className="w-full px-8 py-3 font-semibold btn hover:btn-accent cursor-pointer rounded-md dark:bg-violet-600 dark:text-gray-50">Login</button>
                </form>

                {/* or */}
                <div className="flex items-center w-full my-4">
                    <hr  className="w-full dark:text-gray-600" />
                    <p className="px-3 dark:text-gray-600">OR</p>
                    <hr  className="w-full dark:text-gray-600" />
                </div>

                {/* login with google */}
                <div className="my-6 space-y-4">
                    <button aria-label="Login with Google" onClick={handleLoginGoogle} type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                        <FcGoogle />
                        <p>Login with Google</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;