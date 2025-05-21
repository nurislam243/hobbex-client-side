import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
// import { toast } from 'react-toastify';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegistration = (e) =>{
        e.preventDefault();
        const form = e.target;
        // const formData = new FormData (form);
        const name = form.name.value;
        const email = form.email.value;
        const profileImage = form.photoUrl.value;
        const password = form.password.value;

        if (name === "") {
            toast.error('⚠️ Please enter your name!', { position: "top-center" });
            return;
        }
        if (email === "") {
            toast.error('⚠️ Please enter your email address!', { position: "top-center" });
            return;
        }
        if(profileImage === ""){
            toast.error('⚠️ Please enter your profile URL', { position: "top-center" });
            return;
        }
        if (!/\d/.test(password)) {
            toast.error('⚠️ Password must include at least one number (0-9).', { position: "top-center" });
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.error('⚠️ Password must include at least one lowercase letter (a-z).', { position: "top-center" });
            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast.error('⚠️ Password must include at least one uppercase letter (A-Z).', { position: "top-center" });
            return;
        }
        if (password.length < 6) {
            toast.error('⚠️ Password must be at least 6 characters long.', { position: "top-center" });
            return;
        }
        // const confirmPassword = form.confirmPassword.value;

        // create user in the firebase
        createUser(email, password, name, profileImage, navigate)
    }
    return (
        <div>
            <div className="flex flex-col max-w-md p-6 bg-black mx-auto mt-[100px] text-white rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Register</h1>
                    <p className="text-sm dark:text-gray-600">Please Registration your account</p>
                </div>
                <form onSubmit={handleRegistration} className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                            <input type="text" name="name" id="name" placeholder="John Doe" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="photoUrl" className="block mb-2 text-sm">Photo URL</label>
                            <input type="text" name="photoUrl" id="photoUrl" placeholder="Enter Photo URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        {/* <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="confirmPassword" className="text-sm">Confirm Password</label>
                            </div>
                            <input type="password" name="confirmPassword" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div> */}
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold cursor-pointer btn hover:btn-accent rounded-md dark:bg-violet-600 dark:text-gray-50">Register</button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-600">Already have an account ? 
                            <Link rel="noopener noreferrer" to={'/login'} href="#" className="hover:underline dark:text-violet-600 text-blue-700"> Login</Link>.
                        </p>
                    </div>
                </form>
            </div>           
        </div>
    );
};

export default Register;