import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../fireBase/firebase.config";


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loader, setLoader] = useState(true)

    // sign up authenticastion
    const signUp = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
const signIn=(email,password)=>{
    setLoader(false);
    return signInWithEmailAndPassword(auth,email,password)
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
        signIn
    }

    return (
        <AuthContext.Provider value={authInFo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;