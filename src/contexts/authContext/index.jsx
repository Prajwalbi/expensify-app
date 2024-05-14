import { onAuthStateChanged , getAuth} from "firebase/auth";
import React ,{ useContext, useEffect, useState } from "react";
import { createContext } from "react";
import Login from "../../components/Login"
import Header from "../../components/Header"
import { startSetExpenses } from "../../actions/expenses";
import configureStore from "../../store/configureStore";

const AuthContext = createContext();
export function useAuth(){
    return useContext(AuthContext);
}
const auth = getAuth();
export function AuthProvider( {children} ){   

    // const store = configureStore();

    const [currentUser , setCurrentuser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState(null);


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, intializeUser);
        
    },  [])


    // useEffect(() => {
    //     if (userLoggedIn) {
    //         store.dispatch(startSetExpenses());
    //     }
    // }, []);

async function intializeUser(user){
    if(user){
        setCurrentuser({ ...user });
        setUserLoggedIn(true);
        setUserId(user.uid);
        console.log("logged in", user.uid);


    }else{
        console.log("Logged out ");
        setCurrentuser(null);
        setUserLoggedIn(false);  
        setUserId(null);
    }
    setLoading(false);
}
    const value = {
        currentUser,
        userLoggedIn,
        loading, 
        userId
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}

// const mapStateToProps = () => {

// }
// export default connect(mapStateToProps)(AuthProvider);