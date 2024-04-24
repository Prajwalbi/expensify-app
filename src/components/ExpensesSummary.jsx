import React from "react";
import getVisibleExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";
import { connect } from "react-redux";
import numeral from "numeral";

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
    const formattedAmount = numeral(expenseTotal / 100).format('0,0.00a');
   return (
        <div>
           <h1>Viewing { expenseCount } { expenseCount === 1 ? "expense" : "expenses"} totalling  ₹{formattedAmount} </h1> 
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