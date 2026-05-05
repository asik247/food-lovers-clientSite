import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../Firebase/firebase.init';
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    //!create accoutn/Registation code;
    const registerUsers = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const usersInfo = {
       registerUsers
    }
    return (

        <AuthContext.Provider value={usersInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;