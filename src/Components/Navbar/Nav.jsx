import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Nav = () => {
    const { user, logOut } = useAuth()
    console.log('currentUser', user);
    const [open, setOpen] = useState(false)
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/dashboard'}>DsahBoard</NavLink></li>
        <li><NavLink to={'/auth'}>LogIn</NavLink></li>
    </>
    const handleLogOut = ()=>{
        logOut()
        .then(()=>{
            console.log("logOut done");
        }).catch(err=>{
            console.log(err);
        })
    }

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">

                    <div className="navbar-end">
                        {
                            user
                                ?
                                <img

                                    onClick={() => setOpen(!open)}
                                    src={user?.photoURL}
                                    alt="user"
                                    className="w-12 h-12 rounded-full cursor-pointer"
                                />
                                : ''
                        }
                    </div>
                    <div>
                        {
                            open && <> <li><NavLink to={'/addReview'}>Add Review</NavLink></li>
                                <li><NavLink to={'/myReviews'}>My Reviews</NavLink></li>
                                <button onClick={handleLogOut}>Logout</button>
                                
                                </>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Nav;