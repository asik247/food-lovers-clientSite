import React from 'react';
import { Link } from 'react-router';

const PageNotFound = () => {
    return (
          <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">

            {/* Fun Image */}
            <img
                src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                alt="404"
                className="w-72 mb-6"
            />

            {/* Text */}
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
                404
            </h1>

            <p className="text-xl text-gray-600 mb-6">
                Oops! Page not found 😅
            </p>

            {/* Button */}
            <Link to="/">
                <button className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-xl shadow-lg transition duration-300">
                    Back to Home
                </button>
            </Link>
        </div>
    );
};

export default PageNotFound;