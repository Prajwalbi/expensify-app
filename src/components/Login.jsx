import React, { useState } from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
import { useAuth } from "../contexts/authContext/index";
import { doSignInWithGoogle } from "../firebase/auth";
import { Navigate } from "react-router-dom";

// const Login = (props) => {
//     return (<div>
//      <button onClick={ props.startLogin }>Login</button>
    
//     </div>);
// }

// const mapDispatchToProps = (dispatch) => ({
//     startLogin: () => dispatch(startLogin())
// });

// export default connect(undefined, mapDispatchToProps)(Login);

const Login = () => {

    
    const { userLoggedIn } = useAuth();

    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const clickHandler = () => {
        console.log("login button clicked");
        if(!isSigningIn ){
            setIsSigningIn(true);
            doSignInWithGoogle().catch(err => {
                setIsSigningIn(false);
            });
             
        }
       
    }

    return (<div>
        {userLoggedIn && <Navigate  to={"/dashboard"} replace={true}/>}
         <button onClick={ clickHandler }>Login</button>
        
    </div>)
}

export default Login;