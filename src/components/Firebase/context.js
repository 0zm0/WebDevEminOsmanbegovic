import React, { useContext, useEffect, useState } from 'react';
import { auth } from "./firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)   

    function signUp(email, password) {
      const db = getFirestore()
      try {
        const docRef =  addDoc(collection(db, "users"), {
          email: email
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      return auth.createUserWithEmailAndPassword(email, password);
    }

    function logIn(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logOut(){
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user)
        setLoading(false)
        
    })
    
      return unsubscribe
    }, [])
    

    

    const value = {
        currentUser,
        logIn,
        signUp,
        logOut,
        resetPassword,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
