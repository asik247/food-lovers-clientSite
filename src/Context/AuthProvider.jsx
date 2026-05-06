import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';
export const AuthContext = createContext(null);
import { GoogleAuthProvider } from "firebase/auth";
const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const [user,setUser] = useState(null)
    //!create accoutn/Registation code;
    const registerUsers = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Todo:Login with email and passwrod;
    const logInUsers = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //!Google login code;

    const googleLogin = () => {
       return signInWithPopup(auth,provider)
    }
    //Todo: onAuthStateChange code;
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=>unsubscribe()
    },[])
    const usersInfo = {
        registerUsers,
        logInUsers,
        googleLogin,
        user
    }
    return (

        <AuthContext.Provider value={usersInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;