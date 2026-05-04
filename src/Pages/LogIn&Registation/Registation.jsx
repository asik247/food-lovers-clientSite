import React, { useState } from 'react';
import { Link } from 'react-router';

const Registation = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 px-4 py-10">

            <div className="w-full max-w-lg bg-white shadow-2xl rounded-3xl p-8 border border-orange-100">

                {/* Heading */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-orange-500">
                        Create Account
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Register your account to continue
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-5">

                    {/* Name */}
                    <div>
                        <label className="block mb-2 font-semibold text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    {/* Photo URL */}
                    <div>
                        <label className="block mb-2 font-semibold text-gray-700">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            placeholder="Enter photo URL"
                            className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

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
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter password"
                                className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3 text-sm text-orange-500 font-semibold"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block mb-2 font-semibold text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    {/* Terms */}
                    <div className="flex items-center gap-2">
                        <input type="checkbox" className="checkbox checkbox-warning" />
                        <p className="text-sm text-gray-600">
                            I agree to the Terms & Conditions
                        </p>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-orange-500 to-amber-400 hover:scale-[1.02] duration-300 text-white font-bold py-3 rounded-xl shadow-lg"
                    >
                        Register Now
                    </button>
                </form>

                {/* Login Link */}
                <p className="text-center text-gray-600 mt-6">
                    Already have an account?
                    <Link to={'/auth'}>  <span className="text-orange-500 font-bold cursor-pointer ml-2 hover:underline">
                        Login
                    </span></Link>
                </p>
            </div>
        </div>
    );
};

export default Registation;