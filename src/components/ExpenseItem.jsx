import React from "react";
import { connect } from "react-redux";
import { startRemoveExpense  } from "../actions/expenses";
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
        a: 'm',
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
    const formattedAmount = numeral(amount).format('0,0.00a');
    return (
            <Link className="list-item" to={ `/edit/${id}`} > 
            <div>
                <p className="list-utem__title">{description}</p> 
                <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
            </div>
            <h3 className="list-item__data"> ₹{formattedAmount} </h3>
            </Link>
    );
}



export default connect()(ExpenseItem);

