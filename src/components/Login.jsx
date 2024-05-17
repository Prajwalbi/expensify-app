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
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Budget App</h1>
                <p>It's time to get your expenses under control</p>
                 <button onClick={ clickHandler } className="button-29">Login with Google</button>
            </div>
         </div>
    </div>)
}

export default Login;