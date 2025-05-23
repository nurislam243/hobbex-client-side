import { signInWithPopup, GoogleAuthProvider  } from 'firebase/auth';
import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { auth } from '../../firebase/firebase.config';
import { AuthContext } from '../../context/AuthContext';
import { Fade } from 'react-awesome-reveal';

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
        <Fade direction='down' triggerOnce>
            <div>
                <div className="w-full max-w-md p-4 shadow-2xl mt-[27px] sm:mt-[50px] lg:mt-[80px] 2xl:mt-[100px] mx-auto black-bg-dark-mode sm:p-8">
                    <h2 className="mb-3 text-3xl font-semibold text-center text-accent">Login to your account</h2>
                    <p className="text-sm text-center text-base-content">Don't have account?
                        <Link  to={'/registration'} className="focus:underline hover:underline text-blue-700"> Registration here</Link>
                    </p>
                    <form noValidate="" action="" className="space-y-8 mt-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm">Email address</label>
                                <input type="email" name="email" id="email" placeholder="Enter email address" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[9px] rounded-[2px] w-full input-bg-dark-mode" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label htmlFor="password" className="text-sm">Password</label>
                                    <a rel="noopener noreferrer" href="#" className="text-xs hover:underline">Forgot password?</a>
                                </div>
                                <input type="password" name="password" id="password" placeholder="Enter Password" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[9px] rounded-[2px] w-full input-bg-dark-mode" />
                            </div>
                        </div>
                        <button type="button" className="w-full px-8 py-5 font-semibold btn bg-primary/90 hover:bg-primary/40 cursor-pointer rounded-[2px] text-white sm:text-[16px]">Login</button>
                    </form>

                    {/* or */}
                    <div className="flex items-center w-full my-4">
                        <hr  className="w-full" />
                        <p className="px-3">OR</p>
                        <hr  className="w-full" />
                    </div>

                    {/* login with google */}
                    <div className="my-6 space-y-4">
                        <button aria-label="Login with Google" onClick={handleLoginGoogle} type="button" className="flex items-center justify-center mt-1 outline outline-base-content/50 focus:outline-base-content px-3.5 py-[9px] rounded-[2px] w-full text-lg gap-2">
                            <FcGoogle size={25}/>
                            <p>Login with Google</p>
                        </button>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Login;