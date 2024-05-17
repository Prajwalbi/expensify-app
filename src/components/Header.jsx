import React from "react";
import {  Link, useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import Authentication from "./Authentication";
import { doSignOut } from "../firebase/auth";

// const Header = ({ startLogout }) => {
//     const navigate = useNavigate();
//     return (
//         <div>
//             <div className="Nav" style={{display:"flex"}}>
//                 <Link to="/dashboard" >
//                 <h1>Expensify</h1>
//                 </Link>
//                 <Link to="/home" >Add Expense</Link>
//                 {/* <button onClick={() => { doSignOut().then(() => {navigate("/")})}}>Logout</button> */}
//                 <button onClick={startLogout}>Logout</button>
//             </div>
//         </div>
//     );
// }

// const mapDispatchToProps = (dispatch) => ({
//     startLogout : () => dispatch(startLogout())
// })


// export default  connect(null, mapDispatchToProps)(Header);

// ======================================= 
const Header = () => {
    const navigate = useNavigate();
    return (
        <div>
            <header className="header">
                <div className="content-container">
                    <div className="header__content">
                        <Link className="header__title" to="/dashboard" >
                            <h1>Expensify</h1>
                        </Link>
                        {/* <NavLink to="/home" >Add Expense</NavLink> */}
                        <button className="button button--link" onClick={() => { doSignOut().then(() => {navigate("/")})}}>Logout</button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;





