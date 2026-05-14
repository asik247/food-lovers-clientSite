import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';
export const AuthContext = createContext(null);
import { GoogleAuthProvider } from "firebase/auth";
import axios from 'axios';
import useInstance from '../Hooks/useInstance';

const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const instance = useInstance()
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

    //!LogOut code;
    const logOut = ()=>{
        return signOut(auth)
    }
    //Todo: onAuthStateChange code;
    useEffect(()=>{
        //!JWT Relative code here✔️✔️
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser){
                const userEmail = {email:currentUser.email}
                instance.post('/getJWTToken',userEmail)
                .then(res=>{
                    console.log('after generate jwt token',res.data.token);
                    localStorage.setItem('jwtToken',res.data.token)
                })
            }
            else{
                localStorage.removeItem('jwtToken')
            }
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>unsubscribe()
    },[instance])
    const usersInfo = {
        registerUsers,
        logInUsers,
        googleLogin,
        user,
        logOut,
        loading
    }
    return (

        <AuthContext.Provider value={usersInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;