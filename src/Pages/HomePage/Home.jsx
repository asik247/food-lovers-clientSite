import React, { use, useEffect } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
const Home = () => {
    const userInfo = use(AuthContext)
    console.log(userInfo);
    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h1>hom</h1>
        </div>
    );
};

export default Home;