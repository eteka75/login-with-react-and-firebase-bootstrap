import { createContext, useState, useEffect } from "react";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth"
import { auth } from "../firebase.config";
export const UserContext = createContext();

export function UserContextProvider(props) {
    const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd);
    const signIn = (email,pwd)=>signInWithEmailAndPassword(auth, email, pwd);
    const [currentUser, setCurrentUser] = useState('');
    const [loadingData, setLoadingData] = useState(true);

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser);
            setLoadingData(false);
        });
        return unsubscribe;
    },[])

    const [modaleState, setModaleState] = useState({
        SignUpModale: false,
        SignInModale: false
    });

    const toggleModals = (modale) => {
        if (modale === "SignIn") {
            setModaleState({
                SignUpModale: false,
                SignInModale: true
            });
        }
        if (modale === "SignUp") {
            setModaleState({
                SignUpModale: true,
                SignInModale: false
            });
        }
        if (modale === "Close") {
            setModaleState({
                SignUpModale: false,
                SignInModale: false
            });
        }
    }
    return (
        <UserContext.Provider value={{ modaleState, toggleModals, signUp, currentUser, signIn  }}>
            {!loadingData && props.children}
        </UserContext.Provider>)
}