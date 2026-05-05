import React, { useRef, useState } from 'react';
import { Link } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useForm from '../../Hooks/useForm';

const Registation = () => {
    const [showPassword,setShowPassword] = useState(false)
    const {registerUsers} = useAuth()
    const [nameValue,handleNameChange] = useForm('')
    const [photoValue,handlePhotoChange] = useForm('')
     const [emailValue,handleEmailChange] = useForm('')
    const [passwordValue,handlePasswordChange] = useForm('')
    const [confarmPasswordValue,handleConfarmPasswordChange] = useForm('')
    const handleTerms = useRef();
    

    
    const handleRegisterSubmit = (e)=>{
        e.preventDefault();
        console.log('clicked',nameValue,photoValue,emailValue,passwordValue,confarmPasswordValue);
        const value = handleTerms.current.checked
        console.log(value);
        //! RegisterUser code;
        registerUsers(emailValue,passwordValue)
        .then(res=>{
            console.log(res.user);
        }).catch(err=>{
            console.log(err.message);
        })
    }

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
                <form onSubmit={handleRegisterSubmit} className="space-y-5">

                    {/* Name */}
                    <div>
                        <label className="block mb-2 font-semibold text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            value={nameValue}
                            onChange={handleNameChange}
                            placeholder="Enter your full name"
                            className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    {/* Photo URL */}
                    <div>
                        <label className="block mb-2 font-semibold text-gray-700">
                            Photo URL
                        </label>
                        <input value={photoValue} onChange={handlePhotoChange}  className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400" type="text" name="" id="" placeholder='Enter PhotoURL'/>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-2 font-semibold text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={emailValue}
                            onChange={handleEmailChange}
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
                                type={showPassword ? 'text':'password'}
                                value={passwordValue}
                                onChange={handlePasswordChange}
                                placeholder="Enter password"
                                className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />

                            <button onClick={()=>setShowPassword(!showPassword)}
                                type="button"
                                className="absolute right-3 top-3 text-sm text-orange-500 font-semibold"
                            >
                                
                                {showPassword ? "Hide" :"Show"}
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
                            value={confarmPasswordValue}
                            onChange={handleConfarmPasswordChange}
                            placeholder="Confirm your password"
                            className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    {/* Terms */}
                    <div className="flex items-center gap-2">
                        <input type="checkbox" ref={handleTerms}  className="checkbox checkbox-warning" />
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