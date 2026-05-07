import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Nav = () => {

    const { user, logOut } = useAuth();
    const [open, setOpen] = useState(false);

    // nav links
    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-orange-400 font-bold"
                            : "hover:text-orange-300 duration-300"
                    }
                >
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        isActive
                            ? "text-orange-400 font-bold"
                            : "hover:text-orange-300 duration-300"
                    }
                >
                    Dashboard
                </NavLink>
            </li>
        </>
    );

    // logout
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('Logout Success');
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className="sticky top-0 z-50">

            <div className="navbar px-6 py-3 bg-gradient-to-r from-[#0f172a] via-[#111827] to-[#1e293b] text-white shadow-2xl border-b border-gray-700">

                {/* navbar start */}
                <div className="navbar-start">

                    {/* mobile menu */}
                    <div className="dropdown">

                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-xl bg-[#1e293b] rounded-2xl w-52 text-white"
                        >
                            {links}
                        </ul>
                    </div>

                    {/* logo */}
                    <Link
                        to="/"
                        className="text-3xl font-extrabold tracking-wide"
                    >
                        <span className="text-orange-400">Review</span>Hub
                    </Link>
                </div>

                {/* navbar center */}
                <div className="navbar-center hidden lg:flex">

                    <ul className="menu menu-horizontal gap-6 text-lg font-medium">
                        {links}
                    </ul>

                </div>

                {/* navbar end */}
                <div className="navbar-end relative">

                    {
                        user ? (
                            <div className="relative">

                                {/* user image */}
                                <img
                                    onClick={() => setOpen(!open)}
                                    src={user?.photoURL}
                                    alt="user"
                                    className="w-12 h-12 rounded-full border-2 border-orange-400 object-cover cursor-pointer hover:scale-105 duration-300 shadow-lg"
                                />

                                {/* dropdown */}
                                {
                                    open && (
                                        <div className="absolute right-0 mt-4 w-60 bg-[#111827] border border-gray-700 rounded-2xl shadow-2xl p-4">

                                            {/* user info */}
                                            <div className="text-center border-b border-gray-700 pb-3 mb-3">

                                                <img
                                                    src={user?.photoURL}
                                                    alt=""
                                                    className="w-16 h-16 rounded-full mx-auto border-2 border-orange-400"
                                                />

                                                <h2 className="mt-2 text-lg font-bold text-white">
                                                    {user?.displayName || "User"}
                                                </h2>

                                                <p className="text-sm text-gray-400">
                                                    {user?.email}
                                                </p>
                                            </div>

                                            {/* menu */}
                                            <ul className="space-y-3">

                                                <li>
                                                    <NavLink
                                                        to="/addReview"
                                                        className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-orange-400 hover:text-black duration-300"
                                                    >
                                                        ➕ Add Review
                                                    </NavLink>
                                                </li>

                                                <li>
                                                    <NavLink
                                                        to="/myReviews"
                                                        className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-orange-400 hover:text-black duration-300"
                                                    >
                                                        ⭐ My Reviews
                                                    </NavLink>
                                                </li>

                                                <li>
                                                    <button
                                                        onClick={handleLogOut}
                                                        className="w-full py-2 rounded-xl bg-red-500 hover:bg-red-600 duration-300 text-white font-semibold"
                                                    >
                                                        Logout
                                                    </button>
                                                </li>

                                            </ul>

                                        </div>
                                    )
                                }

                            </div>
                        )
                            :
                            (
                                <div>

                                    <Link
                                        to="/auth"
                                        className="px-6 py-2 rounded-full bg-orange-400 hover:bg-orange-500 text-black font-bold duration-300 shadow-lg"
                                    >
                                        Login
                                    </Link>

                                </div>
                            )
                    }

                </div>

            </div>
        </div>
    );
};

export default Nav;