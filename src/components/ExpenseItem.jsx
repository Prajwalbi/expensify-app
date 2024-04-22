import React from "react";
import { connect } from "react-redux";
import { removeExpense  } from "../actions/expenses";
import { Link, useNavigate } from "react-router-dom";



const ExpenseItem = ({description , note, amount, createdAt, id , dispatch }) => {
    const navigate = useNavigate();
    const handleEditExpense = () => {
        navigate(`/edit/${id}`);
    }
    return (
        <div>
           
            <Link to={ `/edit/${id}`} > 
            <p>{description}</p> </Link>
            <p>{amount} : {createdAt}</p>
            
           
             <button onClick={ () => (dispatch(removeExpense({ id })) )}>Remove Item</button>
             <button onClick= {handleEditExpense} >Edit</button>
        </div>
    );
}



export default connect()(ExpenseItem);

