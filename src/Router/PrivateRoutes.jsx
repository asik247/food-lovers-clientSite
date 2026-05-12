import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';
import { LineWave } from 'react-loader-spinner';


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation();
    // console.log(location);
    if (loading) {
        return <LineWave
            visible={true}
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="line-wave-loading"
            wrapperStyle={{}}
            wrapperClass=""
            firstLineColor=""
            middleLineColor=""
            lastLineColor=""
        />
    }
    if (user) {
        return children
    }
    return <Navigate state={location?.pathname} to={'/auth'}></Navigate>
};

export default PrivateRoutes;