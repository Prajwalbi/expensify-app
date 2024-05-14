import React from "react";
import { NavLink, Link, Navigate, useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import Authentication from "./Authentication";
import { doSignOut } from "../firebase/auth";

// const Header = ({ signOut }) => {
//     const navigate = useNavigate();
//     return (
//         <div>
//             <Authentication />
//             <h1>Expensify</h1>
            
//             <div className="Nav" style={{display:"flex"}}>
//                 <NavLink to="/dashboard" >DashBoard</NavLink>
//                 <NavLink to="/home" >Add Expense</NavLink>
//                 {/* <NavLink to="/edit" >Edit</NavLink>
//                 <NavLink to="/help" >Help</NavLink> */}
//                 {/* <button onClick={signOut}>Logout</button> */}
//                 <button onClick={() => { doSignOut().then(() => {navigate("/")})}}>Logout</button>
//             </div>
//         </div>
//     );
// }

// const mapDispatchToProps = (dispatch) => ({
//     signOut : () => dispatch(startLogout())
// })


// export default  connect(null, mapDispatchToProps)(Header);

//=======================================
const Header = () => {
    const navigate = useNavigate();
    return (
        <div>
            {/* <Authentication /> */}
            <h1>Expensify</h1>
            
            <div className="Nav" style={{display:"flex"}}>
                <NavLink to="/dashboard" >DashBoard</NavLink>
                <NavLink to="/home" >Add Expense</NavLink>
                {/* <NavLink to="/edit" >Edit</NavLink>
                <NavLink to="/help" >Help</NavLink> */}
                {/* <button onClick={signOut}>Logout</button> */}
                <button onClick={() => { doSignOut().then(() => {navigate("/")})}}>Logout</button>
            </div>
        </div>
    );
}

export default Header;





