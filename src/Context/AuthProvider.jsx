import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../Firebase/firebase.init';
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    //!create accoutn/Registation code;
    const registerUsers = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logInUsers = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const usersInfo = {
       registerUsers,
       logInUsers
    }
    return (

        <AuthContext.Provider value={usersInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;