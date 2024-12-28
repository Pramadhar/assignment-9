import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const registerLogin = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signout = () => {
        return signOut(auth)
    }
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const manageProfile = (name, image) => {
        updateProfile(auth, currentUser, {
            displayName: name, photoURL: image
        })
    }
    const authInfo = {
        manageProfile,
        registerLogin,
        signIn,
        signout,
        googleSignIn,
        user,
        setUser,
        loading,
        setLoading
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)

            }
            else {
                setUser(null)
            }
            setLoading(false)
            return () => {
                unsubscribed()
            }
        })
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;