import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../fireBase/firebase.config";


export const AuthContext = createContext()
const AuthProvider = ({ children }) => {


    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }



    const authInFo = {
        auth,
        signUp,
    }

    return (
        <AuthContext.Provider value={authInFo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;