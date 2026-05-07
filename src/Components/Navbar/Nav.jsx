import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Nav = () => {

    const { user, logOut } = useAuth();
    const [open, setOpen] = useState(false);

    // navbar links
    const links = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>

            <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
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
        <div className="navbar bg-base-100 shadow-md px-4">

            {/* navbar start */}
            <div className="navbar-start">

                {/* mobile dropdown */}
                <div className="dropdown">

                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
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
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {links}
                    </ul>
                </div>

                {/* logo */}
                <Link to="/" className="btn btn-ghost text-2xl font-bold">
                    ReviewHub
                </Link>
            </div>

            {/* center links */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
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
                                className="w-12 h-12 rounded-full cursor-pointer border-2 border-orange-400"
                            />

                            {/* dropdown */}
                            {
                                open && (
                                    <div className="absolute right-0 mt-3 w-52 bg-base-100 shadow-lg rounded-lg p-3 z-50">

                                        <ul className="space-y-2">

                                            <li>
                                                <NavLink
                                                    to="/addReview"
                                                    className="btn btn-sm btn-ghost w-full justify-start"
                                                >
                                                    Add Review
                                                </NavLink>
                                            </li>

                                            <li>
                                                <NavLink
                                                    to="/myReviews"
                                                    className="btn btn-sm btn-ghost w-full justify-start"
                                                >
                                                    My Reviews
                                                </NavLink>
                                            </li>

                                            <li>
                                                <button
                                                    onClick={handleLogOut}
                                                    className="btn btn-sm btn-error text-white w-full"
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
                            <div className="flex gap-2">

                                <Link
                                    to="/auth"
                                    className="btn btn-sm btn-outline"
                                >
                                    Login
                                </Link>

                                

                            </div>
                        )
                }

            </div>
        </div>
    );
};

export default Nav;