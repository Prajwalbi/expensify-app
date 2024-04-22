import React from "react";
import { connect } from "react-redux";
import ExpenseItem from "./ExpenseItem";
import getVisibleExpenses from "../selectors/expenses";


const ExpenseList =  (props) => {
    return (
        <div>
            <h1>Expense List</h1>
            
            {console.log(props.expenses.length)}
        {props.expenses.map((expense) => {

        return <ExpenseItem key={ expense.id } {...expense}/>
    }) }
        </div>
    );
}

const mapStateToProps = ((state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    };
});
//ConnectedExpenseList is a HOC
export default connect(mapStateToProps)(ExpenseList);
