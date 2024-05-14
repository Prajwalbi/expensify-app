// import React from "react";
// import { Route , Routes} from 'react-router-dom';
// import { connect } from 'react-redux';


// export const PrivateRoute = (props) => {
//    return (<div>
//      {/* <Routes > */}
//     <Route {...props}/>
//     {/* </Routes> */}
//    </div>);
// };

// const mapStateToProps = (state) => ({
//     isAuthenticated: !!state.auth.uid
// }); 


// export default connect(mapStateToProps)(PrivateRoute);

import React from "react";
import { Route, Navigate , Routes, Outlet} from 'react-router-dom';
import { connect } from 'react-redux';
import { useAuth } from "../contexts/authContext/index";
import Header from "../components/Header";

const PrivateRoute = () => {
  const { userLoggedIn } = useAuth();
  return userLoggedIn ? <div>
    <Header />
    <Outlet />
    </div> : <Navigate to="/" />;
};


export default PrivateRoute;
// const mapStateToProps = (state) => ({
//     isAuthenticated: !!state.auth.uid
    
// }); 

// export default connect(mapStateToProps)(PrivateRoute);
