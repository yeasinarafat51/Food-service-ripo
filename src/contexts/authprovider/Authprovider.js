import React, {  createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';

 export const AuthContext = createContext();
const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();
 const Authprovider = ({children}) => {
    const [user, setuser] = useState('null');
    const [loading, setloading] = useState(true);

    const createuser = (email, password) =>{
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) =>{
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () =>{
        localStorage.removeItem('genius-token')
        return signOut(auth);
    }
    const googleSignin = () =>{
        setloading(true)
        return signInWithPopup(auth, googleprovider);
    }

    useEffect(() =>{
       const unsubcribe= onAuthStateChanged(auth, currentuser =>{
            console.log(currentuser)
            setuser(currentuser)
            setloading(false);
        });
        return () =>{
            return unsubcribe();
        }
    },[])
    

    const authinfo={
        user,
        loading,
        createuser,
        login,
        logout,
        googleSignin

    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default Authprovider;