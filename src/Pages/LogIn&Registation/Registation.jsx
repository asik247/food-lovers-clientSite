import React, { useRef, useState } from 'react';
import { Link } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useForm from '../../Hooks/useForm';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';

const Registation = () => {

    // auth
    const { registerUsers } = useAuth();

    // state
    const [showPassword, setShowPassword] = useState(false);

    // custom hooks
    const [nameValue, handleNameChange] = useForm('');
    const [photoValue, handlePhotoChange] = useForm('');
    const [emailValue, handleEmailChange] = useForm('');
    const [passwordValue, handlePasswordChange] = useForm('');
    const [confarmPasswordValue, handleConfarmPasswordChange] = useForm('');

    // terms
    const handleTerms = useRef();

    // register submit
    const handleRegisterSubmit = (e) => {

        e.preventDefault();

        // terms validation
        const termsvalue = handleTerms.current.checked;

        if (!termsvalue) {
            return alert('Please accept Terms & Conditions');
        }

        // password validation
        if (passwordValue !== confarmPasswordValue) {
            return alert('Password does not match');
        }

        if (passwordValue.length < 6) {
            return alert('Password must be at least 6 characters');
        }

        // user profile
        const newUser = {
            displayName: nameValue,
            photoURL: photoValue
        };

        // register user
        registerUsers(emailValue, passwordValue)
            .then(res => {

                console.log(res.user);

                // update profile
                updateProfile(res.user, newUser)
                    .then(() => {
                        console.log('Profile Updated');
                    });

                // email verification
                sendEmailVerification(res.user)
                    .then(() => {
                        alert('Please check your email');
                    });

            })
            .catch(err => {
                console.log(err.message);
            });
    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-[#0f172a] px-4 py-10">

            <div className="w-full max-w-sm bg-[#111827] border border-gray-800 rounded-2xl shadow-2xl p-6">

                {/* heading */}
                <div className="text-center mb-6">

                    <h1 className="text-3xl font-bold text-white">
                        Create Account
                    </h1>

                    <p className="text-gray-400 mt-2 text-sm">
                        Register your account
                    </p>

                </div>

                {/* form */}
                <form
                    onSubmit={handleRegisterSubmit}
                    className="space-y-4"
                >

                    {/* full name */}
                    <div>

                        <label className="text-sm text-gray-300 font-medium">
                            Full Name
                        </label>

                        <input
                            type="text"
                            value={nameValue}
                            onChange={handleNameChange}
                            placeholder="Enter your full name"
                            className="w-full mt-2 px-4 py-3 bg-[#1f2937] border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 duration-300"
                        />

                    </div>

                    {/* photo url */}
                    <div>

                        <label className="text-sm text-gray-300 font-medium">
                            Photo URL
                        </label>

                        <input
                            type="text"
                            value={photoValue}
                            onChange={handlePhotoChange}
                            placeholder="Enter photo URL"
                            className="w-full mt-2 px-4 py-3 bg-[#1f2937] border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 duration-300"
                        />

                    </div>

                    {/* email */}
                    <div>

                        <label className="text-sm text-gray-300 font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            value={emailValue}
                            onChange={handleEmailChange}
                            placeholder="Enter your email"
                            className="w-full mt-2 px-4 py-3 bg-[#1f2937] border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 duration-300"
                        />

                    </div>

                    {/* password */}
                    <div>

                        <label className="text-sm text-gray-300 font-medium">
                            Password
                        </label>

                        <div className="relative mt-2">

                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={passwordValue}
                                onChange={handlePasswordChange}
                                placeholder="Enter password"
                                className="w-full px-4 py-3 bg-[#1f2937] border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 duration-300"
                            />

                            <button
                                onClick={() => setShowPassword(!showPassword)}
                                type="button"
                                className="absolute right-4 top-3 text-sm text-orange-400 font-medium"
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>

                        </div>

                    </div>

                    {/* confirm password */}
                    <div>

                        <label className="text-sm text-gray-300 font-medium">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            value={confarmPasswordValue}
                            onChange={handleConfarmPasswordChange}
                            placeholder="Confirm password"
                            className="w-full mt-2 px-4 py-3 bg-[#1f2937] border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 duration-300"
                        />

                    </div>

                    {/* terms */}
                    <div className="flex items-center gap-2 text-sm text-gray-400">

                        <input
                            type="checkbox"
                            ref={handleTerms}
                            className="checkbox checkbox-warning checkbox-sm"
                        />

                        <p>
                            I agree to Terms & Conditions
                        </p>

                    </div>

                    {/* button */}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 text-white font-bold hover:scale-[1.02] duration-300 shadow-lg"
                    >
                        Register
                    </button>

                </form>

                {/* login */}
                <p className="text-center text-gray-400 text-sm mt-6">

                    Already have an account?

                    <Link
                        to={'/auth'}
                        className="text-orange-400 font-semibold ml-2 hover:underline"
                    >
                        Login
                    </Link>

                </p>

            </div>

        </div>
    );
};

export default Registation;