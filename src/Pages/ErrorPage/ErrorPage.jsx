import React from 'react';
import { useRouteError } from 'react-router';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Something went wrong</h1>
            <p>{error?.message}</p>
        </div>
    );
};

export default ErrorPage;