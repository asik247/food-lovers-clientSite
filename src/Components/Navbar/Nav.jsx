import React from 'react';
import { Link, NavLink } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Nav = () => {
    const { user, logOut } = useAuth()
    console.log('currentUser', user);
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/auth'}>LogIn</NavLink></li>
        <li><NavLink to={'/dashboard'}>DsahBoard</NavLink></li>
        {user && <>
            <li><NavLink to={'/products'}>Products</NavLink></li>
            <li><NavLink to={'/bids'}>Bids</NavLink></li>
        </>}

    </>
    const handleLogOut = () => {
        logOut()
            .then(() => {
                alert('logOut successfully!')
            }).catch(err => {
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
                                ? <button onClick={handleLogOut} className="btn">LogOut</button>
                                : <Link to="/auth" className="btn">LogIn</Link>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Nav;