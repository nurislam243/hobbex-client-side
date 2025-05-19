import React from 'react';
import { Link } from 'react-router';

const SignUp = () => {
    return (
        <div>
            <div className="flex flex-col max-w-md p-6 bg-black mx-auto mt-[100px] text-white rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                    <p className="text-sm dark:text-gray-600">Please sign up to your account</p>
                </div>
                <form noValidate="" action="" className="space-y-12">
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
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="confirmPassword" className="text-sm">Confirm Password</label>
                            </div>
                            <input type="password" name="confirmPassword" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold cursor-pointer btn hover:btn-accent rounded-md dark:bg-violet-600 dark:text-gray-50">Sign Up</button>
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

export default SignUp;