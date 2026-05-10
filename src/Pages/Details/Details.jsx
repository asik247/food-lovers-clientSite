import React from 'react';
import { useLoaderData } from 'react-router';

const Details = () => {
    const datas = useLoaderData();
    console.log(datas);
    
    return (
        <div>
            <p>Details Pages</p>
        </div>
    );
};

export default Details;