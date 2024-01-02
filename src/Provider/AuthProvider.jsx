import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../fireBase/firebase.config";


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loader, setLoader] = useState(true)
    //google provider
    const googleProvider = new GoogleAuthProvider()
    // sign up authenticastion
    const signUp = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoader(false);
        return signInWithEmailAndPassword(auth, email, password)
    }
    //google sign in
    const googleSignIn = () => {
        setLoader(false)
        return signInWithPopup(auth, googleProvider)
    }
    //get current user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoader(false)
            console.log(currentUser)
        })
        return () => unSubscribe()
    }, [])
    // context value
    const authInFo = {
        auth,
        signUp,
        user,
        loader,
        signIn,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInFo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;