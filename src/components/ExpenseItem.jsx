import React from "react";
import { connect } from "react-redux";
import { removeExpense  } from "../actions/expenses";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";


// Register Indian locale for numeral.js
numeral.register('locale', 'in', {
    delimiters: {
        thousands: ',',
        decimal: '.'
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal: function (number) {
        return ''; // No ordinal suffix in Indian numbering system
    },
    currency: {
        symbol: '₹'
    }
});

// Set numeral.js locale to Indian
numeral.locale('in');

const ExpenseItem = ({description , note, amount, createdAt, id , dispatch }) => {
    const navigate = useNavigate();
    const handleEditExpense = () => {
        navigate(`/edit/${id}`);
    }
    const formattedAmount = numeral(amount / 100).format('0,0.00a');
    return (
        <div>
           
            <Link to={ `/edit/${id}`} > 
            <p>{description}</p> </Link>
            <p>
            ₹{formattedAmount} 
                -
                {moment(createdAt).format('MMMM Do, YYYY')}
            </p>
            
           
             <button onClick={ () => (dispatch(removeExpense({ id })) )}>Remove Item</button>
             <button onClick= {handleEditExpense} >Edit</button>
        </div>
    );
}



export default connect()(ExpenseItem);

