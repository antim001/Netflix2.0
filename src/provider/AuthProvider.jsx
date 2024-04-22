import {createContext,useEffect,useState} from 'react';
import {  createUserWithEmailAndPassword, signOut,onAuthStateChanged,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase.config.js';
 export const AuthContext=createContext(null);
const AuthProvider = ({children}) => {
 const [user,setUser]=useState({})
 const [loading,setLoading]=useState(true)
const createUser=(email,password)=>{
  return  createUserWithEmailAndPassword(auth, email, password)
}
const signIn=(email,password)=>{
    setLoading(true)
  return  signInWithEmailAndPassword(auth, email, password)
  
}
const logOut=()=>{
    return signOut(auth)
}
 
useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
        setUser(user);
        setLoading(false);
      });
      return ()=>{
        unsubscribe();
      }
},[])
    const authInfo={
         createUser,signIn,user,logOut,loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;