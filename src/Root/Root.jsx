import React from 'react';
import Nav from '../Components/Navbar/Nav';
import { Outlet } from 'react-router';
import Foot from '../Components/Footer/Foot';

const Root = () => {
    return (
        <div className='w-11/12 mx-auto '>
            <Nav></Nav>
            <Outlet></Outlet>
            <Foot></Foot>
        </div>
    );
};

export default Root;