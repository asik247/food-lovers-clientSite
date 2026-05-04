import React from 'react';
import Nav from '../Components/Navbar/Nav';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;