import React, { useState } from 'react';
import { Link } from 'react-router';

const LogIn = () => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 px-4 py-10">

            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-orange-100 p-8">

                {/* Heading */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-orange-500">
                        Welcome Back
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Login to your account
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-5">

                    {/* Email */}
                    <div>
                        <label className="block mb-2 font-semibold text-gray-700">
                            Email Address
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-2 font-semibold text-gray-700">
                            Password
                        </label>

                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-3 text-orange-500 font-semibold text-sm"
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>

                    {/* Remember + Forgot */}
                    <div className="flex items-center justify-between text-sm">

                        <label className="flex items-center gap-2 text-gray-600">
                            <input type="checkbox" className="checkbox checkbox-warning checkbox-sm" />
                            Remember me
                        </label>

                        <p className="text-orange-500 hover:underline cursor-pointer font-semibold">
                            Forgot Password?
                        </p>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-orange-500 to-amber-400 hover:scale-[1.02] duration-300 text-white font-bold py-3 rounded-xl shadow-lg"
                    >
                        Login Now
                    </button>

                    {/* Google Button */}
                    <button
                        type="button"
                        className="w-full border border-orange-200 hover:bg-orange-50 duration-300 py-3 rounded-xl font-semibold flex items-center justify-center gap-3"
                    >
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                            alt="google"
                            className="w-5 h-5"
                        />

                        Continue with Google
                    </button>
                </form>

                {/* Register Link */}
                <p className="text-center text-gray-600 mt-6">
                    Don’t have an account?
                   <Link to={'/auth/registation'}> <span className="text-orange-500 font-bold ml-2 cursor-pointer hover:underline">
                        Register
                    </span></Link>
                </p>

            </div>
        </div>
    );
};

export default LogIn;