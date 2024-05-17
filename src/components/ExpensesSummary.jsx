import React from "react";
import getVisibleExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";
import { connect } from "react-redux";
import numeral from "numeral";
import { Link } from "react-router-dom";

// const ExpensesSummary = (props) => {

//     const totalAmount = selectExpensesTotal(props.expenses);
//     const formattedAmount = numeral(totalAmount / 100).format('0,0.00a');
//    return (
//         <div>
//             Viewing { props.expenses.length } {props.expenses.length === 1 ? "expense" : "expenses"} totalling  ₹{formattedAmount} 
//         </div>
//    );
// }
// const mapStateToProps = (state) => {
//     return {
//         expenses: getVisibleExpenses(state.expenses, state.filters)
//     }
// }
// export default connect(mapStateToProps)(ExpensesSummary);


//other way 
const ExpensesSummary = ({expenseCount, expenseTotal}) => {
    const formattedAmount = numeral(expenseTotal).format('0,0.00a');
   return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing  <span>{ expenseCount } </span> { expenseCount === 1 ? "expense" : "expenses"} totalling <span>₹{formattedAmount}</span>  </h1> 
                <div className="page-header__actions">
                    <Link to="/home" className="button">Add Expense</Link>
                </div>
            </div>
        </div>
   );
}
const mapStateToProps = (state) => {
    const visibleExpenses =  getVisibleExpenses(state.expenses, state.filters)
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: selectExpensesTotal(visibleExpenses)
    }
}
export default connect(mapStateToProps)(ExpensesSummary);