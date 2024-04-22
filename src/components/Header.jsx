import React from "react";
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Expensify</h1>
            
            <div className="Nav" style={{display:"flex"}}>
                <NavLink to="/" >DashBoard</NavLink>
                <NavLink to="/home" >Add Expense</NavLink>
                <NavLink to="/edit" >Edit</NavLink>
                <NavLink to="/help" >Help</NavLink>
            </div>
        </div>
    );
}

export default Header;
