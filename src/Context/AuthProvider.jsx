import React, { createContext } from 'react';
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const usersInfo = {
        name: 'ar',
        id: 20
    }
    return (

        <AuthContext.Provider value={usersInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;